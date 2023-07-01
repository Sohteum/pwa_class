$(function () {
  $(`.fnb button`).click(function () {
    // $('.fnb > div > ul>li>ul').slideUp()
    // $(`.fnb > div > ul>li>a`).removeClass('active')

    $(`.fnb > div`).stop().slideToggle()
    $(this).toggleClass('active')
  })

  var reqID
  function fn() {
    $(`.fnb button`).resize(function () {
      $('.fnb > div > ul>li>ul').slideUp()
      $(`.fnb > div > ul>li>a`).removeClass('active')
    })
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })



})