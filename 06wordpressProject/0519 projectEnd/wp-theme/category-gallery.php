<?php include "sub-header.php" ?>
<script src="<?php bloginfo('template_directory'); ?>/js/category-gallery.js"></script>


<!--카테고리 전체 제목 출력-->
<h2 class="sub-title"><?php single_cat_title(' '); ?></h2>

<p class="theme-guide">
  본 컨텐츠는 카테고리로 제작되었으며,
  category-gallery.php 템플릿을 이용해 수정·편집하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

<section class="category-gallery-section">

  <!--카테고리 설명 출력-->
  <div class="sub-desc"><?php echo category_description(); ?></div> <!-- 이걸 찾으려면 이름을 줘야하니까  -->

  <!--카테고리 리스트 출력-->
  <ul>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <li>
          <!--리스트 한개 출력-->
          <a href="<?php the_permalink(); ?>">
            <figure>
              <!--글 이미지-->
              <?php if (has_post_thumbnail()) {
                the_post_thumbnail('thumbnail');
              } ?>
              <figcaption>
                <!--글 제목-->
                <h3><?php the_title(); ?></h3>
                <!--요약글 출력-->
                <?php the_excerpt(); ?>
                <!--해당글 링크-->
              </figcaption>
            </figure>
          </a>
          <!--리스트 한개 끝-->
        </li>

      <?php endwhile;
    else : ?>
      <!--카테고리 글이 없는 경우-->
    <?php endif; ?>
  </ul>
  <!--카테고리 리스트 출력끝-->
</section>


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
    'prev_text'   => __('<i class="fa-solid fa-circle-arrow-left"></i>'),
    'next_text'   => __('<i class="fa-solid fa-circle-arrow-right"></i>'), //모양 별로면 폰트어썸 사용하면 됨
  ));
  ?>
  <!--페이징출력끝-->

<?php include "sub-footer.php" ?>