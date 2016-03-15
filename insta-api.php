<?php

$id = $_REQUEST['id'];

$client_id = '5b5ab82a0efd4597bf31dcfd6f9bcf61';



function httpGet($url)
{
    $ch = curl_init();  
 
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
  curl_setopt($ch,CURLOPT_HEADER, false); 
 
    $output=curl_exec($ch);
 
    curl_close($ch);
    return $output;
}
 
echo httpGet("https://api.instagram.com/v1/users/". $id ."/media/recent/?client_id=". $client_id ."&count=5");


?>