$(document).ready(function () {

  function fn(n, gender) {
    var prd_price = parseInt($(`.ex${n} .prd input:checked`).val())
    var option_price = parseInt($(`.ex${n} .option select`).val())
    var cnt = parseInt($(`.ex${n} .cnt input`).val())
    var price = (prd_price + option_price) * cnt
    $(`.ex${n} .output`).html(`${gender}성의류 : ${price}원`)
    return price
  }
  /* 여기서 ex1이랑 남성만 바꾸면 여자가 되니까 파라미터 두개만 받으면 됨. */
  /* 섹션 하나의 값을 구하는 함수^ */

  function total() {
    var price1 = fn(1, '남')
    var price2 = fn(2, '여')
    var total_price = price1 + price2
    $('.total').html(`총가격:${total_price}원`)
  }
  /* 중첩함수. 함수안에서 함수를 또 호출 */

  $('.ex1 .prd input, .ex1 .option select').change(function () {
    total()

  })
  $('.ex1 .cnt input').bind('input', function () {
    total()

  })


  $('.ex2 .prd input, .ex1 .option select').change(function () {
    total()
  })
  $('.ex2 .cnt input').bind('input', function () {

    total()
  })

  /* function fn(prd_price, option_price, cnt) {
    var num1 = parseInt(prd_price)
    var num2 = parseInt(option_price)
    var num3 = parseInt(cnt)
    var price = (num1 + num2) * num3
    $('.total').html(`총가격:${total_price}원`)
    return price
  }
 
  $('.ex1 .prd input, .ex1 .option select').change(function () {
    num1 = $('.ex1 .prd input:checked').val()
    num2 = $('.ex1 .option select').val()
    num3 = $('.ex1 .cnt input').val()
    var price = fn(num1, num2, num3)
    $('.ex1 .output').html(price)
  })
  $('.ex1 .cnt input').bind('input', function () {
    num1 = $('.ex1 .prd input:checked').val()
    num2 = $('.ex1 .option select').val()
    num3 = $('.ex1 .cnt input').val()
    var price = fn(num1, num2, num3)
    $('.ex1 .output').html(price)
  })
 
 
  $('.ex2 .prd input, .ex1 .option select').change(function () {
    num1 = $('.ex2 .prd input:checked').val()
    num2 = $('.ex2 .option select').val()
    num3 = $('.ex2 .cnt input').val()
    var price = fn(num1, num2, num3)
    $('.ex2 .output').html(price)
  })
  $('.ex2 .cnt input').bind('input', function () {
    num1 = $('.ex2 .prd input:checked').val()
    num2 = $('.ex2 .option select').val()
    num3 = $('.ex2 .cnt input').val()
    var price = fn(num1, num2, num3)
    $('.ex2 .output').html(price)
  }) */


})

$(function () {

})


