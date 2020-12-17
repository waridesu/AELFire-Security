<?php
$mail_to = 'max.yenin@gmail.com' . ', ';
$mail_to .= 'daewon-studio@yandex.ru';

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
    $body_message .= 'Phone: ' . $phone . "\r\n";
    $body_message .= 'E-mail: ' . $email . "\r\n";
    $body_message .= 'amount: ' . $amount . "\r\n";
    $body_message .= 'duration: ' . $duration . "\r\n";
    $body_message .= 'formTax: ' . $formTax . "\r\n";
    $body_message .= 'formMonthly: ' . $formMonthly . "\r\n";

    $headers = 'From: ' . $name . "\r\n";

    $mail_sent = mail($mail_to, $subject, $body_message, $headers);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
            window.history.back();
            window.addEventListener('DOMContentLoaded', function (event) {
                    document.querySelector('.send-success').style.display='block'
                    }
         </script>
    <?php } else { ?>
        <script language="javascript" type="text/javascript">
            window.history.back();
            window.addEventListener('DOMContentLoaded', function (event) {
                document.querySelector('.send-fail').style.display='block'
            }
         </script>
    <?php
    }
?>
