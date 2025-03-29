<?php

    $hostname = 'localhost';
    $username = 'root';
    $password = '@Strangememes01'; 
    $database = 'mydb';

    $mysqlObj = new mysqli($hostname, $username, $password, $database);

    if ($mysqlObj->connect_error) {
        die("Connection failed: " . $mysqlObj->connect_error);
    } else {
        echo "Connected successfully to MySQL server.";
    }



?>