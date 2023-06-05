<?php include 'sub-header.php' ?>
<script src="./js/gallery2.js"></script>
<h2 class="sub_title">갤러리2</h2>
<section class="gallery2_section"> 
  <p class="site_guide">
    flex속성을 이용한 반응형 그리드 레이아웃을 설게 하였습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">
    <em class="emphasis">갤러리 및 시공사례입니다.</em> <br>
    선샤인의 다양한 제작물을 살펴보실 수 있습니다.
  </p>

  <ul class="flex_container">

  
  </ul>
  <script>
    for (var i = 1; i <= 9; i++) {
      $(`.flex_container`).append(`
      <li class="box">
      <a href="./img/sub3/${i}.jpg">
        <figure>
          <img src="./img/sub3/${i}.jpg" alt="">
          <figcaption>
            <h3>img title ${i}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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