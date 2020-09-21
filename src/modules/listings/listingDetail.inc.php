<?php

include_once 'includes/connection.inc.php';

$id;

//store bundle row globally
$bundleRow;

function setID($input){
    global $id;

    $id = $input;
}

function echoListingDetail(){

    global $bundleRow,$id;

    $html = "";

    $bundle = returnBundleObject();
    

    if(!(empty(returnPropertyObject($bundle)) || empty($bundle))){
        if(mysqli_num_rows($bundle) == 1){
            $type = $bundleRow["PropetyType"];

            $html.=
            $bundleRow["Headline"]."<br>";
            //All Images

            $images = returnSortedArrayOfImages($id);

            if(!empty($images)){
                foreach($images as $img){
                    $html .= "<img src = $img>";
                }
            }
            $html.= "<br>".
            //Price
            "£".returnPricePPPW(returnPropertyObject($bundle))."<br>";
            
            if($type == "static"){
            //Bed,Bathroom,Living List
                $html .= returnFeatureString(returnPropertyObject($bundle))."<br>";
            }
            else if($type == "dynamic"){
            //Category List
                
                foreach(returnCatgoryArray(returnPropertyObject($bundle)) as $category){
                    $html .= $category." | ";
                }
                $html.= "<br>";

            }

            //Description
            $html.= $bundleRow["Summary"]."<br>";

            echo $html;

        }
    }
    else{
        echo "There was a problem loading this listing";
    }

}

function returnBundleObject(){
    //will return FALSE if empty

    global $conn,$id,$bundleRow;

    $sql = "SELECT * FROM Property_Bundle WHERE BundleID = $id";
    $result = mysqli_query($conn,$sql);
    $bundleRow = mysqli_fetch_assoc($result);

    return $result;

}

function returnPropertyObject($bundle){
    global $conn,$id,$bundleRow;

    if(mysqli_num_rows($bundle) > 0){
        if($bundleRow["PropetyType"] == "static"){
            $sql = "SELECT * FROM Static_Property WHERE BundleID = $id";
            $result = mysqli_query($conn,$sql);

            return $result;
        }
        else if($bundleRow["PropetyType"] == "dynamic"){
            $sql = "SELECT * FROM Dynamic_Property WHERE BundleID = $id";
            $result = mysqli_query($conn,$sql);

            return $result;
        }
    }
}

function returnSortedArrayOfImages($bundleid){

    global $conn;

    $images = [];

    $sql = "SELECT ImageURL FROM Images WHERE BundleID = $bundleid ORDER BY MainImage DESC;";
    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($images,$row["ImageURL"]);
        }
    }

    return $images;

}

function returnPricePPPW($propObj){

    global $conn;

    if(!(mysqli_num_rows($propObj) > 1)){
        $row = mysqli_fetch_assoc($propObj);
        return $row["PricePA"]/$row["Beds"];
    }
    else{
        $minPrice = 10000000000000;
        while($row = mysqli_fetch_assoc($propObj)){
            $temp = $row["PricePA"]/$row["Beds"];
            if($temp < $minPrice){
                $minPrice = $temp;
            }
        }
        return $minPrice;
    }

}

function returnFeatureString($propObj){

    global $conn;

    $row;

    if(mysqli_num_rows($propObj) == 1){
        $row = mysqli_fetch_assoc($propObj);
        return $row["Beds"]." Beds | ".$row["Bathrooms"]." Bathrooms | ".$row["LivingSpace"]." Living Rooms";
    }
}

function returnCatgoryArray($propObj){

    $categories = [];

    if(mysqli_num_rows($propObj)>0){
        while($row = mysqli_fetch_assoc($propObj)){
            array_push($categories,$row["Category"]);
        }
    }
    return $categories;

}