<script src="./js/section5.js"></script>

<section class="section5">
  <article class="bg">
    <img src="./img/section5/section5_bg.jpg" alt="">
    <video src="./img/section5/bg.mp4" autoplay muted playsinline loop></video>
  </article>
  <article class="earth">
    <figure>
      <img class="dummy" src="./img/section5/earth-1.png" alt=""> <!-- 높이 목적으로 사용하는 벽돌 -->
    </figure>
    <script>
      for(var i = 1; i <= 48; i++){
        $(`.earth figure`).append(`
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
          <i class="fa-solid fa-building"></i>
          <h3>설립연도</h3>
          <b data-t="2023" class="progress-num progress-num1">0</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-solid fa-hand-holding-dollar"></i>
          <h3>계약건수</h3>
          <b data-t="1234" class="progress-num progress-num2">0</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-solid fa-handshake"></i>
          <h3>파트너</h3>
          <b data-t="567" class="progress-num progress-num3">0</b>
        </div>
      </li>
      <li>
        <?php include "img/svg/badge.php" ?>
        <div class="textbox">
          <i class="fa-solid fa-passport"></i>
          <h3>특허보유</h3>
          <b data-t="89" class="progress-num progress-num4">0</b>
        </div>
      </li>
    </ul>
  </article>
  <div class="dummy-scroll"></div>
</section>