$(document).ready(readeDocumentForm);
$(document).ready(readeStyle);

function readeStyle() {
    $('#myCarousel').carousel({
        interval: false
    });
    $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
    });

    /**
 * Инициализация плагина jquery.maskedinput
 */
    $("#userPhone").mask("+375(99)999-99-99");
    $("#userPhonePrice").mask("+375(99)999-99-99");
    $("#userPhoneRequest").mask("+375(99)999-99-99");
}

/**
 * Функция для отправки письма на сервер.
 *
 * $formPhone - jquery элемент по id формы.
 * $formInfo - jquery элемент Блок для вывода информации
 * URLPHP - Путь до php файла.
 * messages -Сообщение о результатах отправки письма
 */
function readeDocumentForm() {
    var PHPURL ={
        reguestForm: "php/getMailFromReguest.php",
        sendPhoneForm: "php/getMailFromSite.php",
        findPriceForm: "php/getMailFromFindPrice.php"
    };
    var statusMessage={
        error : "Введите номер!",
        incorrect : "Неверно введен номер!",
        successfull : "Ваша заявка принята, с Вами скоро свяжутся!",
        errorServer: "Что-то пошло не так! Попробуйте снова.",
        fullErrorServer: 'Произошла ошибка...'
    };
    var textBlock = "*Количество карт по акции ограничено";
    var regPhone = /\+375\(\d\d\)\d\d\d\-\d\d\-\d\d/;

    /**
     * customValidationForm функция для валитации данных по регулярному выражению
     *
     * @param $input - jquery элемент формы
     * @param regExpression - регулярное ворожение по которому будет вестись сравнение
     * @param funError - функции для отображения того что поля пустое
     * @param funIncorrect - функции для отображения того что поля заполнено некорректно
     * @returns {boolean}
     */
    function customValidationForm($input, regExpression, funError, funIncorrect) {
        var _inputVal = $input.val();
        if(_inputVal === ""){
            funError();
            return false;
        } else {
            if(!regExpression.test(_inputVal)){
                funIncorrect();
                return false;
            } else {
                return true;
            }
        }
    };


    /**
     *
     * @param $block
     * @param stringStatusMessage
     * @returns {_logStatusMessage}
     */
    function logStatusMessage($block, stringStatusMessage) {
        function _logStatusMessage() {
            $block.text(stringStatusMessage);
        };
        return _logStatusMessage;
    };

    /**
     *
     * @param formData
     * @param URLphpFile
     */
    function ajaxReguest(
        formData,
        URLphpFile,
        $blockInfo,
        blockStatusMessage,
        $formInput,
        $openGratitude,
        $closeCurentModal) {
        $.ajax({
            type: "POST",
            url: URLphpFile,
            processData: false,
            contentType: false,
            data: formData,
            success: serverSuccess($blockInfo, blockStatusMessage, $formInput, $openGratitude, $closeCurentModal),
            error: serverError($blockInfo, blockStatusMessage)
        });
    };


    /**
     *
     * @param $blockInfo
     * @param blockStatusMessage
     * @param $formInput
     * @param $openGratitude
     * @param $closeCurentModal
     * @returns {_serverSuccess}
     */
    function serverSuccess($blockInfo, blockStatusMessage, $formInput, $openGratitude, $closeCurentModal) {
        function _serverSuccess(data) {
            if(data==="error"){
                logStatusMessage($blockInfo, blockStatusMessage.error)();
            } else if (data==="incorrect"){
                logStatusMessage($blockInfo, blockStatusMessage.incorrect)();
            } else if (data==="successfull"){
                logStatusMessage($blockInfo, '')();
                clearForm($formInput);
                if(!!$closeCurentModal){
                    $closeCurentModal.modal('hide');
                    $openGratitude.modal('show');
                }else {
                    $openGratitude.modal('show');
                }
            }else {
                logStatusMessage($blockInfo, blockStatusMessage.errorServer)();
            };
        };
        return _serverSuccess;
    };

    /**
     *
     * @param $blockInfo
     * @param blockStatusMessage
     * @returns {_serrError}
     */
    function serverError($blockInfo, blockStatusMessage) {
        function _serrError(xhr, str){
            logStatusMessage($blockInfo, blockStatusMessage.fullErrorServer)();
        };
        return _serrError;
    };

    /**
     *
     * @param $formInput
     */
    function clearForm($formInput) {
        $formInput.val("");
    };

    /**
     *
     * @param $bloclLister
     * @param $blockInfo
     */
    function unlockForm($bloclLister, $blockInfo, oldTextBlock) {
        $bloclLister.on("focus", function () {
            if(!!oldTextBlock){
                logStatusMessage($blockInfo, oldTextBlock)();
                console.log("oldTextBlock");
            } else {
                logStatusMessage($blockInfo, '')();
                console.log("not oldTextBlock");
            }

        });
    }


    if('#requestCallForm'){
        var $formPhoneRequest = $('#requestCallForm');
        var $userPhoneRequest = $('#userPhoneRequest');
        var $formInfoRequest = $('.js_form__info__request');
        var $curentModelRequest = $('#requestCall');
        var $openModalRequest = $('#gratitude');

        $formPhoneRequest.on("submit", function (e) {

            e.preventDefault();
            if(customValidationForm(
                    $userPhoneRequest,
                    regPhone,
                    logStatusMessage($formInfoRequest, statusMessage.error),
                    logStatusMessage($formInfoRequest, statusMessage.incorrect)
                )){
                var form = document.forms.requestCallForm;
                var formData = new FormData(form);
                ajaxReguest(
                    formData,
                    PHPURL.reguestForm,
                    $formInfoRequest,
                    statusMessage,
                    $userPhoneRequest,
                    $openModalRequest,
                    $curentModelRequest
                );
            };
        });
        unlockForm($userPhoneRequest, $formInfoRequest, false);
    };


    if('#sendPhone'){
        var $formPhone = $('#sendPhone');
        var $userPhone = $('#userPhone');
        var $formInfo = $('.js_form__info');
        var $openModal = $('#gratitude');

        $formPhone.on("submit", function (e) {

            e.preventDefault();
            if(customValidationForm(
                    $userPhone,
                    regPhone,
                    logStatusMessage($formInfo, statusMessage.error),
                    logStatusMessage($formInfo, statusMessage.incorrect)
                )){
                var form = document.forms.sendPhone;
                var formData = new FormData(form);
                ajaxReguest(
                    formData,
                    PHPURL.sendPhoneForm,
                    $formInfo,
                    statusMessage,
                    $userPhone,
                    $openModal,
                    false
                );
            };
        });
        unlockForm($userPhone, $formInfo, textBlock);
    };

    if('#findPrice'){
        var $formPrice = $('#findPrice');
        var $userPhonePrice = $('#userPhonePrice');
        var $formFindPriceInfo = $('.form__findPrice__info');
        var $curentModelPrice = $('#myModal');
        var $openModalPrice = $('#gratitude');

        /**
         * Для перемещения названия продукта в форму.
         */
        var $buttonProduct = $('.js_bild_modal');
        var $selectedProduct ={};
        var nameProduct = "";
        var $inputProduct = $("#nameProduct");

        $buttonProduct.on("click", function () {
            $selectedProduct = $(this).parents(".js_product__item");
            nameProduct = $selectedProduct.find(".js_product__item__name").text();
            $inputProduct.val(nameProduct);
            nameProduct="";
            $selectedProduct={};
        });


        $formPrice.on("submit", function (e) {
            e.preventDefault();
            if(customValidationForm(
                    $userPhonePrice,
                    regPhone,
                    logStatusMessage($formFindPriceInfo, statusMessage.error),
                    logStatusMessage($formFindPriceInfo, statusMessage.incorrect)
                )){
                var form = document.forms.findPrice;
                var formData = new FormData(form);
                ajaxReguest(
                    formData,
                    PHPURL.findPriceForm,
                    $formFindPriceInfo,
                    statusMessage,
                    $userPhonePrice,
                    $openModalPrice,
                    $curentModelPrice
                );
            };
        });
        unlockForm($userPhonePrice, $formFindPriceInfo, false);
    };
};


