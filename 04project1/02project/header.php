<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./img/icons/favicon.ico">
  <link rel="stylesheet" href="./css/style.css">
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/common.js"></script>
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>
  <script src="header.js"></script>
  <script src="./js/nav.js"></script>
  <header>
    <div class="top">
      <h1>
        <a href="./index.php">
          SunSHine
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
      <nav class="member">
        <a title="Sign In" href="#"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
        <a title="Sign Up" href="#"><i class="fa-solid fa-user-plus"></i></a>
      </nav>
      <button class="btn">
        <i class="fa-solid fa-bars open"></i>
        <i class="fa-solid fa-xmark close"></i>
      </button>
    </div>

  </header>