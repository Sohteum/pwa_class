<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/section1.css">
  <link rel="stylesheet" href="./css/shortcut.css">
  <link rel="stylesheet" href="./css/section2.css">
  <link rel="stylesheet" href="./css/section3.css">
  <link rel="stylesheet" href="./css/section4.css">
  <link rel="stylesheet" href="./css/section5.css">
  <link rel="stylesheet" href="./css/section6.css">
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/morphsvg.js"></script>
  <script src="./js/tweenmax.js"></script>
  <script src="./js/common.js"></script>
  <script src="./js/header.js"></script>

  <title>OnePage Parallax</title>
</head>

<body>
  <header>
    <div class="center">
      <h1>
        <span class="hidden">brandiz</span>
        <a href="#">
          <?php include "img/svg/logo.php" ?>
          <?php include "img/svg/logo.php" ?>
        </a>
      </h1>
      <nav class="gnb gnb_lg">
        <?php include "menu.php" ?>
      </nav>
      <button class="mBtn">
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
      </button>
    </div>
    <nav class="gnb gnb_sm">
      <?php include "menu.php" ?>
    </nav>
    <?php include 'img/svg/zigzag-horz.php' ?>
  </header>