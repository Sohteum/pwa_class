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
<!--포스트의 해당 카테고리 설명 출력-->
<div class="category_desc"><?php echo category_description($categoryID) ?></div>

<!--post(글) 출력시작-->
<section class="sigle-section"><!-- 싱글이라고 만들고 용어는 post라고 함.  -->
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <!--제목-->
      <?php the_title(); ?>
      <!--작성자-->
      <?php echo get_the_author(); ?>
      <!--작성 시간-->
      <?php echo get_the_date(); ?>
      <?php echo get_the_time(); ?>
      <!--post 본문-->
      <?php the_content(); ?>
      <!--이전글 다음글-->
      <?php previous_post_link('%link', 'prev'); ?>
      <?php next_post_link('%link', 'next'); ?>
      <a href="<?php echo $categoryUrl; ?>">목록</a><!--해당 카테고리 정보를 가져와야 함-->
   
    <?php endwhile;
  else : ?>
    <!--글 내용이 없을 경우-->
  <?php endif; ?>
  <!--post(글) 출력 끝-->
</section>




<?php include "sub-footer.php" ?>