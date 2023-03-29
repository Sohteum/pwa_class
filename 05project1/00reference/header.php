<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./img/icons/favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css">
  <!-- css파일 링크걸때 무조건 폰트먼저 그다음리셋 그다음 스타일 그다음 스크립트 -->
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/common.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>
  <script src="./js/header.js"></script>
  <script src="./js/nav.js"></script><!-- 어디에서 호출해도 상관없음 이 스크립트는 전체 페이지에서 호출될거야 -->
  <header>
    <div class="top">
      <nav class="member">
        <a href="./index.php">처음으로</a>
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </nav>
    </div>

    <div class="center">
      <h1><!-- 액자에 맞게 이미지를 꽉껴줄거임 -->
        <a href="./index.php">
          <img src="./img/icons/logo.png" alt="">
        </a><!-- 액자가 될수없음 -->
        <span class="hidden">선샤인</span> <!-- 디스플레이넌하면 스크린리더가 읽지를 못함 그러니까 포지션픽스드 하고 left:100줘버림 이것도 할일이 많아서 리젯에 만들어버림 -->
      </h1><!-- 로고쌀때 h1주로 사용 -->
      <nav class="gnb lg">
        <?php include 'menu.php' ?>
      </nav>

      <nav class="gnb sm">
        <?php include 'menu.php' ?>
      </nav><!-- 여기서 픽스드. 브라우저기준으로.앱솔주면 갇힘 -->

      <button class="mBtn">
        <i class="fa-solid fa-bars open"></i>
        <i class="fa-solid fa-xmark close"></i>
      </button>
    </div>
  </header>