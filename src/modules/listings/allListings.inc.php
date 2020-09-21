<?php

include_once 'includes/connection.inc.php';

$bundle = returnBundleObject();

function returnBundleObject(){
    global $conn;

    $sql = "SELECT * FROM Property_Bundle;";
    $result = mysqli_query($conn,$sql);    
    return $result;
}

if(mysqli_num_rows($bundle) > 0){
    while($bun = mysqli_fetch_assoc($bundle)){
        $bunID = $bun["BundleID"];
        $head = $bun["Headline"];
        $add = $bun["Summary"];
        $image = returnMainImage($bunID);
        $type = $bun["PropetyType"];
        $html = "";
        $html .= 
        "Heading: ".$head."<br>".
        "Address: ".$add."<br>"
        ;
        if(!empty($image)){
            $html.= "<img src = $image ><br>";
        }

        if($type == "dynamic"){
            $html.= returnNumberOfRoomTypes(returnDynamicPropertyObject($bunID))." different room types available<br>";
        }
        $html.= "<br>";
        echo "<a href = listingDetail.php?BundleID=$bunID >".$html."</a>";
    }
}

function returnMainImage($id){
    global $conn;

    if(!empty($id)){
        $sql = "SELECT * FROM Images WHERE BundleID = $id AND MainImage = 1;";
        $result = mysqli_query($conn,$sql); 
        
        if(mysqli_num_rows($result) > 0){
            while($res = mysqli_fetch_assoc($result)){
                return $res["ImageURL"];
            }
        }
        else{
            return "https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png";
        }
    }

}

function returnDynamicPropertyObject($id){
    global $conn;

    $sql = "SELECT * FROM Dynamic_Property WHERE BundleID = $id;";
    $result = mysqli_query($conn,$sql);    
    return $result;
}

function returnNumberOfRoomTypes($obj){
    return mysqli_num_rows($obj);
}
