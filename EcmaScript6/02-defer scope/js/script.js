/* function fn() {
  var  a = 1
  // var는 함수레벨스코프라서 함수밖에서는 호출불가  
}

document.querySelector(`button`).addEventListener(`click`,function(){

  alert();
}) */



/* a=1;
window.a=1; */



/* var의 문제점
1.중복선언가능 : 똑같은 변수명으로 여러번 선언했을때 에러가 나지 않고 그대로 출력됨.
(let, const는 바로 에러뿅뿅) 
2. 호이스팅
브라우저가 var나 함수를 만났을때 변수나 함수를 첫순위. 최상단으로 이동시킴
너무 유연해서 오히려 코딩에 방해가 됨.
그래서 호이스팅의 오류를 줄이고자 let, const가 나옴 */

/* //이렇게 하면 출력이 안되어야 정상
console.log(a);
var  a = 1;
언디파인출력

//이게 바로 호이스팅 var를 사용하면 이런식으로 호이스팅됨
var  a 
console.log(a);
a = 1; */




/* let, const */

/* 1.let
- 블럭레벨스코프
- 호이스팅이 발생하지않음
- 동일한 이름의 변수 중복선언 불가능
- 선언한 값을 바꿀 수 있다. */

/* 1.const
- 블럭레벨스코프
- 호이스팅 발생하지않음
- 상수. 값을 변경할 수 없음, 객체(object)안에있는 key 의 value는 수정가능
- 동일한 이름으로 변수 중복선언불가 
- 반드시 초기값선언 : 빈 변수를 만들수 없음 언디파인을 강제로 넣어줘야함 */

var a = 1;
document.querySelector(`.ex1 .btn1`).addEventListener('click',function(){
var a = 2;
if(a===2){var a = 3;}
console.log(a);
/* var는 함수레벨스코프라서 조건문있는 var와 밖의 var가 같은a */
})

document.querySelector(`.ex1 .btn2`).addEventListener('click',function(){
console.log(a);// 클로져 : 내 안에 없으면 가까운 변수를 먼저 찾는다
})

let b = 1;
document.querySelector(`.ex2 .btn1`).addEventListener('click',function(){
let b = 2;
if(b===2){let b = 3;}
console.log(a);
/* let은 블럭(중괄호)레벨스코프라서 펑션안에 중괄호안에있는것만 찾음 */
})

document.querySelector(`.ex2 .btn2`).addEventListener('click',function(){
console.log(a);// 클로져 : 내 안에 없으면 가까운 변수를 먼저 찾는다
})

/* 면접예상질문
1. 함수레벨 블럭레벨
2. 호이스팅 발생여부
3. 중복이름 선언불가
4. 값의 변경여부 */


/* const 사람 = {
  이름 : '홍길동',
  나이: 24,
}
사람.이름='아무개'
// 여기서 사람을 바꿀수는 없음 하지만 사람의 이름을 바꾸는건 가능. 즉 객체(key)의 밸류를 바꾸는 것은 가능 
console.log(사람.이름); */