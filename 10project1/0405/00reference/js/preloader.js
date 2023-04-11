$(`body`).css({ 'overflow': `hidden` })

$(window).load(function () {
  $(`.preloader .loader`).fadeOut(function () {
    $(`.preloader`).addClass('active')
    $(`body`).css({ 'overflow': `auto` })
    setTimeout(function () {
      $(`.preloader`).hide()
    }, 500)
  })
})

/* 바디나 이런것들 레디이벤트 안에 넣지 않아도 됨 */