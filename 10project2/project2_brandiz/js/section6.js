$(function () {
  var reqID
  function fn() {
    var elT = $(`.section6 .contact`).offset().top - headerH
    var meta = 0 + (scrT - elT) * 0.7
    if (meta > 0) meta = 0
    $(`.section6 .car`).css({ 'transform': `translateX(${meta}px)` })
    console.log(meta);
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})
