$(document).ready(readeDocumentForm);
/**
 * Функция для отправки письма на сервер.
 *
 * $formPhone - jquery элемент по id формы.
 * $formInfo - jquery элемент Блок для вывода информации
 * URLPHP - Путь до php файла.
 * messages -Сообщение о результатах отправки письма
 */
function readeDocumentForm() {

    if($('#sendPhone')){
        var URLPHP = "php/getMailFromSite.php";
        var $formPhone = $('#sendPhone');
        var $userPhone = $('#userPhone');
        var $formInfo = $('.js_form__info');
        var messages = {
            error : "Введите номер!",
            incorrect : "Неверно введен номер!",
            successfull : "Ваша заявка принята, с Вами скоро свяжутся!",
            errorServer: "Что-то пошло не так! Попробуйте снова.",
            fullErrorServer: 'Произошла ошибка...'
        };
        var flag = true;
        var valid = false;

        $formPhone.on("submit", function (e) {
            e.preventDefault();
            if(flag){//Блокировка повторной отправки формы.
                customValidation();
                if(valid){
                    flag = false;
                    var form = document.forms.sendPhone;
                    var formData = new FormData(form);
                    $.ajax({
                        type: "POST",
                        url: URLPHP,
                        processData: false,
                        contentType: false,
                        data: formData,
                        success: requestSuccess,
                        error: requestError
                    });
                }
            }
        });

        //Снятие блокировки при корректировки значения
        $userPhone.on("focus", function () {
            flag = true;
            valid = false;
            $formInfo.text("");
            return [flag, valid];
        });

        /**
         * Функция для обработки ответа с сервера.
         *
         * error - $formPhone - Значение не получено.
         * incorrect -  Номер неверный.
         * successfull - Письмо отправлено.
         * errorServer - Ошибка на сервере.
         */
        function requestSuccess(data) {
            if(data==="error"){
                $formInfo.text(messages.error);
            } else if (data==="incorrect"){
                $formInfo.text(messages.incorrect);
            } else if (data==="successfull"){
                $formInfo.text(messages.successfull);
                $userPhone.val("");
            }else {
                $formInfo.text(messages.errorServer);
            };
        };


        /**
         * Функция для обработок ошибок.
         */
        function requestError(xhr, str) {
            $formInfo.text(messages.fullErrorServer);
        };


        /**
         * Функция для валидация формы.
         */
        function customValidation() {
            var phone = $userPhone.val();
            var regexp = /^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

            if(phone === ""){
                $formInfo.text(messages.error);
                console.log(messages.error);
            } else {
                if(!regexp.test(phone)){
                    $formInfo.text(messages.incorrect);
                    console.log(messages.incorrect);
                } else {
                    valid = true;
                    return valid;
                }
            }
        };
    };
    // ************************************************************
    // ********Отправка писем с формы
    // ************************************************************
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

    /**
     * Для перемещения названия продукта в форму.
     */

    var $formPrice = $("#findPrice");
    var URLPHPfindPrice = "php/getMailFromFindPrice.php";

    $formPrice.on("submit", function (e) {
        e.preventDefault();
        var form = document.forms.findPrice;
        var formData = new FormData(form);
        console.log(formData);
        $.ajax({
            type: "POST",
            url: URLPHPfindPrice,
            processData: false,
            contentType: false,
            data: formData
            // success: requestSuccess,
            // error: requestError
        });

    })



};
