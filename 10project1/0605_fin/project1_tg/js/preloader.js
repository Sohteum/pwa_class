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
