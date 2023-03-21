

$(function () {
  /*   $(`div`). */
  var reqID
  function fnMotion() {
    $(`ul li`).each(function () {
      var elH = $(this).innerHeight()
      var offT = $(this).offset().top
      var meta1 = 50 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.1
      var meta2 = 1 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.0025
      $(this).find(`img`).css({ 'border-radius': `${meta1}%` }) //%를 붙이니까 갑자기 된다고..?
      if (meta2 < 0) { meta = 0 }
      $(this).find(`img`).css({ 'transform': `scale(${meta2})` })
    })
  }
  fnMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnMotion)
  })
})
