<?php include 'sub-header.php' ?>
<script src="./js/gallery3.js"></script>
<h2 class="sub_title">갤러리3</h2>
<section class="gallery3_section"> <!-- 케바케이스, 스네이크케이스 -->
  <p class="site_guide">
    grid 시스템을 이용한 반응형 그리드 레이아웃을 설게 하였습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">
    <em class="emphasis">갤러리 및 시공사례입니다.</em> <br>
    선샤인의 다양한 제작물을 살펴보실 수 있습니다.
  </p>

  <ul class="grid_container">
  </ul>

  <script>
    for (let i = 1; i <= 9; i++) {
      $(`.grid_container`).append(`
      <li class="item${i}">
      <a href="#">
        <figure>
          <img src="./img/sub3/${i}.jpg" alt="">
          <figcaption>
          <h3>
            Title ${i}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </figcaption>
        </figure>
      </a>
    </li>
            `)
    }
  </script>
</section>
<?php include 'sub-footer.php' ?>