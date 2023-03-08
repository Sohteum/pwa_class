/* 
증감연산은 초기값이 필요
초기값 선언위치가 중요
(어디서 선언하느냐에 따라 동작값이 달라짐) 
 
증감연산자
n+=2// n=n+2  //n이 2씩 증가함
n++ // n+=1 //n이 1 씩 증가함//  n을 넘겨주고 나서 1이 증가한다(리턴시값이안나옴)
++n // n+=1 //n이 1 씩 증가하는데 //1이 증가하고나서 1이 증가한다(이거쓰면됨) 
다른애한테 값을 넘겨줄때는 쁠쁠을 뒤에쓰면안됨

  */

$(function () {

  function fn(param) {
    n += param
    if (n > 5) { n = 5 }
    if (n < -5) { n = -5 }
    $(`.ex1 .output`).text(n)
  }

  var n = 1 //이 변수 하나로 둘이 같이 사용하는거
  $(`.ex1 .increase`).click(function () {
    /* ++n
    if (n > 5) {n = 5} //값을 여기서 안주고 맨밑줄에 쓰면 6이 출력됨.증감>검사>사용/사용하기전에 검사를 해야함
    $(`.ex1 .output`).text(n) */
    fn(1)
  })//기준점이 있어야 증가를 하니까 초기값이 반드시 필요하다
  // 변수선언은 항상 밖에서 해야함 왜냐면 1이 그냥 반복인거니까
  //안에서 변수선언을 해야할 때도 있기는 하지만 그 시점을 잘 찾아야함

  $(`.ex1 .decrease`).click(function () {
    /* --n
   if (n < -5) {n = -5} 
   $(`.ex1 .output`).text(n) */
    fn(-1)
  })

})
//변수 스코프처리 하려고 /var가 함수레벨 이니까
$(function () {
  var n = 1
  function fn1(param) {
    n += param
    if (n > 5) { n = 1 }
    if (n < 1) { n = 5 }
    $(`.ex2 .output`).text(n)
  }
  $(`.ex2 .increase`).click(function () {
    /*   ++n
      if(n>5) {n=1}
      $(`.ex2 .output`).text(n) */
    fn1(1)
  })
  $(`.ex2 .decrease`).click(function () {
    /*   --n
      if(n<1) {n=5}
      $(`.ex2 .output`).text(n) */
    fn1(-1)
  })
})


$(function () {

  var rdn
  /*   function fn1(num) {
      rdn = Math.floor(Math.random() * 10)
    $(`.ex3_1 .num1`).val(rdn)
        rdn = Math.floor(Math.random() * 10)
    $(`.ex3_1 .num2`).val(rdn)
    } */


  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_1 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_1 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_2 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_2 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_3 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_3 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_4 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_4 .num2`).val(rdn)
  /* 함수를 연산자에서 하나하고 점수계산에서 한번 해야지.
    점수가 하나 맞응ㄹ대마다 증감연산을 해주기 */

  var n = 0
  function fn2(param) {
    /*     var param = param */
    var user = parseInt($(`.ex3_${param} input:last-child`).val())
    var fst = parseInt($(`.ex3_${param} input:first-child`).val())
    var snd = parseInt($(`.ex3_${param} input:nth-child(2)`).val())
    var result
    console.log(fst, snd, user);
    if ((fst + snd) === user) {
      result = ++n
    }
    $(`.ex3 .output`).text(result)
  }

  $(`.ex3 button`).click(function () {
    /*    var user = parseInt($(`.ex3_1 input:last-child`).val())
       var fst = parseInt($(`.ex3_1 input:first-child`).val())
       var snd = parseInt($(`.ex3_1 input:nth-child(2)`).val())
       var result
       if ((fst + snd) === user) {
         result = ++n
       }
       $(`.ex3 .output`).text(result) */
    /*   user이 1번째인풋이랑 2번째인풋을 더한값이면 1점 */
    fn2(1)
    fn2(2)
    fn2(3)
    fn2(4)
  })

})
