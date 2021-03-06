<?php
//Проверка на пустую форму
if((isset($_POST['userPhoneRequest'])&&$_POST['userPhoneRequest']!="")){
    require_once ('../../vendor/autoload.php');
    $userPhone = $_POST['userPhoneRequest'];
    $emailSite = "giz@giz.by";
    $emailIncrease = "info@increase.by";
    $addressServer = "test@test.by";

//    Удаляет пробелы (или другие символы) из начала и конца строки
    $userPhone = trim($userPhone);
//    Удаляет HTML и PHP-теги из строки
    $userPhone = strip_tags($userPhone);

//    Проверка номера на правильное написание
    $pattern = "#\+375\(\d\d\)\d\d\d\-\d\d\-\d\d#";
    if(preg_match($pattern, $userPhone, $out)){

        $mail = new PHPMailer;

        //Формирование текста письма
        $bodyHtml = '<p>Номер телефона: '.$userPhone.'</p>';

        $mail->setFrom($addressServer, "podgyzniki@giz.by");
        $mail->addAddress($emailSite, "giz@giz.by");
        $mail->addAddress($emailIncrease,"info@increase.by");
        $mail->isHTML(true);

        $mail->Subject = "Тема";
        $mail->Body = $bodyHtml;
        $mail->AltBody='Номер телефона: '.$userPhone.'';//запостной текст

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
