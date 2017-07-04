<?php
//Проверка на пустую форму
if((isset($_POST['userNamePrice'])&&$_POST['userNamePrice']!="")){
    require_once ("PHPMailer-master/PHPMailerAutoload.php");
    $userNamePrice = $_POST['userNamePrice'];
    $userPhonePrice = $_POST['userPhonePrice'];
    $nameProduct = $_POST['nameProduct'];
    $emailSite = "giz@giz.by";
    $addressServer = "test@test.by";

//    Удаляет пробелы (или другие символы) из начала и конца строки
    $userNamePrice = trim($userNamePrice);
    $userPhonePrice = trim($userPhonePrice);
    $userNamePrice = trim($userNamePrice);
////    Удаляет HTML и PHP-теги из строки
    $userNamePrice = strip_tags($userNamePrice);
    $userPhonePrice = strip_tags($userPhonePrice);
    $nameProduct = strip_tags($nameProduct);
//
//    Проверка номера на правильное написание
    $pattern = "#^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$#";
    if(preg_match($pattern, $userPhonePrice, $out)){

        $mail = new PHPMailer;

        //Формирование текста письма
        $bodyHtml = '
            <p>Имя:'.$userNamePrice.'</p>
            <p>Телефон: '.$userPhonePrice.'</p>
            <p>Название: '.$nameProduct.'</p>
            ';

        $mail->setFrom($addressServer, "Новая заявка");
        $mail->addAddress($emailSite, "giz@giz.by");
        $mail->isHTML(true);

        $mail->Subject = "Тема";
        $mail->Body = $bodyHtml;
        $mail->AltBody='Номер телефона: '.$userPhonePrice.' Имя '.$userNamePrice.' Название '.$nameProduct.'';//запостной текст

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
