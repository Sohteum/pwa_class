$(document).ready(function () {
  fnChange()//시작할때도 한번 세팅해줘야하니 레디이벤트할때 한번 또 넣어줌
  var raf
  function fnChange() {
    var scrTop = $(window).scrollTop()//문서가 스크롤바에의해 위로 올라간 거리(문서가 내려갈수록 증가)
    var scrleft = $(window).scrollLeft() //스크롤 좌측끝부터 스크롤한 거리 문서가 우측으로 갈수록 증가
    var winH = $(window).height() //윈도우안에서 높이
    var winW = $(window).width() //윈도우 안에서 너비


    $(`.banner1`).css({
      'top': `${scrTop}px`,
      'left': `${scrleft}px`,

    })
    $(`.banner2`).css({
      'top': `${scrTop}px`,
      'left': `${scrleft + winW * 0.5}px`,
      'transform': `translateX(-50%)`,
    })
    $(`.banner3`).css({
      'top': `${scrTop}px`,
      'left': `${scrleft + winW}px`,
      'transform': `translatex(-100%)`,
    })
    $(`.banner4`).css({
      'top': `${scrTop + winH * 0.5}px`,
      'left': `${scrleft + winW}px`,
      'transform': `translate(-100%, -50%)`,
    })
    $(`.banner5`).css({
      'top': `${scrTop + winH}px`,
      'left': `${scrleft + winW}px`,
      'transform': `translate(-100%, -100%)`,
    })
    $(`.banner6`).css({
      'top': `${scrTop + winH}px`,
      'left': `${scrleft + winW * 0.5}px`,
      'transform': `translate(-50% , -100% )`,
    })
    $(`.banner7`).css({
      'top': `${scrTop + winH}px`,
      'left': `${scrleft}px`,
      'transform': `translateY(-100% )`,
    })
    $(`.banner8`).css({
      'top': `${scrTop + winH * 0.5}px`,
      'left': `${scrleft}px`,
      'transform': `translateY(-50% )`,
    })
    $(`.banner9`).css({
      'top': `${scrTop + winH * 0.5}px`,
      'left': `${scrleft + winW * 0.5}px`,
      'transform': `translate(-50% , -50% )`,
    })//스크립트에서는 픽셀이랑 퍼센트를 더할 수 없음.그러니까 브라우저의 높이의 반절을 구하면 됨. */
  }

  $(window).scroll(function () {

    raf = requestAnimationFrame(fnChange)
    //     raf = requestAnimationFrame(fnChange) //시스템과부하방지 테크닉 
    // $(`.banner1`).css({ 'top': `${scrTop + winH*0.5}px` }) 
    //fixed처럼보임/여기서 +100을해주면 계속 웹브라우저의 top으로부터 떨어뜨려놓을 수 있음, 나누기보다 곱하기가 더 빠르고 소수점 문제가 적어서 선호함 
  }).resize(function () {
    raf = requestAnimationFrame(fnChange)
  })//스크롤하고난뒤 창사이즈를 바꾸면 가운데에있지않음.그래서 창크기를 바꿔도 그 위치에 있도록 하는 이벤트
})

/* 
$(document).ready(function () {
  fnChange()//시작할때도 한번 세팅해줘야하니 레디이벤트할때 한번 또 넣어줌
  var raf
  function fnChange() {
    var scrTop = $(window).scrollTop()//문서가 스크롤바에의해 위로 올라간 거리(문서가 내려갈수록 증가)
    var scrleft = $(window).scrollLeft() //스크롤 좌측끝부터 스크롤한 거리 문서가 우측으로 갈수록 증가
    var winH = $(window).height() //윈도우안에서 높이
    var winW = $(window).width() //윈도우 안에서 너비
    $(`.banner`).each(function () {
      var 넓이곱 = parseFloat($(this).attr(`data-넓이곱`))
      var 높이곱 = parseFloat($(this).attr(`data-높이곱`))
      $(this).css({ 'top': `${scrTop + winH * 높이곱}px`, 'left': `${scrleft + winW * 넓이곱}px` })
    })
  }
  //스크립트에서는 픽셀이랑 퍼센트를 더할 수 없음.그러니까 브라우저의 높이의 반절을 구하면 됨. 

  $(window).scroll(function () {
    raf = requestAnimationFrame(fnChange)
       
  }).resize(function () {
    raf = requestAnimationFrame(fnChange)
  })

})//each문 */







