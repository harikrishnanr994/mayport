<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "phacsindevs@gmail.com";
    $email_subject = "Enquiry From Mayport Website";

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }


    // validation expected data exists
    if(!isset($_POST['firstname']) ||
        !isset($_POST['surname']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['address1']) ||
        !isset($_POST['address2']) ||
        !isset($_POST['state']) ||
        !isset($_POST['country']) ||
        !isset($_POST['fromdate']) ||
        !isset($_POST['todate']) ||
        !isset($_POST['type_of_treatement']) ||
        !isset($_POST['tourism_package'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }


    $firstname   = $_POST['firstname'];
    $surname   = $_POST['surname'];
    $email  = $_POST['email'];
    $phone  = $_POST['phone'];
    $address1 = $_POST['address1'];

    $address2  = $_POST['address2'];
    $state = $_POST['state'];
    $country  = $_POST['country'];
    $fromdate  = $_POST['fromdate'];
    $todate  = $_POST['todate'];
    $type_of_treatement  = $_POST['type_of_treatement'];
    $tourism_package= $_POST['tourism_package'];

	  $url = $_POST['url']."?success=1"; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    $email_message = "Form details below.\n\n";


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }



    $email_message .= "First Name: ".clean_string($firstname)."\n";
    $email_message .= "Sur Name: ".clean_string($surname)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Telephone: ".clean_string($phone)."\n";
    $email_message .= "Address Lane 1: ".clean_string($address1)."\n";
    $email_message .= "Address Lane 2:".clean_string($address2)."\n";
    $email_message .= "State : ".clean_string($state)."\n";
    $email_message .= "Country : ".clean_string($country)."\n";
    $email_message .= "Arrival Date : ".clean_string($fromdate)."\n";
    $email_message .= "Departure Date : ".clean_string($todate)."\n";
    $email_message .= "Type of Treatment Required : ".clean_string($type_of_treatement)."\n";
    $email_message .= "Tourism Package: ".clean_string($tourism_package)."\n";

// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
 $stat = @mail($email_to, $email_subject, $email_message, $headers);
 echo($stat);
  //Send email'
 if($stat){
     $status = 'ok';
 }else{
     $status = 'err';
 }
}
?>

<!-- include your own success html here -->
