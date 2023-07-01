<?php include "sub-header.php" ?>


  <!--카테고리 전체 제목 출력-->
  <h2 class="sub-title"><?php single_cat_title(' '); ?></h2>
  <!--카테고리 설명 출력-->
  <div class="category-desc"><?php echo category_description(); ?></div> <!-- 이걸 찾으려면 이름을 줘야하니까  -->

  <!--카테고리 리스트 출력-->
  <ul>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <li>
          <!--리스트 한개 출력-->
          <!--글 이미지-->
          <?php if (has_post_thumbnail()) {
            the_post_thumbnail('thumbnail');
          } ?>
          <!--글 제목-->
          <?php the_title(); ?>
          <!--작성자-->
          <?php echo get_the_author(); ?>
          <!--작성일-->
          <?php echo get_the_date(); ?> <?php echo get_the_time(); ?>
          <!--요약글 출력-->
          <?php the_excerpt(); ?>
          <!--해당글 링크-->
          <a href="<?php the_permalink(); ?>">해당글 보기</a>
          <!--리스트 한개 끝-->
        </li>

      <?php endwhile;
    else : ?>
      <!--카테고리 글이 없는 경우-->
    <?php endif; ?>
  </ul>
  <!--카테고리 리스트 출력끝-->

  <!--페이징출력시작-->
  <?php
  global $wp_query;
  $big = 999999999;
  echo paginate_links(array(
    'type'        => 'list',
    'base'        => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
    'format'      => '?paged=%#%',
    'current'     => max(1, get_query_var('paged')),
    'total'       => $wp_query->max_num_pages,
    'prev_text'   => __('<'),
    'next_text'   => __('>'),
  ));
  ?>
  <!--페이징출력끝-->

<?php include "sub-footer.php" ?>