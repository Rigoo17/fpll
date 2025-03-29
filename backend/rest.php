<?php

    require_once 'backend/datasource.php';

    if ($mysqlObj->$num_rows > 0) {
        
        // output data of each row
        while($row = $mysqlObj->$fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
        }
    } else {
        echo "Your Database is empty broooo.";
    }



?>