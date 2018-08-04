<?php
    if (isset($_POST['contactFrmSubmit']) && !empty($_POST['firstname'])  && !empty($_POST['surname']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['address1']) && !empty($_POST['address2']) && !empty($_POST['state']) && !empty($_POST['country']) && !empty($_POST['fromdate']) && !empty($_POST['todate']) && !empty($_POST['type_of_treatement']) && !empty($_POST['tourism_package'])) {


    // Submitted form data
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


     //Send email to admin

    $to     = 'phacsindevs@gmail.com';
    $subject= 'Contact Request Submitted';

    $htmlContent = '
    <h4>Contact request has submitted at CodexWorld, details are given below.</h4>

        <div>
            <p>FirstName:'.$firstname.'</p>
        </div>
        <div>
            <p>Surname:'.$surname.'</p>
        </div>
        <div>
            <p>Email:'.$email.'</p>
        </div>
        <div>
            <p>Phone:'.$phone.'</p>
        </div>
        <div>
            <p>Address Lane 1:'.$address1.'</p>
        </div>

        <div>
            <p>Address Lane 2:'.$address2.'</p>
        </div>
        <div>
            <p>State:'.$state.'</p>
        </div>
        <div>
            <p>Country:'.$country.'</p>
        </div>
        <div>
            <p>Start date:'.$fromdate.'</p>
        </div>
        <div>
            <p>Return Date:'.$todate.'</p>
        </div>
        <div>
            <p>Type of Treatment:'.$type_of_treatement.'</p>
        </div>
        <div>
            <p>Tourism Package:'.$tourism_package.'</p>
        </div>

    ';

     //Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    //Additional headers
    $headers .= 'From: Mayport<admin@mayport-heritreat.com>' . "\r\n";

     //Send email'
    if($stat){
        $status = 'ok';
    }else{
        $status = 'err';
    }


  }

  $to     = 'phacsindevs@gmail.com';
  $subject= 'Contact Request Submitted';

  $htmlContent = 'Contact Mail';

   //Set content-type header for sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  //Additional headers
  $headers .= 'From: Mayport<admin@mayport-heritreat.com>' . "\r\n";

  $stat = mail($to,$subject,$htmlContent,$headers);
  echo($stat);


     //Output status
?>
