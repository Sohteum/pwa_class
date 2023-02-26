$(function () {
  // > < === !==  >= <= 이상, 이하

  /*   var n1 = Math.floor(Math.random() * 9)  //0.00001~ 4.99999
    $(`.ex1 .cont1 .num1`).text(n1)
    var n2 = Math.floor(Math.random() * 9)
    $(`.ex1 .cont1 .num2`).text(n2)
    var n3 = Math.floor(Math.random() * 9)
    $(`.ex1 .cont1 .num3`).text(n3) */

  /*   var n1 = Math.floor(Math.random() * 9)  //0.00001~ 4.99999
    $(`.ex1 .cont1 .num1`).text(n1)
    n1 = Math.floor(Math.random() * 9)
    $(`.ex1 .cont1 .num2`).text(n2)
    n1 = Math.floor(Math.random() * 9)
    $(`.ex1 .cont1 .num3`).text(n3) */

  /*   $(`.ex1 .cont1 .num1`).text(Math.floor(Math.random() * 9))
    $(`.ex1 .cont1 .num2`).text(Math.floor(Math.random() * 9))
    $(`.ex1 .cont1 .num3`).text(Math.floor(Math.random() * 9)) */

  function fnSetNum() {
    return Math.floor(Math.random() * 10)
  }

  function fnSetQuestion(contNum) {
    $(`.ex1 .cont${contNum} .num1`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num2`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num3`).text(fnSetNum())
  }

  fnSetQuestion(1)
  fnSetQuestion(2)
  /* 
    function fn1(el) {
      var n1 = parseInt(el.siblings('.num1').text())
      var n2 = parseInt(el.siblings('.num2').text())
      var n3 = parseInt(el.siblings('.num3').text())
      var input = parseInt(el.siblings('input').val())
      var oper = el.val()
      var calc = (oper === 'plus') ? n1 + n2 + n3 : n1 - n2 - n3 //두가지만 가능
      var cls = (input === calc) ? 'green' : 'red' // 삼항연산자 (조건)?참일때값:거짓일때값
      el.parent().removeClass('red green')
      el.parent().addClass(cls)
    } */

  function fn1(el) {
    var n1 = parseInt(el.siblings('.num1').text())
    var n2 = parseInt(el.siblings('.num2').text())
    var n3 = parseInt(el.siblings('.num3').text())
    var input = parseInt(el.siblings('input').val())
    var oper = el.val()
    var calc = (oper === 'plus') ? n1 + n2 + n3 : n1 - n2 - n3 //두가지만 가능
    var cls = (input === calc) ? 'green' : 'red'

    el.parent().removeClass('red green')
    el.parent().addClass(cls)
  }


  $(`.ex1 button`).click(function () {
    fn1($(this))
  })

})