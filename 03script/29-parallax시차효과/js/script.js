$(function () {
  var req
  function parallax() {
    var scr = $(window).scrollTop()
    var winH = $(window).height()
    var offTop = $(`.ex1`).offset().top
    var h = $(`.ex1`).innerHeight()
    var meta = 0 + ((scr) - (offTop - winH * 0.5 + h * 0.5)) * -0.8 //음수면 오른쪽에서 옮. 숫자가 클수록 빨리옴
    //내가 원하는 최종값(css) + (스크롤값-(스크롤목적지))* 속도 //스크롤이 목적지까지 됐을때 최종값이 나온다


    if (meta < 0) { //조건으로 0으로 막아줌.
      meta = 0
    }
    $(`.ex1 .car`).css({ 'transform': `translate(${meta}px)` })
  }
  parallax()
  $(window).scroll(function () {
    req = requestAnimationFrame(parallax)
  }).resize(function () {
    req = requestAnimationFrame(parallax)
  })
})


$(function () {
  var req
  function parallax() {
    var scr = $(window).scrollTop()
    var winH = $(window).height()
    var h = $(`.ex2`).innerHeight()
    var offTop = $(`.ex2`).offset().top
    /* 내가 원하는 값은 동그라미가 될려면 50%가되어야함. 나는 50이 되고싶다. 언제?언제를 괄호에적기 */
    /* 스크롤을 내릴수록 메타값이 커진다  */
    var meta = 50 + Math.abs(scr - (offTop - winH * 0.5 + h * 0.5)) * -0.1 //여기는 지금 역삼각형. 절대값구하기 Math.abs, 그리고 속도에 -를 넣어줌.
    $(`.ex2 `).css({ 'border-radius': `${meta}%` })
  }
  parallax()
  $(window).scroll(function () {
    req = requestAnimationFrame(parallax)
  }).resize(function () {
    req = requestAnimationFrame(parallax)
  })
})
// 내가 원하는 위치가 중앙리아고 생각했을때, 스크롤을 중앙까지 했다. 라고 했을때 이 값은 0 이나옴. 스크롤을 할수록 값이 커짐. (위로갈수록) 갈수록 커지니까 역삼각형모양이라는거지 크기로 대입했을때. 그런데. 여기서 동그라미가 됐다가 다시 사각형이 되고싶으면 다시 40 30 20 10이렇게 줄어들어야함. 원래는 계속 늘어나잖아. 그러면 크기로 대입을 하면 다이아몬드모양이 되어야함. 그럼 0이 제일작고 위아래가 다 마이너스인거지.위로갈수록 -, 아래로갈수록 - . 이걸 절대값으로 바꾸면 -를 다 빼는거. 그러면 여기서는 모래시계가 됨. 여기서 다이아몬드되려면 음수로 바꿔주는것. 
//스크롤이 목적지에 도달하면 무조건 괄호안이 0이됨. 

$(function () {
  var req
  function parallax() {
    var scr = $(window).scrollTop()
    var winH = $(window).height()
    var offTop = $(`.ex3`).offset().top
    var h = $(`.ex3`).innerHeight()
    var meta = 1 + Math.abs(scr - (offTop - winH * 0.5 + h * 0.5)) * -0.005 //변화량이 적으니까 아주 작은 속도를 넣어야함. 스케일, 오퍼시티가 대표적임.
    $(`.ex3 `).css({ 'opacity': meta })
  }
  parallax()
  $(window).scroll(function () {
    req = requestAnimationFrame(parallax)
  }).resize(function () {
    req = requestAnimationFrame(parallax)
  })
})
$(function () {
  var req
  function parallax() {
    var scrTop = $(window).scrollTop()
    var winH = $(window).height()
    $(`.ex4>div `).each(function () {
      var offTop = $(this).offset().top //여기서 offsettop이 항상 each마다 변하니까 함수 안으로 들어오는거야
      var h = $(this).innerHeight() // 여기서 네개의 이너하잇을 구하는거니까 얘도 함수 안으로 들어오는거야. 
      var meta = 1 + Math.abs(scrTop - (offTop - winH * 0.5 + h * 0.5)) * -0.002
        if (meta < 0) { meta = 0 }
        $(this).children('div').css({ 'transform': `scale(${meta})` })
      })
  }
  parallax()
  $(window).scroll(function () {
    req = requestAnimationFrame(parallax)
  }).resize(function () {
    req = requestAnimationFrame(parallax)
  })
})

/* 
$(function () {
  var req
  function parallax() {
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    $(`.ex4>div`).each(function () {
      var offTop = $(this).offset().top
      var h = $(this).innerHeight()
      var meta = 1 + Math.abs(scrTop - (offTop - winHeight * 0.5 + h * 0.5)) * -0.001
      if (meta < 0) { meta = 0 }
      $(this).children('div').css({ 'transform': `scale(${meta})` })
    })//each  .ex4>div
  }


  parallax()
  $(window).scroll(function () {
    req = requestAnimationFrame(parallax)
  }).resize(function () {
    req = requestAnimationFrame(parallax)
  })

})//ready ex4 */


