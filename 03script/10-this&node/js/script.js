$(function () {

  function func1(contN, el1, el2) {
    $(`.ex1 .cont${contN} div`).removeClass('active')
    el1.addClass('active')
    el2.addClass('active')
  }
  //컨트넘버, 프리브, 넥스트가다름

  $(`.ex1 .cont1 div`).click(function () {
    /*     $(`.ex1 .cont1 div`).removeClass('active')
        $(this).addClass('active')
        $(this).prev('div').addClass('active') */
    func1(1, $(this), $(this).prev('div'))
  })

  $(`.ex1 .cont2 div`).click(function () {
    /*     $(`.ex1 .cont2 div`).removeClass('active')
        $(this).addClass("active")
        $(this).next('div').addClass('active') */
    //여기서 next뒤에 div를 써주는게 좋음
    func1(2, $(this), $(this).next('div'))
  })

  $(`.ex1 .cont3 div`).click(function () {
    $(this).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })

  /////////////////////////////////////////////////////////

  function func2(el, contN, style) {
    var { css, init, active } = style
    console.log(css, init, active);
    $(`.ex2 .cont${contN} button`).css({ [css]: init })
    el.siblings('button').css({ [css]: active })
  }
  /*  객체 안에.이 들어가면 오류가남css({ style.css : style.default }) */
  /* 그래서 obj로 객체만든걸 구조분해하면됨 */

  $(`.ex2 .cont1 button`).click(function () {
    /*     $(`.ex2 .cont1 button`).css({ 'color': `#000` })
        $(this).siblings('button').css({ 'color': `red` }) */
    var obj = {
      css: 'color',
      init: '#000',
      active: 'red'
    }
    func2($(this), 1, obj)
  })

  $(`.ex2 .cont2 button`).click(function () {
    /*     $(`.ex2 .cont2 button`).css({ 'font-weight': `normal` })
        $(this).siblings('button').css({ 'font-weight': `bold` }) */
    var obj = {
      css: 'font-weight',
      init: 'normal',
      active: 'bold'
    }
    func2($(this), 2, obj)
  })



  $(`.ex3 button`).click(function () {
    $(`.ex3 button`).css({ 'color': '#000' })
    $(this).parent().siblings('article').children('button').css({ 'color': 'red' })
  })
  //우리부모님으로 올라가>부모의 형제를 찾고>그리고자식버튼(부모가 다르면형제못찾아)
  //부모는 무조건 하나니까 ()에 누굴 지정 안해도됨. 
  //부모의 형제를 모두찾으면 안적어도되겠지. 형제가 하나면 안적어도되겠지. 근데 몇명있으면 당연히 적어야지


    function fn3(el, obj) {
      var {css, init, active} = obj
      $(`.ex4 button`).css({ [css]: init })
      el.parent().siblings('article').children('button').css({ [css]: active })
    }
  
    $(`.ex4 button`).click(function () {
      var obj = {
        css: 'font-weight',
        init: 'normal',
        active: 'bold'
      }
      fn3($(this),obj)
    })
  


})



