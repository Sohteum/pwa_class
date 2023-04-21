$(function () {
  $(`.ex4 button`).click(function () {
    let leng = parseInt($(this).val())
    // console.log(leng);
    $(`.ex4 .circle2`).css({ 'stroke-dashoffset': `${leng}px` })
  })


  var reqID
  function fnHeaderMotion() {
    var elTop = $(`.ex5`).offset().top
    if (scrT >= elTop - winH * 0.8) {
      $(`.ex5`).addClass('active')
    } else {
      $(`.ex5`).removeClass('active')
    }
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })

})//ready






