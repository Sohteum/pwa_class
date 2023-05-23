<?php include "sub-header.php" ?>


<h2 class="sub-title"><?php the_title(); ?></h2>


<p class="theme-guide">
  본 컨텐츠는 디자인 페이지로 제작되었으며,
  page-location.php 템플릿을 이용해 수정·편집하실 수 있습니다.
  <button><i class="fa-solid fa-circle-xmark"></i></button>
</p>

 
<div class="sub-desc"><?php echo category_description(); ?>
  <b>찾아오시는 길 안내입니다.</b> <br>
  여러분의 방문을 환영합니다.
</div>

<section class="page-section page-section-location"> 
<dl>
    <dt>오시는길</dt>
    <dd>부산광역시 해운대구 좌동 113-111</dd>
    <dt>전화번호</dt>
    <dd>070-7155-1979</dd>
    <dt>팩스번호</dt>
    <dd>02-2139-1142</dd>
  
</dl>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7596111337157!2d126.72094782637839!3d37.489998728512255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7c4f71ad1d8f%3A0x9196142a5fce5b8f!2z67aA7Y-J7Jet!5e0!3m2!1sko!2skr!4v1684207437742!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</section>

<?php include "sub-footer.php" ?>