$(document).ready(function(){
var url = location.href
var dep1
var dep2

if(url.match('/greet.php')) {
  dep1 = 1; dep2 = 1;
  } else if (url.match('/location.php')) {
    dep1 = 1; dep2 = 2;
  } else if (url.match('/biz-intro.php')) {
    dep1 = 2; dep2 = 1;
  } else if (url.match('/biz-area.php')) {
    dep1 = 2; dep2 = 2;
  } else if (url.match('/gallery1.php')) {
    dep1 = 3; dep2 = 1;
  } else if (url.match('/contact.php')) {
    dep1 = 4; dep2 = 1;
  } else if (url.match('/notice.php')) {
    dep1 = 5; dep2 = 1;
  } else if (url.match('/FAQ.php')) {
    dep1 = 5; dep2 = 2;
  } else if (url.match('/freeboard.php')) {
    dep1 = 5; dep2 = 3;
  } else if (url.match('/signin.php')) {
    dep1 = 6; dep2 = 1;
  } else if (url.match('/signup.php')) {
    dep1 = 6; dep2 = 2;
  } else if (url.match('/member.php')) {
    dep1 = 6; dep2 = 3;
  }
$(`.nav_bar .menu${dep1}`).show()
$(`.nav_bar .menu${dep1}-${dep2}`).addClass('active')
})