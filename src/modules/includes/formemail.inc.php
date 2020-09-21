<?php

$fieldsSet = false;

$apiKey;
$listID;
$email;
$data_center;
$json;
$hashedEmail;
$status_code;

//Set Fields(required,apikey,listid,email,firstname,lastname)

function setFields($mail = "milesbroomfield@yahoo.com",$fName = "None",$lName = "None"){
    //Does not validate email, process will fail if email is not valid or cleaned

    if(!(empty($mail) || empty($fName) || empty($lName))){
        global $email,$listID,$email,$data_center,$json,$hashedEmail,$fieldsSet,$apiKey;

        $apiKey = "da2a241e83a420076a4af47e76a59d44-us10";
        $listID = "c33b2d3c85";

        $email = $mail;
        $data_center = substr($apiKey,strpos($apiKey,"-")+1);

        $json = json_encode(["email_address" => $email,"status" => "subscribed"]);

        $hashedEmail = md5($email);


        $fieldsSet = true;
    }
    else{
        $fieldsSet = false;
    }
}

//Run Get Request to check for status of a user

function getStatus(){

    global $status_code;
    global $data_center;
    global $listID;
    global $hashedEmail;
    global $apiKey;

    $url = "https://".$data_center.".api.mailchimp.com/3.0/lists/".$listID."/members/$hashedEmail";

    $ch = curl_init($url);
    curl_setopt($ch,CURLOPT_USERPWD, "user:".$apiKey);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Content-Type: application/json"]);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_TIMEOUT,10);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
    curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    echo($status_code);

}

//Proccess 

//try to add user to contact main list, if already part of that list send trigger email, if not send normal email, return 1 if new and successful, 0 if not new but successful, -1 if error 

function runProcess(){

    global $fieldsSet;
    global $status_code;

    if($fieldsSet){
        getStatus();

        if(isNew() == 1){
            //returns 1 or -1
            return addUserToList();
            echo($status_code);
        }
        else if(isNew() == 0){
            //returns 0 or -1
            return sendAlternativeEmail();
            echo($status_code);
        }
        else{
            //error
            return -1;
        }
        
    }
    else{
        return -1;
    }
}

//returns true if user is new

function isNew(){

    //1 - new 0 - old -1 - error

    global $status_code;

    //Process

    if($status_code == 404){
        return 1;
    }
    else if ($status_code = 200){
        return 0;
    }
    else{
        return -1;
    }
}

//Adds user to main list

function addUserToList(){

    $err = false;

    global $status_code;
    global $data_center;
    global $listID;
    global $hashedEmail;
    global $apiKey;
    global $json;

    //process

    $url = "https://".$data_center.".api.mailchimp.com/3.0/lists/".$listID."/members";

    $ch = curl_init($url);
    curl_setopt($ch,CURLOPT_USERPWD, "user:".$apiKey);
    curl_setopt($ch,CURLOPT_HTTPHEADER,["Content-Type: application/json"]);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_TIMEOUT,10);
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($ch,CURLOPT_POSTFIELDS,$json);
    curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    echo($status_code);

    if(!$err){
        return 1;
    }
    else{
        return -1;
    }

}

//Sends alternative email

function sendAlternativeEmail(){
    $err = false;

    //process

    if(true){
        return 0;
    }
    else{
        return -1;
    }
}