<?php
    $mail_to = 'somemail@mgmail.com';

    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
    $duration = $_POST['duration'];
    $formTax = $_POST['formTax'];
    $formMonthly = $_POST['formMonthly'];

    $subject = 'Subject ' . $name;

    $body_message = 'From: ' . $name . "\r\n";
    $body_message .= 'company: ' . $company . "\r\n";
    $body_message .= 'Phone: ' . $phone;
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'amount: ' . $amount;
    $body_message .= 'duration: ' . $duration;
    $body_message .= 'formTax: ' . $formTax;
    $body_message .= 'formMonthly: ' . $formMonthly;

    $headers = 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('The mail has been sent');
  // window.location = 'index.html#formulaire';
  // class to form hide
         </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, notify site administrator myadmin@mydomain.com');
  // window.location = 'index.html#formulaire';
    </script>
    <?php
    }
?>
