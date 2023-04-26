<?php include "header.php" ?>
<script src="./store/store.js"></script>
<script src="./js/home.js"></script>


<section class="home_visual">
</section>

<script>
  homeVisualArr.forEach(function(v) {
    $(`.home_visual`).append(`
    <figure>
    <img src=${v.path}>
    <figcaption>
      <h5>${v.title}</h5>
      <p>${v.desc}</p>
    </figcaption>
  </figure>
    `)
  })
</script>

<section class="feature">
  <ul>
  </ul>
</section>

<script>
  featureArr.forEach(function(v) {
    $(`.feature ul`).append(`
    <li>
      <a href="${v.link}">
           <figure>
            <div><img src="${v.path}" alt=""></div>
            <figcaption>
            <h5>${v.title}</h5>
            <p>${v.desc}</p>
            </figcaption>
          </figure>
        </a>
    </li>
    `)
  })
</script>

<section class="latest">
  <h2 class="hidden">recently</h2>
  <article class="news">

    <div class="center">

      <h3> <i class="fa-solid fa-microphone-lines"></i> LATEST NEWS</h3>
      <div class="rolling">
        <ul>
          <li>뉴스 게시판 최신글 테스트 1번...</li>
          <li>뉴스 게시판 최신글 테스트 2번...</li>
          <li>뉴스 게시판 최신글 테스트 3번...</li>
          <li>뉴스 게시판 최신글 테스트 4번...</li>
          <li>뉴스 게시판 최신글 테스트 5번...</li>
        </ul>
      </div>
      <script>
        $(`.rolling ul`).clone().appendTo(`.rolling`)
      </script>
    </div>
  </article>

  <div class="bottom">
    <article class="notice">
      <h3>notice</h3>
      <ul>
      </ul>
      <script>
        noticeArr.forEach(function(v) {
          $(`.notice ul`).append(`
          <li>
            <a href="#">${v.desc}</a>
            <time>${v.date}</time>
          </li>
          `)
        })
      </script>
      <a class="more" href="./notice.php">more+</a>
    </article>

    <article class="customer">
      <h3>customer</h3>
      <p>문의전화를 주시면 친절히 상담해드립니다.</p>
      <a class="tel" href="tel:01012345678"><i class="fa-solid fa-phone"></i> 010-1234-5678</a>
      <a class="mail" href="./contact.php"><i class="fa-solid fa-envelope"></i> contact us</a>
    </article>

    <article class="gallery">
      <h3>gallery</h3>
      <ul></ul>
      <script>
        for (var i = 1; i <= 3; i++) {
          $(`.gallery ul`).append(`
          <li>
            <a href="./gallery1.php">
              <img src="./img/sub3/${i}.jpg" alt>
            </a>
          </li>
          `)
        }
      </script>
      <a class="more" href="./gallery1.php">more+</a>
    </article>

  </div>

</section>

<?php include "footer.php" ?>