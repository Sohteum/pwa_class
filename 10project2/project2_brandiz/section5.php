<script src="./js/section5.js"></script>

<section class="section5">

  <article class="bg">
    <img src="./img/section5/section5_bg.jpg" alt="">
    <video src="./img/section5/bg.mp4" loop autoplay muted playsinline></video>
  </article>
  <article class="earth">
    <figure>
      <img class="dummy" src="./img/section5/earth-1.png" alt="">
    </figure>
    <script>
      for (let i = 1; i <= 48; i++) {
        $(`.earth figure`).append(
          `
        <img class="img img${i}" src="./img/section5/earth-${i}.png" alt>  
        `)
      }
    </script>
  </article>
  <article class="progress">
    <ul>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-regular fa-building"></i>
          <h3>설립년도</h3>
          <b>2023</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-solid fa-hand-holding-dollar"></i>
          <h3>계약건수</h3>
          <b>125</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-regular fa-handshake"></i>
          <h3>파트너</h3>
          <b>130</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-solid fa-id-card"></i>
          <h3>특허보유</h3>
          <b>55</b>
        </div>
      </li>
    </ul>
  </article>
  <div class="dummy-scroll"><!-- 지구의 회전시간을 늘리기 위해 안보이는 페이지를 삽입 -->

  </div>
</section>