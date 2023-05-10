<?php include 'sub-header.php' ?>
<script src="./js/location.js"></script>
<h2 class="sub_title">오시는길</h2>
<section class="location_section">
  <p class="site_guide">
    탭 메뉴 UI와 구글 맵 API를 이용하여 찾아오시는길 페이지를 설계하였습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">
    <em class="emphasis">찾아오시는 길</em> <br> 방문 전 연락을 주시면 친절하게 안내해 드리겠습니다.
  </p>

  <article>
    <h3 class="hidden">구글맵, 약도</h3>
    <div class="tab_menu">
      <button value="1" class="active">구글맵</button>
      <button value="2">약도</button>
    </div>
    <div class="pane">
      <div>
        <iframe class="map map1" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3165.7431947671644!2d126.72106717634084!3d37.49038607205856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z67aA7Y-J7Jet!5e0!3m2!1sko!2skr!4v1679969627665!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <img class="map map2" src="./img/sub1/map.jpg" alt="">
      </div>
    </div>
  </article>
</section>
<?php include 'sub-footer.php' ?>