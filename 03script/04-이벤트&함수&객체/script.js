/* function 더하기(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1)+2
  var 숫자2 = parseInt(숫자2)+1
  var 결과 = 숫자1 + 숫자2
  여기서 값은 밑에서 5, 3값을 줬을때 8이아니고 11이라는거지
}//더하기함수
/* 결과의 숫자1, 2는 파라미터. 당신이 입력해주세요 */
/* var 숫자1을 붙이는순간 숫자1은 변수
그래서 먼저 변수를 찾아.근데 변수가 없으면 
그때 파라미터를 찾는거야 */

function 더하기(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1)
  var 숫자2 = parseInt(숫자2)
  var 결과 = 숫자1 + 숫자2
  /*  $('.ex1 .div1 .output').html(결과) */
  return 결과
}//더하기함수

function 곱하기(숫자1, 숫자2) {
  return 숫자1 * 숫자2
}//곱하기함수

function 빼기(숫자1, 숫자2) {
  return 숫자1 - 숫자2
}//빼기함수

function 나누기(숫자1, 숫자2) {
  return 숫자1 / 숫자2
}//나누기함수

/* 커스텀함수 */
$('.ex1 .div1 button').click(function () {
  var 숫자1 = $('.ex1 .div1 .num1').val()
  var 숫자2 = $('.ex1 .div1 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div1 .output').html(더하기결과 + ' ' + 곱하기결과)
})
/* 콜백함수 */
/* 숫자1, 2는 변수. 사용자가입력한걸 가져온값 */

$('.ex1 .div2 button').click(function () {
  var 숫자1 = $('.ex1 .div2 .num1').val()
  var 숫자2 = $('.ex1 .div2 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 빼기결과 = 빼기(숫자1, 숫자2)
  $('.ex1 .div2 .output').html(더하기결과 + ' ' + 빼기결과)
})

$('.ex1 .div3 button').click(function () {
  var 숫자1 = $('.ex1 .div3 .num1').val()
  var 숫자2 = $('.ex1 .div3 .num2').val()
  var 빼기결과 = 빼기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div3 .output').html(빼기결과 + ' ' + 곱하기결과)
})

$('.ex1 .div4 button').click(function () {
  var 숫자1 = $('.ex1 .div4 .num1').val()
  var 숫자2 = $('.ex1 .div4 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 나누기결과 = 나누기(숫자1, 숫자2)
  $('.ex1 .div4 .output').html(더하기결과 + ' ' + 나누기결과)
})

/* -------------------------- */

function 계산(수1, 수2) {
  var 수1 = parseInt(수1)
  var 수2 = parseInt(수2)
  var 더하기 = 수1 + 수2
  var 빼기 = 수1 - 수2
  var 곱하기 = 수1 * 수2
  var 나누기 = (수1 / 수2).toFixed(2)
  var 객체 = {
    더하기, /* = 더하기 : 더하기, */
    빼기, /* 빼기 : 빼기, */
    곱하기, /* 곱하기 : 곱하기, */
    나누기, /* 나누기 : 나누기, */
  }
  return 객체
}
/* 더하기는 저기 var에 선언한 더하기
객체의 더하기는 오브젝트의 키값 더하기 */


/* $('.ex2 .div1 button').click(function () {
  var 숫자1 = $('.ex2 .div1 .num1').val()
  var 숫자2 = $('.ex2 .div1 .num2').val()
  // var 객체 = 계산(숫자1, 숫자2)
  var { 더하기, 빼기, 곱하기, 나누기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div1 .output').html(객체.더하기 + ' ' + 객체.곱하기)
}) //click
 */

$('.ex2 .div1 button').click(function () {
  var 숫자1 = $('.ex2 .div1 .num1').val()
  var 숫자2 = $('.ex2 .div1 .num2').val()
  var { 더하기, 곱하기 } = 계산(숫자1, 숫자2) //구조분해할당
  $('.ex2 .div1 .output').html(더하기 + ' ' + 곱하기)
})

$('.ex2 .div2 button').click(function () {
  var 숫자1 = $('.ex2 .div2 .num1').val()
  var 숫자2 = $('.ex2 .div2 .num2').val()
  var { 더하기, 빼기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div2 .output').html(더하기 + ' ' + 빼기)
})

$('.ex2 .div3 button').click(function () {
  var 숫자1 = $('.ex2 .div3 .num1').val()
  var 숫자2 = $('.ex2 .div3 .num2').val()
  var { 빼기, 곱하기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div3 .output').html(빼기 + ' ' + 곱하기)
})

$('.ex2 .div4 button').click(function () {
  var 숫자1 = $('.ex2 .div4 .num1').val()
  var 숫자2 = $('.ex2 .div4 .num2').val()
  var { 더하기, 나누기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div4 .output').html(더하기 + ' ' + 나누기)
})

function 계산(수1, 수2) {
  var 수1 = parseInt(수1)
  var 수2 = parseInt(수2)
  var 더하기 = 수1 + 수2
  var 빼기 = 수1 - 수2
  var 곱하기 = 수1 * 수2
  var 나누기 = (수1 / 수2).toFixed(2)
  var 객체 = {
    더하기, /* = 더하기 : 더하기, */
    빼기, /* 빼기 : 빼기, */
    곱하기, /* 곱하기 : 곱하기, */
    나누기, /* 나누기 : 나누기, */
  }
  return 객체
}

function 점수(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1)
  var 숫자2 = parseInt(숫자2)
  var 총점 = 숫자1 + 숫자2
  var 평균 = (총점 / 2).toFixed(2)
  var 결과 = {
    총점,
    평균,
  }
  return 결과
}


$('.ex3 .div1 button').click(function () {
  var 국어 = $('.ex3 .div1 .num1').val()
  var 영어 = $('.ex3 .div1 .num2').val()
  var { 총점, 평균 } = 점수(국어, 영어)
  $('.ex3 .div1 .output').html(총점 + '  ' + 평균)
})

$('.ex3 .div2 button').click(function () {
  var 영어 = $('.ex3 .div2 .num2').val()
  var 수학 = $('.ex3 .div2 .num3').val()
  var { 총점, 평균 } = 점수(영어, 수학)
  $('.ex3 .div2 .output').html(총점 + '  ' + 평균)
})

/* function 점수(숫자1, 숫자2,) {
  var 국어 = parseInt(숫자1)
  var 영어 = parseInt(숫자2)
  var 수학 = parseInt(숫자3)
  var 총점1 = 국어 + 영어
  var 평균1 = (총점1 / 2).toFixed(2)
  var 총점2 = 영어 + 수학
  var 평균2 = (총점2 / 2).toFixed(2)
  var 결과 = {
    총점1,
    평균1,
    총점2,
    평균2,
  }
  return 결과
} */

function 가격() {
  /*     var 신발 = parseInt()
      var 가방 = parseInt(2000)
      var 모자 = parseInt(3000)
      var red = parseInt(100)
      var black = parseInt(200)
      var white = parseInt(300) */
  /*   var 상품 = parseInt($('.ex4 p:nth-of-type(2) input:checked').val())
    var 옵션 = parseInt($('.ex4 p:nth-of-type(3) input:checked').val())
    var 수량 = $('.ex4 .div1 .num').val()
    var 가격 = (상품 + 옵션) * 수량
    return 가격 */
  var 상품 = parseInt($('.ex4 p:nth-of-type(2) input:checked').val())
  var 옵션 = parseInt($('.ex4 p:nth-of-type(3) input:checked').val())
  var 수량 = $('.ex4 .div1 .num').val()
  var 가격 = (상품 + 옵션) * 수량
  return 가격


}

/* $('.ex4 .div1 button').click(function () {
  var 상품 = parseInt($('.ex4 p:nth-of-type(2) input:checked').val())
  var 옵션 = parseInt($('.ex4 p:nth-of-type(3) input:checked').val())
  var 수량 = $('.ex4 .div1 .num').val()
  var 가격 = (상품 + 옵션) * 수량
  $('.ex4 .div1 :last-child').html(가격)
}) */

$('.ex4 .div1 button').click(function () {
  var 상품 = parseInt($('.ex4 p:nth-of-type(2) input:checked').val())
  var 옵션 = parseInt($('.ex4 p:nth-of-type(3) input:checked').val())
  var 수량 = $('.ex4 .div1 .num').val()
  $('.ex4 .div1 :last-child').html(가격)
})