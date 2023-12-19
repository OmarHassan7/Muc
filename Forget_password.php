<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
// Include PHPMailer autoloader
// require 'vendor/autoload.php';

// // Create a new PHPMailer instance
$mail = new PHPMailer(true);



// // Set mailer to use SMTP
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'mucuniversity2@gmail.com'; // replace with your Gmail username
$mail->Password = 'mqutrevsudcbsqkm'; // replace with your Gmail password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;


// $recipeEMail = $_POST['email'];
$userId = $_POST['idnumber'];


// // Uncomment the following lines for debugging (optional)
// // $mail->SMTPDebug = 2; // 2 for debugging output
// // $mail->Debugoutput = 'html'; // Display errors in HTML format

// // Set the sender's email address
$mail->setFrom('mucuniversity2@gmail.com'); // replace with your Gmail username and your name

// // Set the recipient's email address
$mail->addAddress('omar.22120302@muc.edu.eg'); // replace with the recipient's email and name

$mail->isHTML(true);
// $mail->Subject = "Hello ";

// // Set email subject and body
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test email sent using PHPMailer.';

$mail->send();
echo "Email Sent Sucessfuly";


// // Check if the email was sent successfully
// if ($mail->send()) {
//     echo 'Email sent successfully!';
// } else {
//     echo 'Error: ' . $mail->ErrorInfo;
// }
