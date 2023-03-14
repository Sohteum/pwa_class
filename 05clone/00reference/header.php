<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css">
  <!-- css파일 링크걸때 무조건 폰트먼저 그다음리셋 그다음 스타일 그다음 스크립트 -->
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <script src="./js/script.js"></script>
  <title>Document</title>
</head>

<body>

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
      </h1>
      <nav class="gnb lg">
        네비
      </nav>

      <button class="mBtn"><i class="fa-solid fa-bars"></i></button>
    </div>
  </header>

<main>
  본문...
</main>