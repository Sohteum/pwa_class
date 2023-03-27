
$(function () {
  var reqID
  function fnHeaderMotion() {
    $(`p , .greet_section img`).each(function () {
      var offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(this).addClass('active')
      }
      else { $(this).removeClass('active') }
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})



//스크롤모션은 조건을 보는거. css세팅하고조건을 봄
//패럴랙스는 css를 자세히 잡을 필요없엉. 오퍼시티 이런거