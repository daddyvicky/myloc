<?php
//using mailjet to send email.
require 'vendor/autoload.php';
use \Mailjet\Resources;

//Storing Email to check MX record to verify the email.
if (isset($_POST["email"])) {
  $toEmail = $_POST["email"];
  list($userName, $mailDomain) = explode("@", $toEmail);
  //checking the MX record of the domain.
  if (checkdnsrr($mailDomain, 'MX')) {
    $mj = new \Mailjet\Client('USER_KEY', 'API_KEY', true, ['version' => 'v3.1']);
    $body = [
      'Messages' => [
        [
          'From' => [
            'Email' => "YOUR_EMAIL@EAMIL.COM",
            'Name' => "YOUR NAME"
          ],
          'To' => [
            [
              'Email' => "$toEmail",
              'Name' => "$toEmail"
            ]
          ],
          'Subject' => "Your marked coordinates.",
          'TextPart' => "Hey there,",
          'HTMLPart' => "<ul><li>Latitude: $_POST[lat]</li><li>Longitude: $_POST[lng]</li></ul>",
        ]
      ]
    ];
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    echo "Email Sended Successfull.";
    // $response->success() && var_dump($response->getData());
  } else {
    echo "invalid email domain";
  }
}else{
  header("Location: ../");
}
?>
