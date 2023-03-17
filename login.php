<?php
include "connection.php"; 

if(isset($_POST['submit']))
{		
	$fullname = $_POST['fullname'];
    $password = $_POST['password'];
    $insert = mysqli_query($db,"INSERT INTO `logintbl`(`fullname`, `password`) VALUES ('$fullname','$password')");

    if(!$insert)
        {
            echo mysqli_error();
        }
    else
        {
            echo "Records added successfully.";
        }
        
}

mysqli_close($db); 