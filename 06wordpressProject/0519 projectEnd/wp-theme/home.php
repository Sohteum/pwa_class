<?php get_header(); ?>
<script src="<?php bloginfo('template_directory'); ?>/js/home.js"></script>

<section class="home-visual">
  <script src="<?php bloginfo('template_directory'); ?>/js/app_particle_default.js"></script>
  <div id="particles-js"></div>

  <video src="<?php bloginfo('template_directory'); ?>/video/light.mp4" loop autoplay muted playsinline></video>

  <div class="carousel">

    <ul class="polygon3d">
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/1.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/2.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/3.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/4.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/5.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/6.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/7.jpg" alt=""></li>
      <li><img src="<?php bloginfo('template_directory'); ?>/img/sub3/8.jpg" alt=""></li>
    </ul>

    <div class="indicator">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>

    <!-- <button class="next"><i class="fa-solid fa-chevron-left"></i></button>
    <button class="prev"><i class="fa-solid fa-chevron-right"></i></button> -->

    <button class="next"><img src="<?php bloginfo('template_directory'); ?>/img/icon/next.png" alt=""></button>
    <button class="prev"><img src="<?php bloginfo('template_directory'); ?>/img/icon/prev.png" alt=""></button>

  </div>

</section>

<section class="home-section1">
  <div class="center">
    <h2 class="home-section-title">feature</h2>
    <p class="home-section-desc">
      선샤인은 최고의 크리에이티브와 차별화된 전문 디자인 경험을 바탕으로
      영역의 한계를 넘어 항상 최고의 솔루션을 제공합니다.
    </p>
    <ul>
      <li>
        <a href="<?php bloginfo('url'); ?>/biz/introduce/"> <!-- 홈페이지url -->
          <figure>
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner01.jpg" alt="">
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner01.jpg" alt="">
          </figure>
          <div class="textbox">
            <h3><b>BUSINESS</b></h3>
            <p>회사만의 특화되고 세분화된 사업영역로 최고의 비즈니스를 제안합니다.</p>
          </div>
        </a>
      </li>

      <li>
        <a href="<?php bloginfo('url'); ?>/product/gallery/">
          <figure>
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner02.jpg" alt="">
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner02.jpg" alt="">
          </figure>
          <div class="textbox">
            <h3><b>PRODUCT</b></h3>
            <p>최고의 기술력과 최상의 품질로 보답하여 드리겠습니다.</p>
          </div>
        </a>
      </li>

      <li>
        <a href="<?php bloginfo('url'); ?>/online/contact/">
          <figure>
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner03.jpg" alt="">
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner03.jpg" alt="">
          </figure>
          <div class="textbox">
            <h3><b>ONLINE</b></h3>
            <p>온라인으로 빠르고 효율적인 상담을 받으세요.</p>
          </div>
        </a>
      </li>

      <li>
        <a href="<?php bloginfo('url'); ?>/about/location/">
          <figure>
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner04.jpg" alt="">
            <img src="<?php bloginfo('template_directory'); ?>/img/home/banner04.jpg" alt="">
          </figure>
          <div class="textbox">
            <h3><b>LOCATON</b></h3>
            <p>당사로 찾아오시는 길을 상세히 안내해 드립니다.</p>
          </div>
        </a>
      </li>

    </ul>
  </div>

</section>

<section class="home-section2">
  <div class="center">
    <h2 class="home-section-title">
    latest
    </h2>
    <p class="home-section-desc">
      선샤인의 최신 소식을 빠르게 전달해 드립니다.
    </p>

    <div class="recent">

      <article class="notice">
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub01.jpg" alt="">
          <figcaption class="title">
            <i class="fa-regular fa-bell"></i>
            <h3>notice</h3>
          </figcaption><!-- title -->
        </figure>

        <div class="board">
          <div class="inner">
            <?php
            $homeURL = home_url();
            $kboardID = "1";
            $kboardPAGE = "/community/notice";
            $kboardCnt = "5";
            $kboardSTR = '[kboard_latest id="1" url="' . $homeURL . $kboardPAGE . '" rpp="' . $kboardCnt . '"]';
            echo do_shortcode($kboardSTR);
            ?>
          </div>
        </div>
      </article><!-- notice -->

      <article class="prd">
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub02.jpg" alt="">
          <figcaption class="title">
            <i class="fa-solid fa-cube"></i>
            <h3>product</h3>
          </figcaption><!-- title -->
        </figure>
        <div class="board">
          <div class="inner">
            <ul class="latest-prd">
              <!--카테고리 최신글 출력 시작-->
              <?php
              $catquery = new WP_Query('cat=2&posts_per_page=4'); // 카테고리 ID, 표시 글 개수
              while ($catquery->have_posts()) : $catquery->the_post();
              ?>
                <li>
                  <a href="<?php the_permalink() ?>" rel="bookmark">
                    <!--대표이미지 출력-->
                    <?php if (has_post_thumbnail()) {
                      the_post_thumbnail('thumbnail');
                    } ?>
                    <div>
                      <!--글제목 출력-->
                      <h4><?php the_title(); ?></h4>
                      <!--요약글 출력-->
                      <?php the_excerpt(); ?> <!-- 자동으로 p태그 -->
                    </div>
                  </a>
                </li>
              <?php endwhile; ?>
              <!--카테고리 최신글 출력 끝-->
            </ul>
          </div>
        </div>

      </article><!-- prd -->

      <article class="free">
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub03.jpg" alt="">
          <figcaption class="title">
            <i class="fa-regular fa-comments"></i>
            <h3>freeboard</h3>
          </figcaption><!-- title -->
        </figure>
        <div class="board">
          <div class="inner">
            <?php
            $homeURL = home_url();
            $kboardID = "2";
            $kboardPAGE = "/community/freeboard";
            $kboardCnt = "5";
            $kboardSTR = '[kboard_latest id="2" url="' . $homeURL . $kboardPAGE . '" rpp="' . $kboardCnt . '"]';
            echo do_shortcode($kboardSTR);
            ?>
          </div>
        </div>
      </article><!-- free -->

    </div>
  </div>

</section>

<section class="home-section3">
  <div class="bg"></div>
  <div class="flip-book flip-book1">
    <div class="sheet sheet1 ">
      <div class="page page-odd page1 ">
        <figure>
          <figcaption class="home-section-title">
            <p class="home-section-desc">
              thank you for your visite
            </p>
          </figcaption>
          <img src="<?php bloginfo('template_directory'); ?>/img/home/vr.png" alt="">
        </figure>

      </div><!-- page0 -->
      <div class="page page-even page2">
        <div class="inner">
          <h3>Location</h3>
          <address>
            <p><i class="fa-solid fa-map-location-dot"></i> 부산광역시 해운대구 좌동 113-111 지오프라자 2층 710-2</p>
            <p><i class="fa-solid fa-phone-volume"></i> 070-7155-1979</p>
            <p><i class="fa-solid fa-fax"></i> 02-2139-1142</p>
            <a href="<?php bloginfo('url'); ?>/about/location/">찾아오시는길</a>
          </address>
        </div>
      </div><!-- page1 -->
    </div><!-- sheet1 -->

    <div class="sheet sheet2 ">
      <div class="page page-odd page3 ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7596111337157!2d126.72094782637839!3d37.489998728512255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7c444b6c1ca5%3A0xaaf45d1622da77c0!2z67aA7Y-J!5e0!3m2!1sko!2skr!4v1684458106365!5m2!1sko!2skr"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div><!-- page0 -->
      <div class="page page-even page4">
        page4 <!-- 뒷표지 -->
      </div><!-- page1 -->
    </div><!-- sheet2 -->

  </div><!--flip-book-->
</section>
<?php get_footer(); ?>