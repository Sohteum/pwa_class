//스크롤을 목적지까지 하면 당연히 스크롤 위치와 같아져서 0이되는거지.
//스케일에서는 다이아몬드형에서 음수가 계속 늘어나면 아래로 가면서 뒤집혀서 점점커진다. 그래서 조건문을 꼭 써줘야 함.
//패럴랙스에서 사용하고있는 속성은 다른곳. 예를 들면 호버ㅏㄴ 이런곳에서는 사용할 수 없음. 백퍼 충돌남. 스케일을 지금 인라인스타일로 제어되고있어서(1순위)그래서 적용이 안됨. 만약에 임폴턴트를 넣으면 ㅇ원래크기의 1.2배니까 엄청커짐. 나는 작은 상태에서 호버했을때 사이즈가 1.2배 커지는걸 원함. 그럼 애들은 한번씩 싸준다.  그리고 원래 자식을 찾았는데 손자를 찾는걸로 바꿔줌. 그리고 새롭게 피규어에 호버를 하면 얘가 커지는걸로 하는거지

$(function () {
  var reqID
  function fnHeaderMotion() {
    console.log('tt')
    $(`.ex1 li`).each(function () {
      var elH = $(this).innerHeight()
      var offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
      var meta = 1+Math.abs(scrT-(offT-winH*0.5+elH*0.5))*-0.0005
      if(meta<0){meta=0}
      $(this).find(`img`).css({'transform':`scale(${meta})`})
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})

$(function () {
  var reqID
  function fnHeaderMotion() { 
$(`.ex2 li`).each(function(){
  var elH = $(this).innerHeight()
  var offT = $(this).offset().top
  var meta = 50 + Math.abs(scrT-(offT-winH*0.5+elH*0.5))* -0.1
  $(this).find(`img`).css({'border-radius':meta})
})
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})

