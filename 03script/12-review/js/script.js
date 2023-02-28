$(document).ready(function () {
  /* $(this) 여기서 디스는 다큐먼트인거지*/
  /* 변수 
  ※선언
  var, let, const  //scope, 변수를 사용할 범위 설정(scope)/var는 함수레벨스코프// 함수안에 var가 있어. 밖에서 찯으면 안에있는건 안나오지.같은이름이라도 안에서 찾으면 안에서 설정한 범위가 나오고,
  var a = 1   //변수를 선언/오른쪽의 값을 왼쪽에 집어넣는다.
  a <-를 적으면 a를 호출

var a 
console.log(a); ->언디파인 출력

※메소드
console.log ->콘솔로그는 ,로 이어붙이기 가능
alter ->,불가. 연산자랑 ''스트링이랑 같이 이어붙여야 가능. 만약 (1,2) 넣으면 1만 출력함
  var a = 5
  var b = 1
  alert(a+'더하기'+b+'은'+(a+b))

  
    var a = 5
    var b = 1
    var c = 6
    alert(a + ',' + b)
    alert(a + "더하기" + b + "은" + (a + b))
    alert(a + '+' + b + '=' + c)
    alert(a + '+' + b + '=' + c)

    바뀌는건 무조건 변수.따옴표 안에 있으면 안된다는 뜻 
    변수말고, -> +'' + 쁠쁠안에 ''따옴표안에 그 드래그가 들어오는거
    변수를 드래그 -> '+변수+'이렇게.맨 앞이랑 뒤는 그냥 밖으로 빼고 + 로 이어붙임


  ※숫자형변수
  a='1',
  a + 1 // '11' //문자와 숫자가 더해졌기때문
  a - 1 // 0 //근데 -,*,/는 또 해줌.자바스크립트가 너무 유연하기때문. 단점임. 그래서 타입스크립트 사용

  ※문자형변수
  var a = 'a1'
  var b = '1a'
  var a1 = '1'
  parseInt(a) -> NaN 숫자가아니다.//parseInt:정수로 바꾸는기능인데 글자가 앞에 있으면 못바꿈. 뒤에서만 가능. 뒤에서 뜯어내는것만 가능 => 스트링을 없애고 숫자 뒤에 붙어있는걸 떼어내는것
  (parseFloat은 문자가 소수점 포함해서 나오는것)
  parseInt(b) -> 1
  parseInt('a1') -> NaN
  console.log(parseInt(a1))  -> 1 변수를 넣은거
  console.log(parseInt('a1')) -> 문자열을 넣은거.NaN 
  변수와 문자열!!잘 구분하자. 스트링으로 싸져있으면 문자열,변수는 걍넣음!!
  
  a = 5
  b = 3
  console.log(5+'+3+')
  console.log(`${a}+${b}=8`)
  백틱 사용하는 문법을 탬플릿신텍스라고 함
  $('button')
  jQuery('button')

  ※객체
  변수에 여러개의 값을 담는것.찾기도 편함// 성이라는 하나의 키에 키값을 여러개 넣을수있잖아.
  var 홍길동 = {
    성:'홍',
    이름: '길동',
    나이: '23',
    성별 : '남',
  }
  var 아무개 = {
    성 : '무개',
  }

  console.log(홍길동.이름) //길동
  console.log(홍길동.성별) //남 ->이렇게 하면 홍길동을 계속 넣어서 호출해야하니까 구조분해함
  var {이름,성별} = 홍길동 ->구조분해
  console.log(이름)
  console.log(성별)

 ※ boolean형
  true, false 값만 가지는 변수
  var a = true

※배열(아직안배움)

  작성요령: '언제-이벤트,무엇을이용해서-셀렉터.객체나변수,어떤일을 할지'-명령어..css, addClass

※이벤트
  콜백함수. 클릭이 끝나고 할일
  이벤트만 적으면(=function을 안적으면)(=이벤트바인딩을 안하면) 페이지에서 바로 실행이됨. 
  click하고  function하기 위해서 

 ※이벤트바인딩
   $(`쿼리셀렉터`).click(function() { //콜백함수
    //할일
   }) 
  $(`쿼리셀렉터`).bind('click'function() { 
    할일
   })
    인풋, 마우스휠 등의 이벤트는 이렇게 작성 
    쿼리셀렉터. `.ex1 button`css선택자를 이용해 찾는거
    document.querySelector() 이게 css선택자를 이용하겠다는 뜻

   val.()에는 폼요소만 가능.input,button
   사용자가 입력할수있는 애들은 val을 안써도됨 사용자가 입력한 값이 value니까 
   +근데 초기값을 넣어주고싶다면 속성값에 value를 넣는다
   근데 셀렉터같은경우는 입력값이 없으니까 value를 내가 넣어줌
   사용자가 입력한 값은 무조건 문자. 계산하려면 나는 숫자가 필요하니 parseInt함

    폼요소 아닌애들은 val사용 못함
    html은 태그넣고싶을때 사용(<br>등??)
    아니면 text

   ※함수
    반복되는 코드를 리팩토링하는 목적(리팩토링.코드정리하는것)
    유사코드를 하나로 묶는다

    ※$(this)//event target
    이벤트를 줄이는 목적
    this 객체는 커스터마이징 함수 안에서는 사용불가. 콜백함수 안에서만 사용가능
    함수안으로 넘겨주기
    이벤트가 아얘 다르면 줄일수는 없음



  */

  function fn1(param) {
    var 첫번째수 = parseInt($('.ex1 article:' + param + '-child input:first-child').val())
    var 두번째수 = parseInt($(`.ex1 article:${param}-child input:last-of-type`).val())
    var 결과 = 첫번째수 + 두번째수
    $(`.ex1 article:${param}-child p`).text(결과)
  }
  //다르게 받아오는걸 인자 혹은 파라미터라고 함 

  $(`.ex1 article:first-child button`).click(function () {
    fn1('first')
  })
  /* 동네가 달라진걸 스코프처리했다. 한다고? 스코프가 변수를 사용할 범위를 지정하는거니까*/
  $(`.ex1 article:last-child button`).click(function () {
    fn1('last')
  })
  //이벤트(여기서는 클릭이벤트)는 한번에 여러개를 줘도 상관없음. 똑같이 이벤트줄수있음. 근데 값을 가져오는건 한놈만 찍어야됨.


  /*   $(`.ex1 article:first-child`).click(function () {
      var 첫번째수 = parseInt($(`.ex1 article:first-child input:first-child`).val())
      var 두번째수 = parseInt($(`.ex1 article:first-child input:last-of-type`).val())
      var 결과 = 첫번째수 + 두번째수
      $(`.ex1 article:first-child p`).text(결과)
    })
    /* 동네가 달라진걸 스코프처리했다. 한다고? 스코프가 변수를 사용할 범위를 지정하는거니까
    $(`.ex1 article:last-child`).click(function () {
      var 첫번째수 = parseInt($(`.ex1 article:last-child input:first-child`).val())
      var 두번째수 = parseInt($(`.ex1 article:last-child input:last-of-type`).val())
      var 결과 = 첫번째수 + 두번째수
      $(`.ex1 article:last-child p`).text(결과)
    })
    //이벤트(여기서는 클릭이벤트)는 한번에 여러개를 줘도 상관없음. 똑같이 이벤트줄수있음. 근데 값을 가져오는건 한놈만 찍어야됨.
    */

  function fn2(num) {
    var 성 = $(`.ex2 .div${num} .first-name`).val()
    var 이름 = $(`.ex2 .div${num} .last-name`).val()
    var 출력 = 성 + 이름
    $(`.ex2 .div${num} p`).text(출력)
  }

  $(`.ex2 .div1 button`).click(function () {
    fn2(1)
  })
  $(`.ex2 .div2 button`).click(function () {
    fn2(2)
  })


  // 입력되는 순간에도 바뀌고 클릭해도 바뀜

  function fn3(contN) {
    var 숫자1 = parseInt($(`.ex3 .cont${contN} .num1`).val())
    var 숫자2 = parseInt($(`.ex3 .cont${contN} .num2`).val())
    var 결과 = 숫자1 + 숫자2
    $(`.ex3 .cont${contN} p`).text(결과)
  }

  $(`.ex3 .cont1 button`).click(function () {
    /*     var 숫자1 = parseInt($(`.ex3 .cont1 .num1`).val())
        var 숫자2 = parseInt($(`.ex3 .cont1 .num2`).val())
        var 결과 = 숫자1 + 숫자2
        $(`.ex3 .cont1 p`).text(결과) */
    fn3(1)
  })

  $(`.ex3 .cont1 input`).bind('input', function () {
    /*     var 숫자1 = parseInt($(`.ex3 .cont1 .num1`).val())
        var 숫자2 = parseInt($(`.ex3 .cont1 .num2`).val())
        var 결과 = 숫자1 + 숫자2
        $(`.ex3 .cont1 p`).text(결과) */
    fn3(1)
  })

  $(`.ex3 .cont2 button`).click(function () {
    /*     var 숫자1 = parseInt($(`.ex3 .cont2 .num1`).val())
        var 숫자2 = parseInt($(`.ex3 .cont2 .num2`).val())
        var 결과 = 숫자1 + 숫자2
        $(`.ex3 .cont2 p`).text(결과) */
    fn3(2)
  })

  $(`.ex3 .cont2 input`).bind('input', function () {
    /*     var 숫자1 = parseInt($(`.ex3 .cont2 .num1`).val())
        var 숫자2 = parseInt($(`.ex3 .cont2 .num2`).val())
        var 결과 = 숫자1 + 숫자2
        $(`.ex3 .cont2 p`).text(결과) */
    fn3(2)
  })


  /*   function fn4(param) {
      var 번호 = param
      var 글자 = $(`.ex4 .cont${번호} input`).val()
      $(`.ex4 .cont${번호} p`).text(글자)
    }
  
  
    $(`.ex4 button`).click(function () {
      fn4($(this).val())
    })
    $(`.ex4 input`).bind('input', function () {
         var 입력하는번호 = $(this).attr('data-n')
         var 입력값 = $(`.ex4 .cont${입력하는번호} input`).val()
         $(`.ex4 .cont${입력하는번호} p`).text(입력값) 
      fn4($(this).attr('data-n'))
    })
     */


function fn3(param) {
  var num = param
  var 입력값 = $(`.ex4 .cont${num} input`).val()
  $(`.ex4 .cont${num} p`).text(입력값)
}


  $(`.ex4 button`).click(function () {
/*     var 번호 = $(this).val()
    var 입력값 = $(`.ex4 .cont${번호} input`).val()
    $(`.ex4 .cont${번호} p`).text(입력값) */
    fn3($(this).val())
  })

  $(`.ex4 input`).bind('input', function () {
    /* 번호를 인풋창에 입력하자마자 ? 값이 변함 */
/*     var num = $(this).attr('data-n')
    var 입력값 = $(`.ex4 .cont${num} input`).val()
    $(`.ex4 .cont${num} p`).text(입력값) */
    fn3($(this).attr('data-n'))
  })






})