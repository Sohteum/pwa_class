$(document).ready(function () {
  /*   $('button').click(function(){
      alert()
    }) */

  function fn1(num1, num2) {
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var sum = num1 + num2
    var multi = num1 * num2
    var sub = num1 - num2
    var divi = (num1 / num2).toFixed(2)
    var obj = {
      sum,
      multi,
      sub,
      divi,
    }
    return obj
    //console.log(num1,num2);
  }//fn1

  $('.section1 .article1 button').click(function () {
    var num1 = $('.section1 .article1 .p1 input:checked').val()
    var num2 = $('.section1 .article1 .p2 input:checked').val()
    var obj = fn1(num1, num2)
    $('.section1 .article1 .output').text(`${obj.sum}, ${obj.multi}, ${obj.divi}, ${obj.sub}`)
  })

  $('.section1 .article2 button').click(function () {
    var num1 = $('.section1 .article2 .p1 input:checked').val()
    var num2 = $('.section1 .article2 .p2 input:checked').val()
    var { sum, sub, multi, divi } = fn1(num1, num2)
    $('.section1 .article2 .output').text(`${sum}, ${sub}, ${multi}, ${divi}`)
  })

  $('.ex2 input').bind('input', function () {
    var num1 = $('.ex2 .num1').val()
    var num2 = $('.ex2 .num2').val()
    var sum = parseInt(num1) + parseInt(num2)
    $('.ex2 b').text(sum)
  })



  function fn3() {
    var num1 = parseInt($('.ex3 .num').val())
    var num2 = parseInt($('.ex3 .radios input:checked').val())
    var num3 = parseInt($('.ex3 select').val())
    var sum = num1 + num2 + num3
    var sub = num1 - num2 - num3
    var multi = num1 * num2 * num3
    $('.ex3 .output').text(`${sum},${sub},${multi}`)
  }


  /* 여기서는 외부에서 임의값을 여기저기서 받는게 아니고 한군데서만 받으니까 파라미터 즉 매개변수가 필요없음.그래서 임의의 변수를 선언하지않고 그냥 저기 값을 써서 만든거 */

  $('.ex3 .num').bind('input', function () {
    fn3()
  })

  $('.ex3 .radios input, .ex3 select').change(function () {
    fn3()
  })

  /* ---------------------------------------------- */

  function fn() {
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var num3 = parseInt(num3)
    var sum1 = (num1 + num2) * num3
    var sum2 = (num1 + num2) * num3
    var sum3 = sum1 + sum2
    var result = {
      sum1,
      sum2,
    }
    $('.ex4 .prd2 .total').text(`${sum3}`)
    return result
  }


  $('.ex4 .prd1 input:checked, .ex4 .prd1 select').change(function () {
    var num1 = parseInt($('.ex4 .prd1 input:checked').val())
    var num2 = parseInt($('.ex4 .prd1 select').val())
    var num3 = parseInt($('.ex4 .prd1 .num').val())
    var sum1 = (num1 + num2) * num3

    $('.ex4 .prd1 .output').text(`${sum1}`)
    fn()
  })

  $('.ex4 .prd1 p .num').bind('input', function () {
    var num1 = parseInt($('.ex4 .prd1 .radios1 input:checked').val())
    var num2 = parseInt($('.ex4 .prd1 select').val())
    var num3 = parseInt($('.ex4 .prd1 .num').val())
    var sum1 = (num1 + num2) * num3

    $('.ex4 .prd1 .output').text(`${sum1}`)
    fn()
  })

  $('.ex4 .prd2 input:checked, .ex4 .prd2 select').change(function () {
    var num1 = parseInt($('.ex4 .prd2 input:checked').val())
    var num2 = parseInt($('.ex4 .prd2 select').val())
    var num3 = parseInt($('.ex4 .prd2 .num').val())
    var sum1 = (num1 + num2) * num3

    $('.ex4 .prd2 .output').text(`${sum1}`)
    fn()
  })

  $('.ex4 .prd2 p .num').bind('input', function () {
    var num1 = parseInt($('.ex4 .prd2 .radios2 input:checked').val())
    var num2 = parseInt($('.ex4 .prd2 select').val())
    var num3 = parseInt($('.ex4 .prd2 .num').val())
    var sum1 = (num1 + num2) * num3

    $('.ex4 .prd2 .output').text(`${sum1}`)
    fn()
  })






})//click