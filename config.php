<?php
  header("access-control-allow-origin: *");
  $uri = $_SERVER["REQUEST_URI"];
  $adminsite="localhost/admin";
  $clientsite="localhost";
  $json = file_get_contents($adminsite.'/postapi');
  $data = json_decode($json);
?>
