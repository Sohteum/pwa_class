<?php include 'header.php' ?>
<script src="./store/store.js"></script>
<script src="./js/home.js"></script>

<section class="home_visual">
  <!-- particles.js container -->
  <script src="js/particles.js"></script>
  <script src="js/app_particle_star.js"></script>
  <div id="particles-js"></div>
  <!-- particles.js container -->

</section>

<script>
  homeVisualArr.forEach(function(v) {
    $(`.home_visual`).append(`
      <figure>
      <img src="${v.path}" alt="">
      <figcaption>
        <h5>${v.title}</h5>
        <p>${v.desc}</p>
      </figcaption>
      </figure>
`)
  })
</script>
<section class="feature">
  <h2 class="hidden">feature</h2>
  <ul>
  </ul>
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
</section>

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
        // 얘 안쪽에 넣을때 append인거고, 클론이 복사한다는거야. 근데 그러면 나는 유엘 밖에 넣고싶다 그럼 appendTo

        /* 바닐라문법
        let ulCopy = document.querySelector(`.rolling ul`).cloneNode(true)
        document.querySelector(`.rolling ul`).append(clone)
        카피하는데 자식요소까지 카피를 하겠다. 트루가 없으면 뽑아오겠다는 의미
        */
       </script>
    </div>
  </article>

</section>

<?php include 'footer.php' ?>