$(function () {
  /* wave */
  $(window).load(function () { ///메이져니 프리로더 
    var wave1 = new displacmentWave(
      '.section1 .bg img', //대상
      '#ripple-filter1', //
      './img/ripple/ripple.png', //이미지경로
      4, 4)
    setInterval(function () {
      wave1.wave()
    }, 6000)
  })//load



  /* scroll  motion */


  function fn() {
    var reqID
    var offT
    var meta
    offT = $(`.section2`).offset().top
    if (scrT > offT - winH * 0.5) {
      $(`.section1`).removeClass('active')
    } else {
      $(`.section1`).addClass('active')
    }
    offT = $(`.section1`).offset().top
    meta = 0 + (scrT - offT) * 0.3 //역삼각형//여기서 offt는 이미 0 이지만 걍 써줌
    $(`.section1 .boy`).css({ 'transform': `translateY(${meta}px)` })

    meta = 1 + (scrT - offT) * 0.001
    $(`.section1 .bg`).css({ 'transform': `scale(${meta})` })

    meta = 0 + (scrT - offT) * 0.02
    $(`.section1 .bg`).css({ 'filter': `blur(${meta}px)` })
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


})//ready