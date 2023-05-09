
{
  let scrollSpeed = 0 //계속 0 으로 리셋하면 안되니까 여기 적어야함 그래서 이 값을 어떻게 바꾸느냐?휠이엔진임. 아래로 갈때는 아래로 더 밟고, 위로갈때는 뒤로 더 밟는거지.모바일에서는 절대 적용하면 안됨. 휠이 없을뿐더러 자체적으로 이미 스크롤 기능이 있음 적용하면 충돌되어서 움직이지 않음

  const fnSmoothScroll = () => {
    if (isMobile) return false //반드시 해줘야함

    /* 제이쿼리문법
     //$(window).scrollTop($(window).scrollTop() +10)
    //스크롤위치를 현재위치의 10더한값으로 바꾸시오
    //이벤트리스너때문에 제이쿼리로는 안하는게 나음   */

    window.scrollTo({
      top: window.scrollY + scrollSpeed
    })
    //점점 반복해서 속도를 줄여야하니까 여기서 하기
    // scrollSpeed =scrollSpeed*0.95
    scrollSpeed *= 0.9
    requestAnimationFrame(fnSmoothScroll)
  }
  fnSmoothScroll()

  /* 제이쿼리문법
  $('main,section').bind('mousewheel', function(e){
    e.preventDefault()
    scrollSpeed = e.originalEvent.wheelDelta / -120 * 10
  })
  //중요한 애들 다 나열을 해줌. 그리고 막아줌*/

  let prevWheelDelta

  window.addEventListener('mousewheel', e => {
    if (e.wheelDelta !== prevWheelDelta) scrollSpeed = 0 
    //지금 휠값!==아까휠값 
    e.preventDefault() //브라우저의 마우스 휠기능을 죽임
    scrollSpeed += e.wheelDelta / -120 * 40
    
    prevWheelDelta = e.WheelDelta //120현재휠값 일단저장. 다음에 휠하면 이거랑 저거랑 비교할려고

  }, { passive: false }) //제이쿼리는 이게 안됨. 그래서 위처럼 해야함
}
//이 함수를 실행하면 본인을 실행한다. 재귀함수.무한반복시킬려고 만드는 함수
// 리퀘스트애니메이션프레임을 이럴대 스는거지. 그러면 알아서 조절이 됨
//휠을 돌릴때 속도가 증가하고싶다면? 속도+=10
//가속도를 좀 없애고싶다면?탄성을 줄이고싶다면 속도를 0으로 바꿈.앞뒤로 방향이 바뀔때