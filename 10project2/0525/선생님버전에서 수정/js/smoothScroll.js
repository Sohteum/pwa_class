{
  let scrollSpeed = 0
  let fnSmoothScroll = () => {
    if (isMobile) return false //모바일이면 가동 안 하겠다 반드시 해줘야 한다 안 그러면 핸드폰에서 스크롤이 안 된다
    
    /* $(window).scrollTop($(window).scrollTop + 10) 제이쿼리 쓰는 방법*/

    window.scrollTo({
      top : window.scrollY + scrollSpeed
    })
    scrollSpeed *= 0.9 //같은 말이다 scrollSpeed = scrollSpeed * 0.9 0에 수렴한다
    requestAnimationFrame(fnSmoothScroll) //무한반복하려고 재귀함수
  }

  fnSmoothScroll() 
  //이동구현


  /* 
    $('section,main').bind('mousewheel',function(e){
    e.preventDefault()
    scrollSpeed = e.originalEvent.wheelDelta / -120 * 10
    }) 
    //$('section,main') 범위를 다 적어야 한다 
  */

  let prevWheelDelta
  window.addEventListener('mousewheel',e=>{
    if(e.wheelDelta !== prevWheelDelta) scrollSpeed = 0
    
    e.preventDefault() //브라우저의 기본 휠 기능을 막아버림
    scrollSpeed += e.wheelDelta / -120 * 10

    prevWheelDelta = e.wheelDelta
  },{passive:false}) //마우스 휠 에러 이벤트 자체를 막는 것 제이쿼리는 안 된다


}