

/* $(function () {

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
 */

$(function () {
  var reqID
  function fnHeaderMotion() {
    $(`li`).each(function () {
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var metaR = 50 + Math.abs(scrT - offT + winH * 0.5) * -0.1
      var metaS = 1 + Math.abs(scrT - offT * winH * 0.5) * -0.0025
      //border-radius /transition도 다이아
      /*       목적지+절대값(스크롤값-) */
      if (metsS < 0) { metaS = 0 }
      $(this).find(`figure`).css({
        'border-radius': `${metaR}%`,
        'transform': `scale(${metaS})`,

      })
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})
