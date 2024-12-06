
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
// require 'vendor/autoload.php'; // If using Composer
require 'C:/xampp/htdocs/PLplatform/PHPMailer-master/src/PHPMailer.php'; // If downloaded manually
require 'C:/xampp/htdocs/PLplatform/PHPMailer-master/src/SMTP.php';
require 'C:/xampp/htdocs/PLplatform/PHPMailer-master/src/Exception.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                           // Use SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server (e.g., Gmail)
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'karaledev2240@gmail.com';              // Your email address
    $mail->Password   = 'wtft hcbx ifbp ftev';                    // Your email app password (not regular Gmail password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
    $mail->Port       = 587;                                    // TCP port to connect to

    // Recipients
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Invalid email format");
    }
    $mail->setFrom('karaledev2240@gmail.com', 'Devashish');
    $mail->addAddress($email, $_POST['name']);                  // Add recipient from form

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = 'Thank you for contacting us';
    $message = htmlspecialchars($_POST['message']);              // Sanitize message input
    $mail->Body = nl2br($message);                               // Message from form

    // Send email
    $mail->send();
    echo 'Message has been sent successfully.';
} catch (Exception $e) {
    error_log("Mailer Error: {$mail->ErrorInfo}");  // Log error to a file
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
