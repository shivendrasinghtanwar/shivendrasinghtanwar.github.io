<!DOCTYPE html>
<html>
  <head>
    <title>Speed Post Kiosk</title> 
  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">
  <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/responsive.css">
  <link rel="stylesheet" type="text/css" href="css/animate.css">
    <meta charset="utf-8">
  </head>
  <body>
  <!-- Header Section -->
  <div class="container-fluid header">
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 text-center">
          <h2>Print QR Codes</h2>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
  <!-- Header Section Close -->
  <!-- QR code Section -->
  <div class="container-fluid header">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <form method="get" action="">
            <input type="text" name="data" value="">
            <input type="submit" value="Generate">
          </form>
          <?php if(isset($_GET['data'])){ ?>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=<?php echo $_GET['data'] ?> ">
          <?php } ?>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
  <!-- QR code Section Close -->
  </body>
</html>