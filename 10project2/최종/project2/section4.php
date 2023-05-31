<script src="./js/section4.js"></script>

<section class="section4">
  <script src="js/app_particle_bubble.js"></script>
  <div id="particles-js2"></div>
  <div class="bg2"></div>

  <h2 class="title" data-content="portfolio">
    <span>portfolio</span>
  </h2>

  <div class="btns">
    <button value="*" class="active">ALL</button>
    <button value=".LEGO">1.LEGO</button>
    <button value=".PIXEL">2.PIXEL</button>
    <button value=".ETC">3.ETC</button>
  </div>

  <ul class="portfolio"></ul>
  <script>
    portfolioArr.forEach(function(v) {
      $(`.section4 .portfolio`).append(`
        <li class="${v.class}">
          <a href="./img/section4/${v.detail}.jpg">
            <figure>
              <div>
                <img src="./img/section4/${v.thumb}.jpg" alt="">
              </div>
              <figcaption style="filter:hue-rotate(${Math.random()*360}deg)">
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