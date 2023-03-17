<?php
include "connection.php"; 

if(isset($_POST['submit']))
{		
	$yourname = $_POST['yourname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];

    $insert = mysqli_query($db,"INSERT INTO `tblcontact`(`yourname`, `email`,`phone`,`website`) VALUES ('$yourname','$email','$phone','$website')");

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