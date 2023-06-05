<?php include 'sub-header.php' ?>
<script src="./js/gallery5.js"></script>
<h2 class="sub_title">갤러리5</h2>
<section class="gallery5_section"> <!-- 케바케이스, 스네이크케이스 -->
  <p class="site_guide">
    isotope(jQuery plugin)를 이용한 반응형 그리드 레이아웃을 설게 하였습니다.
    <button>
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </p>

  <p class="sub_desc">
    <em class="emphasis">갤러리 및 시공사례입니다.</em> <br>
    선샤인의 다양한 제작물을 살펴보실 수 있습니다.
  </p>

<div class="btn_container">
  <button value="*" class="active">All</button>
  <button value=".category1">category1</button>
  <button value=".category2">category2</button>
  <button value=".category3">category3</button>
  <!-- 우리는 클래스를 보여줄거니까 밸류에 반드시 점을 입력해야함 -->
</div>
  <ul class="isotope_container">
    <!-- 카테고리를 만들어주는게 아이소토프. 위에 탭(버튼)에서 클릭하면 그 클래스에 해당하는 애들만 좌르르 나오는것 -->
    
    <li class="category1 category3">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize1.jpg" alt="">
          <figcaption>
            <h3>Title 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category2 category3">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize2.jpg" alt="">
          <figcaption>
            <h3>Title 2</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category1 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize3.jpg" alt="">
          <figcaption>
            <h3>Title 3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category1 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize4.jpg" alt="">
          <figcaption>
            <h3>Title 4</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category3 category2" >
      <a href="#">
        <figure>
          <img src="./img/sub3/resize5.jpg" alt="">
          <figcaption>
            <h3>Title 5</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category1 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize6.jpg" alt="">
          <figcaption>
            <h3>Title 6</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category3 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize7.jpg" alt="">
          <figcaption>
            <h3>Title 7</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category1 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize8.jpg" alt="">
          <figcaption>
            <h3>Title 8</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
    <li class="category3 category2">
      <a href="#">
        <figure>
          <img src="./img/sub3/resize9.jpg" alt="">
          <figcaption>
            <h3>Title 9</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </figcaption>
        </figure>
      </a>
    </li>
  </ul>



</section>
<?php include 'sub-footer.php' ?>