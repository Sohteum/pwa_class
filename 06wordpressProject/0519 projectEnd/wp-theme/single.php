<?php include "sub-header.php" ?>
<script src="<?php bloginfo('template_directory'); ?>/js/single.js"></script>

<!--포스트의 해당 카테고리 정보가져오기-->
<?php
$category = get_the_category();
$categoryID = $category[0]->cat_ID;
$categoryName = $category[0]->cat_name;
$categoryUrl = get_category_link($category[0]);
$categoryDesc = category_description($category[0]);
?>
<!--포스트의 해당 카테고리 제목 출력-->
<h2 class="sub-title"><?php echo $categoryName ?></h2>

<p class="theme-guide">
  본 컨텐츠는 '관리자/글메뉴/글' 에서 작성되었으며,
  single.php 템플릿을 이용해 수정·편집하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

<!--포스트의 해당 카테고리 설명 출력-->
<div class="sub-desc"><?php echo category_description($categoryID) ?></div>

<!--post(글) 출력시작-->
<section class="sigle-section"><!-- 싱글이라고 만들고 용어는 post라고 함.  -->
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      <dl class="meta">
        <dt>제목</dt>
        <dd><?php the_title(); ?></dd>
        <dt>작성자</dt>
        <dd><?php echo get_the_author(); ?></dd>
        <dt>작성 일자</dt>
        <dd><?php echo get_the_date(); ?></dd>
      </dl>

      <article>
        <!--post 본문-->
        <?php the_content(); ?>
      </article>

      <nav class="post-nav">
        <!--이전글 다음글-->
        <?php previous_post_link('%link', '<i class="fa-solid fa-arrow-left"></i>'); ?>
        <a href="<?php echo $categoryUrl; ?>"><i class="fa-solid fa-list"></i></a><!--해당 카테고리 정보를 가져와야 함-->
        <?php next_post_link('%link', '<i class="fa-solid fa-arrow-right"></i>'); ?>
      </nav>

    <?php endwhile;
  else : ?>
    <!--글 내용이 없을 경우-->
  <?php endif; ?>
  <!--post(글) 출력 끝-->
</section>




<?php include "sub-footer.php" ?>