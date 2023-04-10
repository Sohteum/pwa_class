/* {
  document.querySelector(`.btns`).
} */


$(function () {
  $(`.btns button`).click(function () {

    $(`.cube`).removeClass(`front back top bottom left right`)
    $(`.cube`).addClass($(this).attr('class'))
  })
})