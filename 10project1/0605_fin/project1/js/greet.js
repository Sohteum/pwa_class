
$(function () {
  var reqID
  function fnHeaderMotion() {
    $(`.greet_section img`).each(function () {
      var offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(this).addClass(`active`)
      } else { $(this).removeClass(`active`) }
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})