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
          <img src="${v.path}" alt="">
          <figcaption>
          <h3>${v.title}</h3>
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

</section>

<?php include "footer.php" ?>