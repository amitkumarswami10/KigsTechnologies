<?php

$db = mysqli_connect("localhost","root","","testdb");

if(!$db)
{
    die("Connection failed: " . mysqli_connect_error());
}

?>