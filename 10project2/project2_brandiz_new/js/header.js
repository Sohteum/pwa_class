$(function () {
  var reqID
  function fn() {
    if (scrT > 200) {
      $(`header`).addClass(`active`)
      TweenMax.to("header .line1", 1, { morphSVG: "header .zigzag", ease: Linear.easeNone })
    } else {
      $(`header`).removeClass(`active`)
      TweenMax.to("header .line1", 1, { morphSVG: "header .line_copy", ease: Linear.easeNone })
    }

    var docH = $(document).innerHeight()
    var scrRange = docH - winH
    var scrRatio = scrT / scrRange

    $(`header .line1`).css({ 'stroke-dashoffset': `${1 - scrRatio}px` })
    console.log(scrRatio);
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})