<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./img/icons/favicon.ico">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="./js/masonry-docs.min.js"></script>
  <script src="./js/jquery.isotope.js"></script>
  <script src="./js/jquery.viewbox.js"></script>
  <script src="./js/hoverBox.js"></script>
  <script src="./js/common.js"></script>
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <title>SunSHine</title>
</head>

<body>
  <?php include "preloader.php" ?>
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