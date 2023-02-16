
$('.ex1 button').click(function () {
  var number1 = parseInt($('.ex1 .num1').val())
  var number2 = parseInt($('.ex1 .num2').val())
  var sum = number1 + number2
  alert(sum)
})

$('.ex2 button').click(function () {
  var number1 = parseInt($('.ex2 .num1').val())
  var number2 = parseInt($('.ex2 .num2').val())
  var sum = number1 + number2
  alert(sum)
})

$('.ex3 button').click(function () {
  var 상품가격 = $('.ex3 input:checked').val()
  var 상품개수 = $('.ex3 .cnt').val()
  var 총가격 = 상품가격 * 상품개수
  alert(총가격)
})

/* $('.ex4 button').click(function() {
  var 숫자1 = parseInt($('.ex4 .num1').val())
  var 숫자2 = parseInt($('.ex4 .num2').val())
  var 더하기 =  숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 = (숫자1 / 숫자2).toFixed(2)
  alert(숫자1+'+'+숫자2+'='+더하기+','+숫자1+'-'+숫자2+'='+빼기+','+숫자1+'*'+숫자2+'='+곱하기+','+숫자1+'/'+숫자2+'='+나누기)

  //console.log(숫자1, 숫자2);
}) */

$('.ex4 button').click(function () {
  var 숫자1 = parseInt($('.ex4 .num1').val())
  var 숫자2 = parseInt($('.ex4 .num2').val())
  사칙연산(숫자1, 숫자2)
})

$('.ex5 button').click(function () {
  var 숫자1 = parseInt($('.ex5 .num1').val())
  var 숫자2 = parseInt($('.ex5 .num2').val())
  사칙연산(숫자1, 숫자2)
})

function 사칙연산(a, b) {
  var 숫자1 = a
  var 숫자2 = b
  var 더하기 = 숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 = (숫자1 / 숫자2).toFixed(2)
  alert(숫자1 + '+' + 숫자2 + '=' + 더하기 + ',' + 숫자1 + '-' + 숫자2 + '=' + 빼기 + ',' + 숫자1 + '*' + 숫자2 + '=' + 곱하기 + ',' + 숫자1 + '/' + 숫자2 + '=' + 나누기)
}

/* function 청소(장소) {
  장소 쓸기
  장소 닦기
}
 */
/* function sum(a,b) {
  alert(a+b)
}
sum(1,2) */

/* function 여백한칸너비(a, b, c, d) {
  var 컨테이너너비 = a
  var 그리드의개수 = b
  var 그리드한칸너비 = c
  var 여백한칸너비 = d
  alert('('+컨테이너너비+'-'+그리드의개수+'*'+그리드한칸너비+')/('+그리드의개수+'-1)')
  //(1000-3*300)/(3-1)
  // (a-b*c)/(b-1)
  } */

  function 여백한칸너비(a, b, c) {
    var 컨테이너너비 = a
    var 그리드의개수 = b
    var 그리드한칸너비 = c
    var 여백한칸너비 = (컨테이너너비-그리드의개수*그리드한칸너비)/(그리드의개수-1)
    alert(여백한칸너비)
      }

  console.log(여백한칸너비);

  $('.ex6 button').click(function () {
    var a = parseInt($('.ex6 .num1').val())
    var b = parseInt($('.ex6 .num2').val())
    var c = parseInt($('.ex6 .num3').val())
    여백한칸너비(a, b, c)
  })

  $('.ex7 button').click(function () {
    var a = parseInt($('.ex7 .num1').val())
    var b = parseInt($('.ex7 .num2').val())
    var c = parseInt($('.ex7 .num3').val())
    여백한칸너비(a, b, c)
  })