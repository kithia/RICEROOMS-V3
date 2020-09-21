<?php

include_once 'includes/connection.inc.php';

$sdObject = returnStockDescriptionResultObject();

function returnStockResultObjectID($id = 0){

    global $conn;

    $sql = "SELECT * FROM Stock WHERE stockID = $id;";
    $result = mysqli_query($conn,$sql);    
    return $result;
}

function returnStockDescriptionResultObject(){

    global $conn;

    $sql = "SELECT * FROM StockDesc";
    $result = mysqli_query($conn,$sql);
    $resultCheck = mysqli_num_rows($result); 
    return $result;
}

if(mysqli_num_rows($sdObject) > 0){
    while($showRow = mysqli_fetch_assoc($sdObject)){
        $rawStock = returnStockResultObjectID($showRow["stockID"]);
        if(mysqli_num_rows($rawStock) == 1){
        $rawRow = mysqli_fetch_assoc($rawStock);
        echo 
            $rawRow["address"]."<br>".
            "<img src = ".$showRow["mainImage"]."><br>".
            $showRow["description"]."<br>";
        }
        else{
            echo "error too many raw stocks";
        }
    }
}
else{
    echo "ran<br>";
}

