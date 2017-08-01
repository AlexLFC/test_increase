<?php
//Проверка на пустую форму
if((isset($_POST['userPhonePrice'])&&$_POST['userPhonePrice']!="")){
    require_once ('../../vendor/autoload.php');
    $userPhonePrice = $_POST['userPhonePrice'];
    $nameProduct = $_POST['nameProduct'];
    $emailSite = "giz@giz.by";
    $emailIncrease = "info@increase.by";
    $addressServer = "test@test.by";

//    Удаляет пробелы (или другие символы) из начала и конца строки
    $userPhonePrice = trim($userPhonePrice);
    $nameProduct = trim($nameProduct);
////    Удаляет HTML и PHP-теги из строки
    $userPhonePrice = strip_tags($userPhonePrice);
    $nameProduct = strip_tags($nameProduct);
//
//    Проверка номера на правильное написание
    $pattern = "#\+375\(\d\d\)\d\d\d\-\d\d\-\d\d#";
    if(preg_match($pattern, $userPhonePrice, $out)){

        $mail = new PHPMailer;

        //Формирование текста письма
        $bodyHtml = '
            <p></p>
            <p>Телефон: '.$userPhonePrice.'</p>
            <p>Название: '.$nameProduct.'</p>
            ';

        $mail->setFrom($addressServer, "podgyzniki@giz.by");
        $mail->addAddress($emailSite, "giz@giz.by");
        $mail->addAddress($emailIncrease,"info@increase.by");
        $mail->isHTML(true);

        $mail->Subject = "Тема";
        $mail->Body = $bodyHtml;
        $mail->AltBody='Номер телефона: '.$userPhonePrice.' Название '.$nameProduct.'';//запостной текст

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'successfull';
        }
    }
    else{
        echo "incorrect";
    }
} else{
    echo "error";
}
