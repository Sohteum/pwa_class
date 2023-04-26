<script src="./js/section3.js"></script>
<section class="section3">
  <figure class="bg"></figure>
  <div class="gooey"></div>
  <script>
    for (let i = 1; i <= 40; i++) {
      $(`.gooey`).append(
        `<div></div>
    `)
      $(`.gooey div:last-child`).css({
        'left': `${Math.random()*100}%`,
        'width': `${Math.random()*2+1}%`,
        'filter': `hue-rotate(${Math.random()*360}deg)`,
        'animation-duration': `${Math.random()*7+4}s`
      })
    }
  </script>

  <svg style="display:none;">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 20 -10" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </svg>

  <img class="section3_text" src="./img/section3/seciton3_01.png" alt="">
</section>