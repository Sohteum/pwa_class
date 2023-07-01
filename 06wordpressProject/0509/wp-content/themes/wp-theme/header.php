<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title>
  <?php wp_head(); ?>
  <!-- 이 밑으로 해야함 순서대로 읽으니까 -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href=" <?php bloginfo('template_directory'); ?>/css/style.css">
  <link rel="stylesheet" href=" <?php bloginfo('template_directory'); ?>/css/reset.css">
  <link rel="stylesheet" href=" <?php bloginfo('template_directory'); ?>/css/header.css">
  <link rel="stylesheet" href=" <?php bloginfo('template_directory'); ?>/css/footer.css">
  <link rel="stylesheet" href=" <?php bloginfo('template_directory'); ?>/css/sub.css">
  <script src="https://kit.fontawesome.com/10bf1730a7.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/particles.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/type_effect.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/common.js"></script>
</head>

<body <?php body_class(); ?>>
  <script src="<?php bloginfo('template_directory'); ?>/js/header.js"></script>
  <header>
    <div class="top">

    </div>
    <div class="center">
      <h1>
        <span class="hidden">워드프레스</span>
        <a href="<?php bloginfo('url'); ?>">
          <img src="<?php bloginfo('template_directory'); ?>/img/icon/logo.png" alt="">
        </a>
      </h1>
      <nav class="gnb gnb-lg">
        <?php wp_nav_menu(array('theme_location' => 'menu')); ?>
      </nav>
      <nav class="gnb gnb-sm">
        <span id="particles-js-star"></span>

        <h6>wordpress</h6>
        <video src="<?php bloginfo('template_directory'); ?>/img/video/nav.mp4" muted></video>
        <?php wp_nav_menu(array('theme_location' => 'menu')); ?>
        <button class="mbtn mbtn-close"><i class="fa-solid fa-xmark"></i></button>
      </nav>

      <button class="mbtn mbtn-open"><i class="fa-solid fa-bars-staggered"></i></button>
    </div>
  </header>
