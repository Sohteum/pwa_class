<?php include "sub-header.php" ?>


<h2 class="sub-title"><?php the_title(); ?></h2>

<section class="page-section"><!-- 페이지 본문 -->
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile;
  else : ?>
  <?php endif; ?>
</section>

<?php include "sub-footer.php" ?>