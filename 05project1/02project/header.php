<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <script src="./js/nav.js"></script>
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

    <div class="bottom">
      <h1>
        <a href="./index.php">
          SunsHine
          <!-- <img src="./img/icons/logo.png" alt=""> -->
        </a>
        <span class="hidden">선샤인</span>
      </h1>
      <nav class="nav_bar lg">
        <?php include "nav-bar.php" ?>
      </nav>
      <nav class="nav_bar sm">
        <?php include "nav-bar.php" ?>
      </nav>
      <button class="btn">
        <i class="fa-solid fa-bars open"></i>
        <i class="fa-solid fa-xmark close"></i>
      </button>
    </div>

  </header>