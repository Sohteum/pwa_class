$(document).ready(function () {

  $(`.ex1 .btn1`).click(function () {
    var n = 1
    var a = n++
    $(`.ex1 .output`).text(a)
    //n호출 먼저 하고 그다음에 증가. 1이먼저 들어가고 오른쪽이 2가됨. 그래서 1이나옴
  })

  $(`.ex1 .btn2`).click(function () {
    var n = 1
    var a = ++n
    $(`.ex1 .output`).text(a)
  })//증가를 한다음에 호출을 함 그니까 2

  function fn() {
    var n = 1
    return ++n
  }
  $(`.ex1 .btn3`).click(function () {

    $(`.ex1 .output`).text(fn())
  })//증가한 것을 실행할지 먼저 실행하고 증가할지가 다른것.

})
/* 호이스팅, 스코프, 증감연산자(초기값을 어디서 선언하는지=이벤트밖에서, 변수가 하나 필요함.) */
$(document).ready(function () {
  var n = 10 //화면에 나온거 참고해서 만들면 됨
  $(`.ex2 button`).click(function () {

    $(`.ex2 .output`).text(++n) //함수나 괄호안에넣을때도 ++n을 쓰자 증가는 되는데 비동기가 된것.
  })

})

$(document).ready(function () {
  var n = 1
  $(`.ex3 button`).click(function () {
    ++n
    if (n > 5) { n = 5 }
    $(`.ex3 .output`).text(n)
  })
})//
/* ----------------------------------------------------------------- */
$(document).ready(function () { //출력되는순간 문제를 내줘야하니까.

  /* ----문제제출------ */
  function fnSet(exNum) {
    var rand
    rand = Math.floor(Math.random() * 10)
    $(`.ex4_${exNum} .num1`).val(rand)
    rand = Math.floor(Math.random() * 10)
    $(`.ex4_${exNum} .num2`).val(rand)
  }
  fnSet(1)
  fnSet(2)
  /* 함수로 만들기위해 랜덤을 변수로 선언한다. 그다음 파라미터를 받아서 실행 */
  /* var rand 
  rand  = Math.floor(Math.random()*10)
  $(`.ex4_1 .num1`).val(rand)
  rand  = Math.floor(Math.random()*10)
  $(`.ex4_1 .num2`).val(rand) */

  /* ----점수체크------ */
  var point
  function fnCheck(exNum) {
    var num1 = parseInt($(`.ex4_${exNum} .num1`).val())
    var num2 = parseInt($(`.ex4_${exNum} .num2`).val())
    var num3 = parseInt($(`.ex4_${exNum} .num3`).val())
    if (num3 === num1 + num2) {
      point++
    }
  }

  $(`.ex4 button`).click(function () {
    point = 0
    /*   var point = 0 */ //여기서만 쓸수있는게 포인트. 펑션에는 포인트가 없어 그래서 저기선 point++이 안됨 그래서 함수 밖으로 다시 꺼냄
    /*  var num1 = parseInt($(`.ex4_1 .num1`).val())
     var num2 = parseInt($(`.ex4_1 .num2`).val())
     var num3 = parseInt($(`.ex4_1 .num3`).val())
     if (num3 === num1 + num2) {
       point ++
     } */
    fnCheck(1)
    fnCheck(2)
    $(`.ex4 .output`).text(point)
    //클릭할때마다 다시 증감해야하니까 초기값을 이벤트 안에 만들어야함
    //여기를 함수로 만들면 안됨. 결과는 한번만 출력하면됨. 근데 문제 수만큼 출력하게됨. 
  })

})



$(function () {

  function fnSet(exNum) {
    var rand
    rand = Math.floor(Math.random() * 10)
    $(`.ex5_${exNum} .num1`).val(rand)
    rand = Math.floor(Math.random() * 10)
    $(`.ex5_${exNum} .num2`).val(rand)
  }
  fnSet(1)
  fnSet(2)

  function fnCheck(exNum) {
    var num1 = parseInt($(`.ex5_${exNum} .num1`).val())
    var num2 = parseInt($(`.ex5_${exNum} .num2`).val())
    var num3 = parseInt($(`.ex5_${exNum} .num3`).val())
    var result = (num3 === num1 + num2) ? 1 : 0
    return result;
  }
  $(`.ex5 button`).click(function () {
    /* var result = fnCheck(1) + fnCheck(2) */
    result += fnCheck(1)
    result += fnCheck(2)
    /*     var num1 = parseInt($(`.ex5_1 .num1`).val())
        var num2 = parseInt($(`.ex5_1 .num2`).val())
        var num3 = parseInt($(`.ex5_1 .num3`).val())
        var result = (num3 === num1 + num2) ? 1 : 0 */
    $(`.ex5 .output`).text(result)
  })

})
/* ---------------------------------------------- */



$(function () {
  var n = 1

  function fnChange() {
    if (n > 5) { n = 1 }
    if (n < 1) { n = 5 }
    $(`.ex6 img`).hide()
    $(`.img${n}`).show()
    $(`.ex6 .indicator button`).removeClass(`active`)
    $(`.btn${n}`).addClass(`active`)
  }

  $(`.next`).click(function () {
    ++n
    fnChange()
    /*  if (n > 5) { n = 1 }
     $(`.ex6 img`).hide()
     $(`.img${n}`).show()
     $(`.ex6 .indicator button`).removeClass(`active`)
     $(`.btn${n}`).addClass(`active`) */
  })
  $(`.prev`).click(function () {
    --n
    fnChange()
    /*if (n < 1) { n = 5 }
     $(`.ex6 img`).hide()
    $(`.img${n}`).show()
    $(`.ex6 .indicator button`).removeClass(`active`)
    $(`.btn${n}`).addClass(`active`) */
  })

  $(`.indicator button`).click(function () {
    n = parseInt($(this).text())
    fnChange()
    /* $(`.ex6 img`).hide()
    $(`.img${n}`).show()
    $(`.ex6 .indicator button`).removeClass(`active`)
    $(`.btn${n}`).addClass(`active`) */
  })
  //여기서 n은 새로 변수를 만들면 안되고 저기 위에 n을 같이 쓰는거




})

$(function () {
  var n = 0
  $(`.ex7 button`).click(function () {
    var num = parseInt($(this).text())
    var result = n += num
    $(`.ex7 .output`).append(result)
  })

})
$(function () {
  var n = 1
  $(`.ex8 button`).click(function () {
    var a = (a + n)
    n += 1
    result = a

    $(`.ex8 .output`).append(result)

  })

})