$(document).ready(function () {
  var req
  function fn() {
    var scrTop = $(window).scrollTop()
    var winH = $(window).height()
    $(`li`).each(function () {
      var offTop = $(this).offset().top
      if (scrTop >= offTop - winH * 0.8) {
        $(this).addClass(`active`)
      } else {
        $(this).removeClass(`active`)
      }
    })
  }
  fn()

  $(window).scroll(function () {
    req = requestAnimationFrame(fn)
  }).resize(function () {
    req = requestAnimationFrame(fn)
  })
  /* 좌표의 기준점은 크기나 위치가 변하는 경우 잡을 수 없지 */




})