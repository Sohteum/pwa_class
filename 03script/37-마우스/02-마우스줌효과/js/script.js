$(function () {

  function fnZoom(pageX, pageY, container, largeimg) {
    largeimg.show()
    var offsetX = (pageX - container.offset().left) //문서기준의 마우스위치 - 문서지준의 요소위치
    var ratioX = offsetX / container.innerWidth() //요소기준의 마우스위치
    var moveRangeX = container.innerWidth() - largeimg.innerWidth() //큰 이미지의 이동범위
    var moveX = ratioX * moveRangeX

    var offsetY = (pageY - container.offset().top) //문서기준의 마우스위치 - 문서지준의 요소위치
    var ratioY = offsetY / container.innerWidth() //요소기준의 마우스위치
    var moveRangeY = container.innerWidth() - largeimg.innerWidth() //큰 이미지의 이동범위
    var moveY = ratioY * moveRangeY
    
    console.log(offsetX,ratioX);
    largeimg.css({left:`${moveX}px`, top:`${moveY}px`})
  }//fnZoom

  /* ---------------------------------------- */

  $(`.ex1 figure`).mousemove(function (e) {
    fnZoom(e.pageX, e.pageY, $(this), $(this).find('.large'))
    // console.log(e.pageX - $(this).offset().left); //브라우저기준 //페이지엑스는 도큐먼트기준
  })
  $(`.ex1 figure`).bind('touchmove', function (e) {
    fnZoom(
      e.originalEvent.touches[0].pageX,
      e.originalEvent.touches[0].pageY,
      $(this),
      $(this).find('.large')
    )
    // console.log(e.originalEvent.touches[0].pageX - $(this).offset().left);
  })

  $(`.ex1 figure`).mouseleave(function () {
    $(this).find('.large').hide()
  })
  $(`.ex1 figure`).bind('touched', function () {
    $(this).find('.large').hide()
  })

})

/* 
비율과 감가속도를 그릴줄 알아야함 공식을 암기할것
특정값으로 대입하는 공식

지금은 비율을 구해야함
특정 값에의해서 어떤 객체를 다른 값으로 적용하는것 이때는 무조건 비율
마우스의 좌표를 이용해서 이미지의 좌표를 바꾸는거 =>무조건 비율을 구하면 됨
여기서는 0일때 0이 나와야되고
0.5일때는 -100px이 나와야되고
1일때는 -200px이 나와야됨

마우스의 오프셋을 구한다(움직이는 동안 계속 변함. 마우스오프셋은 페이지엑스-오프셋)/마우스가 움직일 수 있는 최대거리(200박스크기)
이값을 가지고 비율* -200(큰 이미지가 움직일 수 있는 최대거리(박스최대이동치figure-img크기))
비율 * 제어량

*/

/*
   드레그스타트
   드레그무브
   드레그앤드
  모바일은 0번째터치스를 받아줘야함 
   */

/*
 피규어의 위치를 구한다 
겟바운딩클라리언트렉트와이
바닐라 브라우저면 클라이언트
제이쿼리 문서로할거면 페이지(페이지엑스 - offset)
 */