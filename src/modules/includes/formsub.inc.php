<?php

if(isset($_POST['submit'])){

    include_once 'connection.inc.php';


    $first = $_POST['fName'];//s
    $last = $_POST['lName'];//s
    $email = $_POST['email'];//s
    $mobile = $_POST['mobile'];//n
    $uni= $_POST['uni'];//s
    $course = $_POST['course'];//s
    $campus = $_POST['campus'];//s
    $maxWeekly = $_POST['maxWeekly'];//n
    $noTenants = $_POST['notenants'];//n
    $noWeeks = $_POST['noweeks'];//n
    $comments = $_POST['comment'];//s

    $info = [&$first,&$last,&$email,&$mobile,&$uni,&$course,&$campus,&$maxWeekly,&$noTenants,&$noWeeks,&$comments];
    $notEmpty = [&$first,&$last,&$email,&$mobile,&$uni,&$course,&$campus,&$maxWeekly,&$noTenants,&$noWeeks];
    $numeric = [&$maxWeekly,&$noTenants,&$noWeeks];

    //Create lists

    //create lists from above for ease of validation

    //checking for empty fields
    foreach($notEmpty as $field){
        
        if (empty($field) == true){
            header("Location: ../mainForm.php?error=emptyfields&data=$info");
            exit();
        }
    }

    //Validation Handling

    for ($x = 0; $x < $info.count(); $x++){
        $info[$x] = trim($info[$x]);
    }

    for ($x = 0; $x < $numeric.count(); $x++){
        $numeric[$x]=preg_replace("/[^0-9]/", "",$numeric[$x]);
        if(!is_numeric($numeric[$x])){
            header("Location: ../mainForm.php?error=notNumeric&data=$info");
        }
    }

    //Type casting
    
    //Int Casting

    $maxWeekly = (int)$maxWeekly;
    $noWeeks = (int)$noWeeks;
    $noTenants = (int)$noTenants;

    //create prepared statement
    $stmt = mysqli_stmt_init($conn);
    //create template

    //Process is to be executed every time there is a query 
    $sql = "INSERT INTO FormSub(fName,lName,mobile,email,university,course,mCampus,wBudgetPP,noTenants,noWeeks,comments) VALUES(?,?,?,?,?,?,?,?,?,?,?);";

    if(!mysqli_stmt_prepare($stmt,$sql)){
        //failure
        header("Location: ../mainForm.php?error=prepfailed");
        exit();
    }
    else{
        //bind parameters

        mysqli_stmt_bind_param($stmt,"sssssssiiis",$first,$last,$mobile,$email,$uni,$course,$campus,$maxWeekly,$noTenants,$noWeeks,$comments);
        mysqli_stmt_execute($stmt);

        //email

        include 'formemail.inc.php';

        triggerEmail();
        
        //send with submissionid (to ensure that the address cannot just be typed)

        header("Location: ../formSubmitted.php?subid=xxxxx");
        exit();
    }

}
else{
    header("Location: ../mainForm.php");
    exit();
}

function triggerEmail(){

    global $email,$first,$last;

    setFields($email,$first,$last);

    //returns a number by which the status of the process can be handled

    $check = runProcess();
    
    if($check == 1){
        header("Location: ../formSubmitted.php?subid=xxxxx&mail=new");
        exit();
    }
    else if($check == 0){
        header("Location: ../formSubmitted.php?subid=xxxxx&mail=old");
        exit();
    }
    else if($check == -1){
        header("Location: ../formSubmitted.php?subid=xxxxx&mail=error");
        exit();
    }

    header("Location: ../formSubmitted.php?subid=xxxxx&mail=execerror");
        exit();

}