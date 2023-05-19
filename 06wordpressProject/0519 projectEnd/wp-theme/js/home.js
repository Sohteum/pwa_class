$(function () {
  carousel3d(".carousel", 2000, 1000)
  var flipBook1 = new flipBook('.flip-book1')

  $('.home-section3 .bg').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.01,
  });


  var reqID
  function fn() {
    var offT = $('.flip-book1').offset().top
    if (scrT >= offT - winH * 0.3) {
      flipBook1.flip(2)
    } else {
      flipBook1.flip(1)
    }

  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

})