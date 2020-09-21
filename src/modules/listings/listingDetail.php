
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>

    <div>
        <?php
            include_once 'listingDetail.inc.php';
            setID($_GET["BundleID"]);
            echoListingDetail();
        ?>
    </div>
  </body>
</html>
