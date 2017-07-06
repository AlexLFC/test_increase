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
    /**
     * Инициализация плагина jquery.maskedinput
     */
    $("#userPhone").mask("+375(99)999-99-99");
    $("#userPhonePrice").mask("+375(99)999-99-99");


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
                $formInfo.text("");
                $userPhone.val("");
                $('#myModal').modal('hide');
                $('#gratitude').modal('show');
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
            var regexp = /\+375\(\d\d\)\d\d\d\-\d\d\-\d\d/;
            // var regexp = /^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

            if(phone === ""){
                $formInfo.text(messages.error);
            } else {
                if(!regexp.test(phone)){
                    $formInfo.text(messages.incorrect);
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

    if($("#findPrice")){
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
         * Функция для отправки письма на сервер.
         *
         * $formPrice - jquery элемент по id формы.
         * $formFindPriceInfo - jquery элемент Блок для вывода информации
         * URLPHPfindPrice - Путь до php файла.
         * messages -Сообщение о результатах отправки письма
         */

        var $formPrice = $("#findPrice");
        var URLPHPfindPrice = "php/getMailFromFindPrice.php";
        var $formFindPriceInfo = $(".form__findPrice__info");
        var $userPhonePrice = $("#userPhonePrice");
        var messagesPrice= {
            error : "Введите номер!",
            incorrect : "Неверно введен номер!",
            successfull : "Ваша заявка принята, с Вами скоро свяжутся!",
            errorServer: "Что-то пошло не так! Попробуйте снова.",
            fullErrorServer: 'Произошла ошибка...'
        };
        var flagPrice = true;
        var validPrice = false;

        /**
         * Функция для обработки ответа с сервера.
         *
         * error - $formPhone - Значение не получено.
         * incorrect -  Номер неверный.
         * successfull - Письмо отправлено.
         * errorServer - Ошибка на сервере.
         */
        function requestSuccessPrice(data) {
            if(data==="error"){
                $formFindPriceInfo.text(messagesPrice.error);
            } else if (data==="incorrect"){
                $formFindPriceInfo.text(messagesPrice.incorrect);
            } else if (data==="successfull"){
                $formFindPriceInfo.text("");
                $userPhone.val("");
                $('#myModal').modal('hide');
                $('#gratitude').modal('show');
            }else {
                $formInfo.text(messagesPrice.errorServer);
            };
        };


        /**
         * Функция для обработок ошибок.
         */
        function requestErrorPrice(xhr, str) {
            $formFindPriceInfo.text(messagesPrice.fullErrorServer);
        };


        $formPrice.on("submit", function (e) {
            e.preventDefault();
            if(flagPrice){
                flagPrice = false;
                customValidationPrice();
                if(validPrice){
                    var form = document.forms.findPrice;
                    var formData = new FormData(form);
                    $.ajax({
                        type: "POST",
                        url: URLPHPfindPrice,
                        processData: false,
                        contentType: false,
                        data: formData,
                        success: requestSuccessPrice,
                        error: requestErrorPrice
                    });
                }
            }
        });

        //Снятие блокировки при корректировки значения
        $userPhonePrice.on("focus", function () {
            flagPrice = true;
            validPrice = false;
            $formFindPriceInfo.text("");
            return [flagPrice, validPrice];
        });
        /**
         * Функция для валидация формы.
         */
        function customValidationPrice() {
            var phone = $userPhonePrice.val();
            var regexp = /\+375\(\d\d\)\d\d\d\-\d\d\-\d\d/;

            if(phone === ""){
                $formFindPriceInfo.text(messagesPrice.error);
            } else {
                if(!regexp.test(phone)){
                    $formFindPriceInfo.text(messagesPrice.incorrect);
                } else {
                    validPrice = true;
                    return validPrice;
                }
            }
        };
    };
};


