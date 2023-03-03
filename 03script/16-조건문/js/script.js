$(document).ready(function () {

  /*
  ◆ 비교연산자
   === 같다. !== 다르다 ><크다 작다 >= <= 이상, 이하
  -비교연산자 결과->무조건 불리언 값 반환 =>true, false, undefined, NaN
  
  -괄호로 묶으면 범위가 설정됨->(2===2)
  !(2===2)->결과값은 같은데 !()이렇게 괄호 앞에 !를 넣어서 반대로 뒤집는 연산가능

  ◆ 논리연산자 :비교연산자가 두개이상인경우 반드시 논리연산자로 이어붙임
  - &&(and,면서) : 모든 비교연산이 true일때 최종 true, 하나라도 false이면 최종false
  - ||(or, 또는) : 비교연산 중 하나라도 true이면 최종true
  

 ◆ 조건문(if문)
 -if(){} 참일때~~~~
 -if(){}else{}  참일때~~~아니면~~~~~
 -elseif(){}는 계속 이어붙일 수 있음. 끝낼땐 else로 끝냄 if뒤에는 항상 ()소괄호가 옴

 
 
   */

  console.log(1 < 2 && 2 > 1);

  /*   $(`.ex1`).submit(function(e){
      e.preventDefault()
      alert('전송됨')
    })
    엔터치면 자동으로 새로고침되면서 초기화가됨.
    초기화를 막기 위해서는 폼에 원래 있는 디폴트기능을 없애면 됨 
    콜백안에 넣는건 이벤트리스너
    함수안에 넣는건 파라미터*/

  /*   $(`.ex1`).submit(function (e) {
      e.preventDefault()
      var result 
      var n = parseInt($(`.ex1 input`).val())
      if (0 < n) {
        $(`.ex1 .output`).text('정답')
      } else {
        $(`.ex1 .output`).text('오답')
      }
    })//이렇게 쓰면 비효율적 */

  $(`.ex1`).submit(function (e) {
    e.preventDefault()
    var result
    var n = parseInt($(`.ex1 input`).val())
    if (0 < n) {
      result = "정답"
    } else {
      result = '오답'
    }
    $(`.ex1 .output`).text(result)
  })//이렇게 쓰면 비효율적

  /* 특정 조건에 따라 분기해야할때, 정답이라고 해주거나 틀렸다고 하거나 : 이 컨디션은 항상 if뒤에만 오고 else뒤에는 안옴-> if문 
  소괄호안에는 참이냐 거짓이냐를 넣어줌
  소괄호에 참을 넣으면 중괄호에있는게 실행이 됨
  */
  /* 먼저 값을 가져와서 양수인지. 0보다 큰지 봄 */


  $(`.ex2`).submit(function (e) {
    e.preventDefault()
    var n = $(`.ex2 input`).val()
    var result
    if (n === '1') {
      result = 'one'
    } else if (n === '2') {
      result = 'two'
    } else if (n === '3') {
      result = 'three'
    } else {
      alert('입력오류')
      return false
    }
    $(`.ex2 .output`).text(result)
  })
  /* 리턴을 하면 프로그램이 끝나. 오류가 생기면 끝내는게 좋음
  필요없을땐 꺼버려야함
   */


  $(`.ex3 button`).click(function () {
    var n = parseInt($(`.ex3 input`).val())
    if (!n) {   //if(!false)를 넣어줄수도 있다는건데 폴스의 반대는 트루잖아!!그러니까 트루값을 반환한다는거지.
      /*     (n===NaN,undefined) 여기서 n은 유효한 값일때의 반대. NaN도 아니고, undefined도 아닐때 ->즉 여기서는 유효한 값이 아닐때. 넌하고 언디파인은 폴스에 들어감.=폴스라면 실행하겠다. */
      /*   n이 정상이라면
        !n이 비정상이라면 */
      alert('숫자만 입력해주세요');
      return false;
    }
    var result
    if (3 <= n && n <= 7) {
      result = "정답"
    } else {
      result = "오답"
    }
    $(`.ex3 .output`).text(result)
  })

  $(`.ex4 input`).bind('input', function () {
    var n = parseInt($(`.ex4 input`).val())
    var result
    if (!n) {
      alert('숫자만 입력해주세요');
      return false;
    }
    if (n === 1 || n === 5 || n === 10 || n === 25) {
      result = '정답'
    } else {
      result = '오답'
    }
    $(`.ex4 .output`).text(result)
  })

  $(`.ex5 button`).click(function () {
    var n = parseInt($(`.ex5 input`).val())
    var result
    if (!n && n !== 0) {
      alert('숫자만 입력하세요');
      return false;
    }
    if ((n % 2) === 0 && 0!==n) {
      result = '정답'
    } else {
      result = '오답'
    }
    $(`.ex5 .output`).text(result)
    //0이 false로 간주됨. 오답이라고 나와야하잖아.
  })







})