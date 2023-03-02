$(function () {

  $(`.ex1 button`).click(function () {
    var 번호 = $(this).text()
    $(`.ex1 .output`).text(번호)
  })


  $(`.ex2 button`).click(function () {
    var 번호 = $(this).val()
    $(`.ex2 .output`).text(번호)
  })

  $(`.ex3 div`).click(function () {
    $(`.ex3 div`).css({ 'background': 'none' })
    var bg = $(this).attr('data-bg')
    $(this).css({ 'background': bg })
  })

  $(`.ex4 div`).click(function () {
    $(`.ex4 div`).css({ 'background': 'none' })
    $(this).css({ 'background': 'red' })
  })
  $(`.ex5 div`).click(function () {
    $(`.ex5 div`).css({ 'background': 'none' })
    var bg = $(this).attr('data-bg')
    $(this).css({ 'background': bg })
  })
  $(`.ex6 button`).click(function () {
    $(`.ex6 div`).css({ 'background': 'none' })
    var num = $(this).val()
    $(`.ex6 .box${num}`).css({ 'background': 'red' })
  })
  $(`.ex7 button`).click(function () {
    $(`.ex7 div`).css({ 'background': 'none' })
    var num = $(this).attr('data-n')
    var bg = $(this).val()
    $(`.ex7 .box${num}`).css({ 'background': bg })
  })
  $(`.ex8 button`).click(function () {
    $(`.ex8 div`).css({ 'background': 'none' })
    var num = $(this).val()
    var bg = $(`.ex8 .box${num}`).attr('data-bg')
    $(`.ex8 .box${num}`).css({ 'background': bg })
  })






})