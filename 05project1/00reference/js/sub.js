$(document).ready(function () {

  var url = location.href // 주소가 그리트면 그리트에 불을 켜줄거야.//주소중에 /뒤에 파일이름만 사용할것.
  //그리트라고 적으면 그리트1, 2, 3다걸림. 주소에 저게 있다.. 그럼 트루 아님 폴스
  var dep1
  var dep2
  if (url.match('/greet.php')) {
    dep1 = 1; dep2 = 1;
  } else if (url.match('/location.php')) {
    dep1 = 1; dep2 = 2;
  } else if (url.match('/video.php')) {
    dep1 = 1; dep2 = 3;
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

  /* $(`.sub_visual .visual${dep1}`).show()
  setTimeout(function(){
    $(`.sub_visual .visual${dep1}`).addClass('active')
  },1) 
   디스플레이를 블럭으로 바꿔서 보이게 함. 우리는 디스플레이 넌으로 숨김
  넌에서 쇼로 변한거임. 넌인상태에서는 트랜지션이 없는거랑 마찬가지. 
  적용자체가 안됨.
  쇼 상태를 만들어놓고 잠깐 있다가 액티브를 해야함. 
  넌에서 바로 쇼는 트랜지션 노노
  넌에서 쇼하고 좀있다가 트랜지션 오오
  그래서 셋타임아웃 사용 
  디스플레이 넌인상태에서는 트랜지션이 다 죽는다*/


  $(`.sub_visual .visual${dep1}`).fadeIn().addClass(`active`)
  /* 쇼를 여러번 반복하는거라서 페이드인은 가능
  바닐라는 페이드인이 없음 */

  var dep1Title = $(`.gnb.lg .menu${dep1} h6`).text() //여기서 메뉴라고 그냥 호출하면 사용된곳 네번을 다 찾게됨.그래서 하나만 찾아줘야함.
  var dep2Title = $(`.gnb.lg .menu${dep1}-${dep2}`).text()
  $(`.breadcrumb .dep1`).text(dep1Title)
  $(`.breadcrumb .dep2`).text(dep2Title)

$(`.site_guide button`).click(function(){
  $(`.site_guide`).slideUp()
})
})


