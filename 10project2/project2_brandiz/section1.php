<section class="section1">
  <figure class="bg">
    <img src="./img/section1/section1-sky.jpg" alt="">
      </figure>
  <div class="desc">
    <figure class=title>
      <img class="deco1" src="./img/section1/balloon.png" alt="">
      <?php include "img/svg/section1-text.php" ?>
      <img class="deco2" src="./img/section1/air-balloon.png" alt="">
    </figure>
    <figure class="slogun">
      <img src="./img/section1/section1_text_small.png" alt="">
    </figure>
  </div>
  <figure class="boy">
    <img class="original" src="./img/section1/section1_boy.png" alt="">
    <img class="glitch glitch1" src="./img/section1/section1_boy.png" alt="">
    <img class="glitch glitch2" src="./img/section1/section1_boy.png" alt="">
  </figure>

  <svg style="display: none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="ripple-filter1">
        <feImage xlink="" x="0" y="0" result="rippleImage" xlink:href="./img/ripple/ripple.png" />
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="rippleImage"
          result="displacementMap" color-interpolation-filters="sRGB" scale="100" />
        <feComposite operator="in" in2="rippleImage"></feComposite>
      </filter>
    </defs>
  </svg>

</section>
<!-- 객체로 싸면 모션 적용하기가 편하다  중첩으로 효과주기도 쉽고-->