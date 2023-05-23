$(function () {
  var reqID

  function fn() {
    var offT

    $(`.page-section-area p`).each(function () {
      offT = $(this).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })

      offT =  $(`.page-section-area figure`).offset().top
      if (scrT >= offT - winH * 0.8) {
        $(`.page-section-area figure`).addClass('active')
      } else {
        $(`.page-section-area figure`).removeClass('active')
      }


    // .page-section-area figure
    
 

  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})