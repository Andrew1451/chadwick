<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'lilchaddy90@gmail.com';
    $email_subject = 'New email from your website';
    $email_body = "From: $name. /n".
                    "Email: $email. /n".
                    "Message: $message. /n";

    $headers = "From: $email /r/n";
    $headers .= "Reply-To: $email /r/n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
?>