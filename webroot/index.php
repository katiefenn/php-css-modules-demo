<?php

require 'vendor/autoload.php';

$templates = new League\Plates\Engine('./views', 'phtml');
echo $templates->render(
  'RegistrationForm/RegistrationForm',
  ['name' => 'Jonathan']
);
