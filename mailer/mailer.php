<?php

if ( ! $_POST)
{
    header('HTTP/1.1 403 Unauthorized');
    die(403);
}
else
{
    require 'config.php';
    require 'templater.php';
    require '/phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

    //$mail->SMTPDebug = 2;

    if ($SMTP['enabled'] === true)
    {
        $mail->isSMTP();
        $mail->isHTML(true);
        $mail->Host = $SMTP['host'];
        $mail->Username = $SMTP['username'];
        $mail->Password = $SMTP['password'];
        $mail->Port = $SMTP['port'];
        $mail->SMTPAuth = true;

        if ($SMTP['encryption'] === 'tls')
        {
            $mail->SMTPSecure = 'tls';
        }
        else if ($SMTP['encryption'] === 'ssl')
        {
            $mail->SMTPSecure = 'ssl';
        }
    }
    else
    {
        $mail->isHTML(true);
    }

    $mail->addAddress($my_email);
    $mail->CharSet = 'UTF-8';

    $form_data = array(
        'name' => htmlspecialchars($_POST['firstname']),
        'email' => htmlspecialchars($_POST['email']),
        'surname' => htmlspecialchars($_POST['surname'])
    );

    $mail->setFrom($form_data['email'], $form_data['firstname']);

    $mail->Subject = 'New message via web form';

    // Uses templater.php to do some magic
    $mail->Body = parseTemplate($form_data);

    if ( ! $mail->send())
    {
        echo $mail->ErrorInfo;
    }
    else
    {
        echo true;
    }
}
