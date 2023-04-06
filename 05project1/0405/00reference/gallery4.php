<?php include 'sub-header.php' ?>
<script src="./js/gallery4.js"></script>
<h2 class="sub_title">갤러리4</h2>
<section class="gallery4_section"> <!-- 케바케이스, 스네이크케이스 -->
  <p class="site_guide">
    masonry(jQuery plugin)을 이용한 반응형 그리드 레이아웃을 설게 하였습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">

    <em class="emphasis">갤러리 및 시공사례입니다.</em> <br>
    선샤인의 다양한 제작물을 살펴보실 수 있습니다.
  </p>


  <ul class="masonry_container">
  </ul>

  <script>
    for (let i = 1; i <= 9; i++) {
      $(`.masonry_container`).append(`
       <li>
      <a href="#">
        <figure>
          <img src="./img/sub3/resize${i}.jpg" alt="">
          <figcaption>
            <h3>Title ${i}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
          </figcaption>
        </figure>
      </a>
    </li>
      `)
    }
  </script>
</section>
<?php include 'sub-footer.php' ?>