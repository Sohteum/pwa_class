$(function () {
  var reqID
  function fnHeaderMotion() {
    $(`.biz_intro_section>p, .biz_intro_section li`).each(function () {
      var offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) { $(this).addClass('active') }
      else { $(this).removeClass('active') }
    })
    $(` .biz_intro_section li div`).each(function () {
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      /* 패럴랙스는 이프문아님. 공식을 써야함. 천천히 올라가게할건데. 그말인즉슨 조금씩 내려가는거지. 트랜슬래잇이 증가하는거지. 그래프로하면 역삼각형인것.변화를 0에서 15퍼니까 속도를 작게잡기*/
      var meta = 0 + (scrT - (offT - winH * 0.5 + elH * 0.5)) * 0.05
      if (meta > 15) { meta = 15 }
      if (meta < -15) { meta = -15 }
      $(this).children(`img`).css({'transform':`scale(150%) translateY(${meta}%)`})
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})