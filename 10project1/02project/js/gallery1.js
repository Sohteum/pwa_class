$(function () {
  hover_box(`.float_container li a figure`, `.float_container li a figure figcaption`)
  $(`.float_container li a`).viewbox()

  var reqID
  function fn1() {
    $(`.float_container li a figure`).each(function () {
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (offT - winH * 0.5 + elH * 0.5)) * 0.1
      if (meta > 10) { meta = 10 }
      if (meta < -10) { meta = -10 }

      $(this).children(`img`).css({ 'transform': `scale(1.3) translateY(${meta}%)` })
    })
  }
  fn1()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn1)
  }).resize(function () {
    reqID = requestAnimationFrame(fn1)
  })
})

