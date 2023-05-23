<script src="./js/section4.js"></script>
<section class="section4">
  <script src="js/app_particle_bubble.js"></script>
  <div id="particles-js2"></div>

  <h2 class="title" data-content="portfolio">
    <span>portfolio</span>
  </h2>
  <div class="btns">
    <button value="*" class="active">All</button>
    <button value=".web">1. web</button>
    <button value=".app">2. application</button>
    <button value=".etc">3. etc</button>
    <!-- 클래스를 이용 -->
  </div>
  <ul class="portfolio">

  </ul>
  <script>
    porfolioArr.forEach(function(v) {
      $(`.section4 .portfolio`).append(
        `
        <li class="${v.class}">
          <a href="./img/section4/${v.detail}.jpg">
            <figure>
             <div> <img src="./img/section4/${v.thumb}.jpg" alt/></div>
              <figcaption style="filter:hue-rotate(${Math.random()*360}deg)">
                <h3>${v.title}</h3>
                <p>${v.desc}</p> 
              </figcaption>
            </figure>
          </a>
        </li>
        `
      )
    })

    //돔이 로드가 끝나고 어펜드하는게 레디펑션임. 그래서 여기서는 사용못함
    //예를 들어 픠리로더같은거 구현했을때 레디가 끝난다음에 실행이되면 프리로더가 끝나고 생기는게 보임
  </script>
</section>
