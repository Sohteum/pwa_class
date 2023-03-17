$(document).ready(function () {

  var url = location.href // 주소가 그리트면 그리트에 불을 켜줄거야.//주소중에 /뒤에 파일이름만 사용할것.
  //그리트라고 적으면 그리트1, 2, 3다걸림. 주소에 저게 있다.. 그럼 트루 아님 폴스
  var dep1
  var dep2
  if (url.match('/greet.php')) {
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
$(`.snb .menu${dep1}`).show()
$(`.snb .menu${dep1}-${dep2}`).addClass('active')
})