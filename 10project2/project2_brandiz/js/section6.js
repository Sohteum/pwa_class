$(function () {
  var reqID
  function fn() {
    var elT = $(`.section6 .contact`).offset().top - headerH
    var meta = 0 + (scrT - elT) * 0.7
    if (meta > 0) meta = 0
    $(`.section6 .car`).css({ 'transform': `translateX(${meta}px)` })
    
    
    // meta = 0 + (scrT - elT) * 0.2 //백그라운드포지션용
    // $(`.section6 .bg`).css({'transform':`scale(1.3) translateY(${meta}px)`})  스티키 안에서는 패럴랙스를 안쓰자.
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})
