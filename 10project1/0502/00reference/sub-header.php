<?php include 'header.php' ?>
<script src="./js/sub.js"></script>

<section class="sub_visual">
  <figure class="visual1"><!-- 이 안에는 이미지가 들어간다 -->
    <img src="./img/sub/sub01.jpg" alt="">
    <figcaption><!-- 이 안에서는 앵커사용불가. 피규어의 자식으로만 사용가능 -->
      <h5>회사소개</h5>
      <p>
        차별화된 전문 디자인 경험과 모바일 환경을 고려한 컨텐츠 최적화 홈페이지 전문회사입니다.
      </p><!-- br넣으면 반응형이 안돼서 width로 제어해야함 마침표 있을때는 넣어도 됨. -->
    </figcaption>
  </figure>
  <figure class="visual2">
    <img src="./img/sub/sub02.jpg" alt="">
    <figcaption>
      <h5>사업영역</h5>
      <p>
        차별화된 전문 디자인 경험과 모바일 환경을 고려한 컨텐츠 최적화 홈페이지 전문회사입니다.
      </p>
    </figcaption>
  </figure>
  <figure class="visual3">
    <img src="./img/sub/sub03.jpg" alt="">
    <figcaption>
      <h5>갤러리</h5>
      <p>
        차별화된 전문 디자인 경험과 모바일 환경을 고려한 컨텐츠 최적화 홈페이지 전문회사입니다.
      </p>
    </figcaption>
  </figure>
  <figure class="visual4">
    <img src="./img/sub/sub04.jpg" alt="">
    <figcaption>
      <h5>온라인문의</h5>
      <p>
        차별화된 전문 디자인 경험과 모바일 환경을 고려한
        컨텐츠 최적화 홈페이지 전문회사입니다.
      </p>
    </figcaption>
  </figure>
  <figure class="visual5">
    <img src="./img/sub/sub05.jpg" alt="">
    <figcaption>
      <h5>커뮤니티</h5>
      <p>
        차별화된 전문 디자인 경험과 모바일 환경을 고려한 컨텐츠 최적화 홈페이지 전문회사입니다.
      </p>
    </figcaption>
  </figure>
  <video src="./video/01.mp4" autoplay muted loop playsinline></video>
  <!-- 동영상 자동재생하려면 뮤티드를 해야함
플레이즈인라인은 사파리랑 아이폰때문에 하는거 -->
</section>

<div class="sub_center">
  <aside class="sidebar">
    <nav class="snb">
      <?php include "menu.php" ?>
    </nav>
  </aside>
  <main class="sub_content">
    <ul class="breadcrumb">
      <li><i class="fa-solid fa-house-chimney"></i></li><!-- 포지션이나 플롯을 이용해서 날려버림 -->
      <li class="dep1"></li>
      <li class="dep2"></li>
    </ul>
    <!-- 메인전체에 z인덱스를 주면 됨. -->