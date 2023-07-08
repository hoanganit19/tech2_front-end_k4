<?php
$json = '[{"id":1,"name":"Hoàng An"},{"id":2,"name":"Văn Tuấn"}]';

$arr = json_decode($json, true);

echo '<pre>'; 
print_r($arr); 
echo '</pre>';