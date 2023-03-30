
$(function () {

  /*  hover_box(`.flex_container li a figure`, `.flex_container li a figure figcaption`)
   $(`.felx_container li a`).viewbox()
  */
  var reqID
  function fnHeaderMotion() {
    $(`.flex_container li`).each(function () {
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 1 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.0005
      if (meta < 0) { meta = 0 }
      $(this).children(`a`).css({ 'transform': `scale(${meta})` })
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})