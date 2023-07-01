<?php include "sub-header.php" ?>
<script src="<?php bloginfo('template_directory'); ?>/js/page-area.js"></script>


<h2 class="sub-title"><?php the_title(); ?></h2>


<p class="theme-guide">
  본 컨텐츠는 디자인 페이지로 제작되었으며,
  page-area.php 템플릿을 이용해 수정·편집하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

<div class="sub-desc"><?php echo category_description(); ?>
  회사만의 <b>특화되고 세분화된 사업영역</b>
  을 바탕으로 <br>
  <b>최고의 비즈니스</b>를 제안합니다.
</div>

<section class="page-section page-section-area"> 
  <p>
    회사만의 특화되고 <em>세분화된 사업영역</em>을 바탕으로
    <em>최고의 비즈니스</em>를 제안합니다.
  </p>

  <p>
    고객님의 요구에 기획부터 홈페이지에 필요한 이미지 촬영, 전자카다로그 제작, 포탈싸이트 등록, 키워드광고,
    홈페이지 제작과 활용에 필요한 모든 서비스를 제공하고 있습니다.
  </p>

  <figure>
    <img src="<?php bloginfo('template_directory'); ?>/img/sub2/business-04.jpg" alt="">
  </figure>

</section>

<?php include "sub-footer.php" ?>