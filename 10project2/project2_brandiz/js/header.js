$(function () {
  var reqID
  function fn() {
    if (scrT > 200) {
      $(`header`).addClass(`active`)
      TweenMax.to("header .line", 1, { morphSVG: "header .zigzag", ease: Linear.easeNone })
    } else {
      $(`header`).removeClass(`active`)
      TweenMax.to("header .line", 1, { morphSVG: "header .linecopy", ease: Linear.easeNone })
    }


    var scrRange = $(document).innerHeight() - winH
    var scrRatio = scrT / scrRange
    var dashoffset = -(1-scrRatio)  //ratio:dashoffset 0:-1 0.5:-0.5 `:-0
      $(`header .line`).css({ 'stroke-dashoffset': dashoffset })
    console.log(scrRatio);
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})