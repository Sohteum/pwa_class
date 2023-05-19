<ul>
  <?php
  if (is_user_logged_in()) {  
    echo '<li><a href="';
    echo wp_logout_url(get_permalink());  
    echo '"><i class="fa-solid fa-arrow-up-right-from-square"></i> 로그아웃</a></li>';
    echo '<li><a href="';
    bloginfo('url');
    echo '/member/profile"><i class="fa-solid fa-id-card-clip"></i> 회원정보</a></li>';
  } else {  
    echo '<li><a href="';
    bloginfo('url');
    echo '/member/login"><i class="fa-solid fa-right-to-bracket"></i> 로그인</a></li>';
    echo '<li><a href="';
    bloginfo('url');
    echo '/member/register"><i class="fa-solid fa-door-open"></i> 회원가입</a></li>';
  }
  ?>
</ul>

