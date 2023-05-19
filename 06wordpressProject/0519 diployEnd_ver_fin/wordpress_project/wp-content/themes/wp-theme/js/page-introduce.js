$(function () {
  var reqID

  function fn() {
    var offT
    var elH

    $(`.page-section-introduce li`).each(function () {
      offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
    
    $(`.page-section-introduce li figure`).each(function () {
      offT = $(this).offset().top
      elH = $(this).innerHeight()
      meta = 0 + (scrT - (offT - winH * 0.5 + elH * 0.5)) * 0.1
      if (meta > 10) { meta = 10 }
      if (meta < -10) { meta = -10 }
      $(this).children('img').css({ 'transform': `scale(1.3) translateY(${meta}%)` })
    })


  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})
