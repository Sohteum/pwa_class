$(function () {
  //  > < === !==  >= <= 이상, 이하
  //     var a = Math.floor(Math.random() * 3 ) + 4 // 4-6구하려면 앞에선 0, 1, 2가 나오고 그 숫자에 4를 더해줌.->4-6은 3개 구하는거니까 앞에 3쓰고 4부터 구하니까 뒤에 4쓰면됨
  //   var a = Math.floor(Math.random() * 51 ) + 100 // 100-150 -> 100-150은 51개 구하는거니까 앞에 51쓰고 뒤에 100부터 구하니까 100쓰면됨


  //   var n1 = Math.floor(Math.random() * 9) 
  //   math.random은 소수점으로 나오니까 소수점 내림math.floor(반올림은 round/소수점버리고 정수값올림 ceil)
  //     $(`.ex1 .cont1 .num1`).text(n1)
  //     var n2 = Math.floor(Math.random() * 9)
  //     $(`.ex1 .cont1 .num2`).text(n2)
  //     var n3 = Math.floor(Math.random() * 9)
  //     $(`.ex1 .cont1 .num3`).text(n3) 

  //   var n1 = Math.floor(Math.random() * 9) 
  //     $(`.ex1 .cont1 .num1`).text(n1)
  //     n1 = Math.floor(Math.random() * 9)
  //     $(`.ex1 .cont1 .num2`).text(n1)
  //     n1 = Math.floor(Math.random() * 9)
  //     $(`.ex1 .cont1 .num3`).text(n1) 처음에만 변수선언하고 계속 갈아끼움 

  ///////////////////////////////////////////////////////////////////

  //    $(`.ex1 .cont1 .num1`).text(Math.floor(Math.random() * 9))
  //     $(`.ex1 .cont1 .num2`).text(Math.floor(Math.random() * 9))
  //     $(`.ex1 .cont1 .num3`).text(Math.floor(Math.random() * 9)) 식이 길어지면 너무 기니까 함수로 만들어보자

  function fnSetNum() {
    return Math.floor(Math.random() * 10)
  }

  function fnSetQuestion(contNum) {
    $(`.ex1 .cont${contNum} .num1`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num2`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num3`).text(fnSetNum())
  } //문제 수가 많으면 이 위에 세줄도 계속 써야되는거니까 아얘 함수로 만드는거야 그리고 컨테이너번호가 변하니까 인자값.파라미터로 컨테이너번호를 받아옴. 

  fnSetQuestion(1)
  fnSetQuestion(2)

  // function fn1(el) {
  //   var n1 = parseInt(el.siblings('.num1').text())
  //   var n2 = parseInt(el.siblings('.num2').text())
  //   var n3 = parseInt(el.siblings('.num3').text())
  //   var input = parseInt(el.siblings('input').val())
  //   var oper = el.val() //클릭한 버튼의 value = plus or minus
  //   var calc = (oper === 'plus') ? n1 + n2 + n3 : n1 - n2 - n3 //계산식 정하기(+,-)
  //   var cls = (input === calc) ? 'green' : 'red' // 삼항연산자 (class=cls)
  //   사용자가 입력한값이랑 계산값이랑 같으면 그린이 나오고 틀리면 레드가나옴
  //   el.parent().removeClass('red green')
  //   el.parent().addClass(cls)
  //   (조건)?참일때값:거짓일때값
  //   삼항연산자 : 비교연산자를 이용해서 값을 리턴하는거(비교연산자:true/false로 나오는거),두가지만 가능
  //   트루면 첫번째거, 폴스면 두번째거
  // } 

  function fn1(el) {
    var n1 = parseInt(el.siblings('.num1').text())
    var n2 = parseInt(el.siblings('.num2').text())
    var n3 = parseInt(el.siblings('.num3').text())
    var input = parseInt(el.siblings('input').val())
    var oper = el.val()
    var calc = (oper === 'plus') ? n1 + n2 + n3 : n1 - n2 - n3 //두가지만 가능
    var cls = (input === calc) ? 'green' : 'red'
    //////????????????????????????????????????????????????
    // 여기서 삼항연산자를 사용할때 누가 변하는지 적어줘야하는거아닌가?
    //this를 쓸때는 this만 써야하는지?

    el.parent().css({ "background": 'none' })
    el.parent().css({ 'background-color': cls })
  }


  $(`.ex1 button`).click(function () {
    fn1($(this))
  })
  //ex2
  //19세 이하는 뭘 입력하더라도 미성년자는 구입하실수없습니다. 메세지뜨게하기
  //나이가 19세 이상일시,선택하면 가격이 나옴


})

/* $(document).ready(function () {


  var num1 = $(`.ex1 .cont1 .num1`).text(Math.floor(Math.random() * 10))
  var num2 = $(`.ex1 .cont1 .num2`).text(Math.floor(Math.random() * 10))
  var num3 = $(`.ex1 .cont1 .num3`).text(Math.floor(Math.random() * 10))
  var sum = num1 + num2 + num3
  $(`.ex1 .cont1 button`).click(function () {
    var user = parseInt($(`.ex1 .cont1 input`).val())
      (sum === user) ? $(`.ex1 .cont1`).css({ 'background': `green` }) : $(`.ex1 .cont1`).css({ 'background': `pink` })

  })
  $(`.ex1 .cont2 .num1`).text(Math.floor(Math.random() * 10))
  $(`.ex1 .cont2 .num2`).text(Math.floor(Math.random() * 10))
  $(`.ex1 .cont2 .num3`).text(Math.floor(Math.random() * 10))
  $(`.ex1 .cont2 button`).click(function () {
    var user = parseInt($(`.ex1 .cont2 input`).val())
  })



}) */