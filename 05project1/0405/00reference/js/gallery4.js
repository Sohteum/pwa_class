
$(function(){
  //레디이벤트는 글자가 있네. 이것만 읽어주는것.

  //동영상이나 출력되는 소스의 로딩이 완료된 시점
  $(window).load(function(){
    $(`.masonry_container`).masonry({itemSelector:`.masonry_container li`})
    //로드이벤트는 레디이벤트 안에 넣어줘도 됨. 거꾸로는 의미 없고.
    //안에서 쓰면좋은게 함수레벨스코프니까 이런식으로 사용하기도 함
  })
})


//컨테이너 안에 있는 벽돌을 골라준다.
  // 스크롤모션, 패럴렉스 메이져니 할때는 못써
  //컨쉬알누르면 다 깨짐 얘는 높이를 알아야 이걸 만들어줄 수 있는데 아직 다운로드가 아직 안된 시점에서는 높이를 모름. 그래서 메이져니는 로딩이 완료된 시점에서 불러줘야함

