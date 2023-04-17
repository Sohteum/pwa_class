$(function () {
  var reqID
  function fn() {
    var stickyStart = $(`.sticky_container`).offset().top
    var stickyEnd = stickyStart + $(`.sticky_container`).innerHeight() - winH
    var stickyRange = stickyEnd - stickyStart
    var stickyRatio = (scrT - stickyStart) / stickyRange
    if (stickyRatio < 0) stickyRatio = 0
    if (stickyRatio > 1) stickyRatio = 1
    console.log(stickyRatio);//여기는 스크롤이 계속 위아래가 더 움직이니까 0보다 작아지면 0 으로 만들어주고 1보다 커지면 1로 만들어줌
    //n = ratio : imgNum 0:1 , 1:36 -> parseInt(ratio*35)+1 //소수점나오니까 
    var n = parseInt(stickyRatio * 35) + 1
    $(`.car`).hide()
    $(`.car${n}`).show()

  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})