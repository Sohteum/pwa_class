$(document).ready(function () {

  $(`.ex1 button`).click(function () {
    var num1_1 = $(`.ex1 .num1_1`).val()
    var num1_2 = $(`.ex1 .num1_2`).val()
    var num2_1 = $(`.ex1 .num2_1`).val()
    var num2_2 = $(`.ex1 .num2_2`).val()
    var num1 = parseInt(num1_1 + num1_2)
    var num2 = parseInt(num2_1 + num2_2)
    var oper = $(`.ex1 select option:selected`).text()
    var result
    //parseInt가 뒤에 문자를 뜯어버리니까 뒤에 문자 넣어도 값이 잘 나오는 오류가있음
    /* 그러니까 parseInt로싸지말고 그냥 1이랑 a를 가져와서 빼기를 해보는거지. 둘다 숫자면 잘 뺄거고 아니면 NaN이 나옴 */
    if (
      (!(num1_1 - num1_2) && (num1_1 - num1_2 !== 0)) //and,or둘다 섞였으니까 괄호 묶어줘야함
      ||
      (!(num2_1 - num2_2) && (num2_1 - num2_2 !== 0))
    ) {
      alert(`둘 다 숫자를 입력하세요`)
      return false;
    }
    //했는데, 여기서도 문제가 답이 0이 나왔을때 0도 false로 간주함
    /*  if (!num1_1 | !num1_2 | !num2_1 | !num2_2 ||) {
       alert(`입력오류`)
       return false;
     } 이제 이건 필요없음 위에서 이거 포함하니까*/
    /*     console.log(!num1_1); */
    /*     console.log(num2 , oper); */
    if (num2 === 0 && oper === '/') {
      alert('0으로는 나눌 수 없어요')
      return false;
    }

    if (oper === '+') {
      result = num1 + num2
    } else if (oper === '-') {
      result = num1 - num2
    } else if (oper === '*') {
      result = num1 * num2
    } else {
      result = (num1 / num2).toFixed(1)
    }
    $(`.ex1 .output`).text(result)
  })

  $(`.ex2 button`).click(function () {
    var n = parseInt($(`.ex2 input`).val())
    if (!n && n !== 0) {
      alert('숫자를 입력하세요')
      return false;
    }
    /* 
    var result
    if (n % 2 === 0 && n > 10) {
      result = '정답'
    }else {
      result='오답'
    } */

    var result = (n % 2 === 0 && n > 10) ? '정답' : '오답'
    $(`.ex2 .output`).text(result)
  })
  //0을 확인할것
  //조건이 두개이면서 값을 받아낼때는 삼항연산자를 사용하자!
  /* 일종의 계산식이라고 볼 수 있음 */

  /* ------------------------------------------------------- */
  var rnd = Math.ceil(Math.random() * 3)
  $(`.ex3 b`).text(rnd)

  $(`.ex3 button`).click(function () {
    var alpha = $(`.ex3 p input`).val()
/*     if(rnd === 1) {
      rnd='one'
    }else if(rnd=== 2) {
      rnd='two'
    } else {
      rnd='three'
    }
    var result = (rnd === alpha) ? `정답` : `오답`
    $(`.ex3 .output`).text(result) */
    var result = (
    (rnd===1&&alpha==='one')
    ||
    (rnd===2&&alpha==='two')
    ||
    (rnd===3&&alpha==='three')
  )? '정답':'오답'
  $(`.ex3 .output`).text(result)
  })

$(`.ex4 input`).click(function(){
/*var a = $(this).val(6)
 val() 안에 뭘 넣으면 내가 그 값으로 바꾸겠다는거야 그러면 안됨 */
var str = ($(this).val()==='o')? 'x':'o'
$(this).val(str)
})

$(`.ex4 button`).click(function() {
  $(this).toggleClass('active')
})







})