$(function () {

  function fn1(el) {
    var 숫자 = el.val()
    var 알파벳 = el.attr('data-n')
    alert(`${숫자}, ${알파벳}`)
  }

  $('.ex1 button').click(function () {
    fn1($(this))
  })



  //  function fn2(el, con) {
  //    $(`.ex2 .con${con} button`).not(el).css({ 'color': 'black' })
  //    el.css({ 'color': 'red' })
  //  }

  //  $('.ex2 button').click(function () {
  //    var con = $(this).val()
  //    fn2($(this), con)
  //  }) 

  function fncol(el, con) {
    $(`.ex2 .con${con} button`).not($(this)).css({ 'color': `black` });
    el.css({ 'color': `red` });
  }


  $(`.ex2 .con1 button`).click(function () {
    var con = $(this).val()
    $(`.ex2 .con1 button`).not($(this)).css({ 'color': `black` });
    $(this).css({ 'color': `red` });
    fncol($(this), con)
  })
  $(`.ex2 .con2 button`).click(function () {
    var con = $(this).val()
    $(`.ex2 .con2 button`).not($(this)).css({ 'color': `black` });
    $(this).css({ 'color': `red` });
    fncol($(this), con)
  })



  function fn3(el) {
    var con = el.attr('data-con')
    el.css({ 'color': 'red' })
    $(`.ex3 .con${con} span`).not(el).css({ 'color': 'blue' })
  }

  $('.ex3 span').click(function () {
    fn3($(this))
  })

  ///////////////////////////////////////////////////////////////
  /* 
    function fn4(n, con, bg) {
      $(`.ex4 .con${con} .box${n}`).css({ 'background': bg })
      $(`.ex4 .con${con} div`).not($(`.box${n}`)).css({ 'background': 'none' })
    }
  
    $('.ex4 .con1 button').click(function () {
      var n = $(this).text() //클릭한버튼의 번호
      var bg = $(`.ex4 .con1 .box${n}`).attr('data-bg')
      var con = $(`.ex4 .con1`).attr('data-con')
      fn4(n, con, bg)
    })
  
    $('.ex4 .con2 button').click(function () {
      var n = $(this).val()
      var bg = $(`.ex4 .con2 .box${n}`).text()
      var con = $(`.ex4 .con2`).attr('data-con')
      fn4(n, con, bg)
    }) */


})


$(function () {

  function fn1(el) {
    var num = el.val()
    var en = el.attr(`data-n`)
    alert(`${num}, ${en}`)
  }

  $('.ex1 button').click(function () {
    /*     var num = $(this).val()
        var en = $(this).attr(`data-n`)  */
    fn1($(this))
  })



  function fn2(el, num) {
    $(`.ex2 .con${num} button`).not(el).css({ 'color': `black` })
    el.css({ 'color': `red` })
  }

  $(`.ex2  button`).click(function () {
    var num = $(this).val()
    /*     $(`.ex2  button`).not($(this)).css({ 'color': `black` })
       $(this).css({ 'color': `red` }) */
    fn2($(this), num)
  })



  function fn3(el, num) {
    var num = el.attr('data-con')
    $(`.ex3 .con${num} span`).not(el).css({ 'color': `blue` })
    el.css({ 'color': `red` })
  }
  $(`.ex3 span`).click(function () {
    /*   $(`.ex3 span`).not($(this)).css({ 'color': `black` })
      $(this).css({ 'color': `red` }) */
    fn3($(this))
  })


  function fn4(clickBtn, num, bg) {
    $(`.ex4 .con${num} .box${clickBtn}`).css({ 'background': bg })
    $(`.ex4 .con${num} div`).not($(`.box${clickBtn}`)).css({ 'background': `none` })
  }


  $(`.ex4 .con1 button`).click(function () {
    var clickBtn = $(this).text()
    var bg = $(`.ex4 .con1 .box${clickBtn}`).attr('data-bg')
    var num = $(`.ex4 .con1`).attr(`data-con`)

    fn4(clickBtn, num, bg)
  })


  $('.ex4 .con2 button').click(function () {
    var clickBtn = $(this).val()
    var bg = $(`.ex4 .con2 .box${clickBtn}`).text()
    var num = $(`.ex4 .con2`).attr('data-con')
    fn4(clickBtn, num, bg)
  })

})