<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"> <!-- 폰트 -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> <!-- 폰트 -->
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/section1.css">
  <link rel="stylesheet" href="./css/section2.css">
  <link rel="stylesheet" href="./css/section3.css">
  <link rel="stylesheet" href="./css/section4.css">
  <link rel="stylesheet" href="./css/section5.css">
  <link rel="stylesheet" href="./css/section6.css">
  <link rel="stylesheet" href="./css/shortcut.css">
  <link rel="stylesheet" href="./css/modal.css">
  <script src="https://kit.fontawesome.com/eef58f469c.js" crossorigin="anonymous"></script> <!-- 폰트어썸 -->
  <script src="https://code.jquery.com/jquery-latest.js"></script> <!-- j쿼리 cdn -->
  <script src="./js/jquery.isotope.js"></script> 
  <script src="./js/hoverBox.js"></script> 
  <script src="./js/particles.js"></script>
  <script src="./js/tweenmax.js"></script>
  <script src="./js/morphsvg.js"></script>
  <script src="./js/fractalRipple.js"></script> <!-- tweenmax 아래에서 호출해야 한다 -->
  <script src="./js/jquery.ripples-min.js"></script>
  <script src="./js/common.js"></script>
  <script src="./js/smoothScroll.js"></script>
  <script src="./js/header.js"></script>
  <script src="./js/footer.js"></script>
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
        <img src="./img/common/logo_title.png" alt="">
      </h1>
      <nav class="gnb gnb-lg">
        <?php include "menu.php" ?>
      </nav>
      <button class="mbtn">
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
      </button>
    </div>
    <nav class="gnb gnb-sm">
        <?php include "menu.php" ?>
    </nav>
    <?php include "img/svg/zigzag-horz.php" ?>
    <figure class="scrollspy">
      <?php include "img/svg/scrollspy.php" ?>
    </figure>
  </header>