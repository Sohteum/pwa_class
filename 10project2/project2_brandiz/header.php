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
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/section1.css">
  <link rel="stylesheet" href="./css/shortcut.css">
  <link rel="stylesheet" href="./css/section2.css">
  <link rel="stylesheet" href="./css/section3.css">
  <link rel="stylesheet" href="./css/section4.css">
  <link rel="stylesheet" href="./css/section5.css">
  <link rel="stylesheet" href="./css/section6.css">
  <link rel="stylesheet" href="./css/modal.css">
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script>

  <script src="./js/jquery.isotope.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="./js/particles.js"></script>
  <script src="./js/morphsvg.js"></script>
  <script src="./js/tweenmax.js"></script>
  <script src="./js/fractalRipple.js"></script>
  <script src="./js/jquery.ripples.js"></script>
  <script src="./js/common.js"></script>
  <script src="./js/smoothScroll.js"></script>
  <script src="./js/header.js"></script>
  <script src="./js/footer.js"></script> 
  <script src="./js/section1.js"></script> 


  <title>OnePage Parallax</title>
</head>

<body>
  <header>
    <div class="center">
      <h1>
        <span class="hidden">brandiz</span>
        <a href="#">
          <?php include "img/svg/logo.php" ?> <!-- 이미지 앞에 슬래시 있으면 안됨 -->
          <?php include "img/svg/logo.php" ?> <!-- 이미지 앞에 슬래시 있으면 안됨 -->
        </a>
        <img src="./img/common/logo_title.png" alt="">
      </h1><!-- 무조건 텍스트 -->
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
    <?php include 'img/svg/zigzag-horz.php' ?> <!-- 헤더기준으로 경로를 잡는다. 그리고 앞에./ 이런건 안씀 -->

    <figure class="scrollspy">
      <?php include 'img/svg/scrollspy.php' ?>
    </figure>

  </header>
  <!-- 여기서는 내부링크로 하면 내가 원하는 위치제어가 안됨. top까지 올라가버림 스크립트로 해야함 -->