<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet ='UTF-8';
   $mail->seteLanguage('ru','phpmailer/language/');
   $mail->IsHTML(true);


   $mail->setForm('macedu111@gmail.com', 'RianBalan Web');
   $mail->addAddress('macedu111@gmail.com');
   $mail->Subject = 'Salut';

   $body = '<h1>test send mail</h1>';
   if(trim(!emty($_POST['name']))){
      $body.='<><strong>Nume:</strong> ' .$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['email']))){
      $body.='<><strong>Adresa de email:</strong> ' .$_POST['email'].'</p>';
   }
   if(trim(!empty($_POST['phone']))){
      $body.='<><strong>Numar de telefon:</strong> ' .$_POST['phone'].'</p>';
   }

   $mail->Body = $body;

   if (!$mail->send()){
      $message = 'ceva nu bun';
   }else{
      $message = 'Tat zbs';
   }
   $response = ['message' =>$message];

   header('Content-type: application/json');
   echo json_encode($response);
?>