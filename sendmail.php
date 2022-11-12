<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require "PHPMailer/src/Exception.php";
   require "PHPMailer/src/PHPMailer.php";  

   $mail = new PHPMailer(true); /* Создаем объект MAIL */
   $mail->CharSet = "UTF-8"; /* Задаем кодировку UTF-8 */
   $mail->seteLanguage('ru','phpmailer/language/');
   $mail->IsHTML(true); /* Разрешаем работу с HTML */


   $mail->setFrom('macedu111@gmail.com', 'RianBalan Web');
   $mail->addAddress('macedu111@gmail.com');
   $mail->Subject = "[Заявка с формы]";

   $body = '<h1>test send mail</h1>';
   if(trim(!emty($_POST['name']))){
      $body.='<p><strong>Nume:</strong> ' .$_POST['name'].'</p>';
   }
   // if(trim(!empty($_POST['email']))){
   //    $body.='<p><strong>Adresa de email:</strong> ' .$_POST['email'].'</p>';
   // }
   // if(trim(!empty($_POST['phone']))){
   //    $body.='<p><strong>Numar de telefon:</strong> ' .$_POST['phone'].'</p>';
   // }

   $mail->Body = $body;

   if (!$mail->send()) {
      $message = "Ошибка отправки";
    } else {
      $message = "Данные отправлены!";
    }
/* Возвращаем ответ */	
$response = ["message" => $message];

/* Ответ в формате JSON */
header('Content-type: application/json');
echo json_encode($response);

?>