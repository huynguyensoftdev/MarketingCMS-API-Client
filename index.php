<?php
require_once('config.php');
foreach ($datas as $data):
 echo "<h1>".$data->post_title."</h1>";
echo "<p>".$data->post_content."</p>";
endforeach;
?>
