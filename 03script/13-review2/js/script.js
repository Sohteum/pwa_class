$(document).ready(function () {


  function fn1(contN) {
    var num1 = parseInt($(`.ex1 .cont${contN} .num1`).val())
    var num2 = parseInt($(`.ex1 .cont${contN} .num2`).val())
    var sum = num1 + num2
    $(`.ex1 .cont${contN} p`).text(sum)
  }
  $(`.ex1 button`).click(function () {
    /*     var num1 = parseInt($(`.ex1 .cont1 .num1`).val())
        var num2 = parseInt($(`.ex1 .cont1 .num2`).val())
        var sum = num1 + num2
        $(`.ex1 .cont1 p`).text(sum) */
    /*     var n = $(this).val()
        fn1(n) */
    fn1($(this).val())
  })
  /*  $(`.ex1 .cont2 button`).click(function () {
      var num1 = parseInt($(`.ex1 .cont2 .num1`).val())
     var num2 = parseInt($(`.ex1 .cont2 .num2`).val())
     var sum = num1 + num2
     $(`.ex1 .cont2 p`).text(sum) 
     fn1(2)   })*/

  //여기서는 계속 똑같은건데 숫자만 다르게 해서 적어줘야하잖아?그러니까 디스를 이용하는거. 약속을 하려면 밸류를 써야함.값을 가져와야하니까.
  //디스는 겹치는 이벤트를 줄여줄 수 있음

  ///////////////////////////////////////////////////////////////////////

  /* function fn2(el) {
    var 번호 = el.parent().attr('data-cont')
    var 가격 = parseInt($(`.ex2 .cont${번호} input:checked`).val())
    var 수량 = parseInt($(`.ex2 .cont${번호} input[type=number]`).val())
    var 총가격 = 가격 * 수량
    $(`.ex2 .cont${번호} p`).text(`${총가격}원`)
  }

    $(`.ex2 input[type=radio] `).change(function () {
    //$(`.ex2 .cont1 input[type=radio]:checked `).val() 이건 값이 두개니까 에러야. 안됨.
    /*  var 번호 = $(this).parent().attr('data-cont')
     var 가격 = parseInt($(`.ex2 .cont${번호} input:checked`).val())
     var 수량 = parseInt($(`.ex2 .cont${번호} input[type=number]`).val())
     var 총가격 = 가격 * 수량
     $(`.ex2 .cont${번호} p`).text(총가격) 
    fn2($(this))
  })//클릭은 마우스이벤트만 받는거

  $(`.ex2 input[type=number]`).bind('input', function () {
      var 번호 = $(this).parent().attr('data-cont')
      var 가격 = parseInt($(`.ex2 .cont${번호} input:checked`).val())
      var 수량 = parseInt($(`.ex2 .cont${번호} input[type=number]`).val())
      var 총가격 = 가격 * 수량
      $(`.ex2 .cont${번호} p`).text(총가격) 
    fn2($(this))
  })
 */


  function fn2(el) {
    var contN = el.parent().attr('data-cont')
    var prd = parseInt($(`.ex2 .cont${contN} input:checked `).val())
    var cnt = parseInt($(`.ex2 .cont${contN} input[type=number]`).val())
    var sum = prd * cnt
    $(`.ex2 .cont${contN} p`).text(`${sum}원`)
  }

  $(`.ex2  input[type=radio] `).change(function () {
    /*     var contN = $(this).parent().attr('data-cont')
        var prd = parseInt($(`.ex2 .cont${contN} input:checked `).val())
        var cnt = parseInt($(`.ex2 .cont${contN} input[type=number]`).val())
        var sum = prd * cnt
        $(`.ex2 .cont${contN} p`).text(`${sum}원`) */
    fn2($(this))
  })
  $(`.ex2  input[type=number] `).bind('input', function () {
    /*     var contN = $(this).parent().attr('data-cont')
        var prd = parseInt($(`.ex2 .cont${contN} input:checked `).val())
        var cnt = parseInt($(`.ex2 .cont${contN} input[type=number]`).val())
        var sum = prd * cnt
        $(`.ex2 .cont${contN} p`).text(`${sum}원`) */
    fn2($(this))
  })

  $(`.ex3 div`).click(function () {
    $(`.ex3 div`).siblings('div').css({ 'background': 'none' })
    $(this).css({ 'background-color': `red` })
  })
  /* css도 제이쿼리 내장함수 얘는 객체를 파라미터로 받게되어있다 
  객체키값으로는 변수가 못들어옴 그래서 변수 쓰고싶으면[]사용.
  객체는 스크립트 문법 못씀 그래서 백틱도 안됨, 만약-쓰면 빼기가 됨. 그래서 ''사용*/
  /* 백그라운드컬러에는 넌값이 안들어감.  */
  /* 클릭한 애를 기준으로 부모를 찾고 다시 그 자식을 찾음. 그 디브 전체 찾고싶을때 */
  /* 시블링즈는 그 클릭한 애는 빼고 나머지를 선택하는거 */


  $(`.ex4 div`).click(function () {
    var col = $(this).attr('data-col')
    $(this).css({ 'background': col })
    $(this).siblings('div').css({ 'background': col })
  })

  $(`.ex4 button`).click(function () {
    var 번호 = $(this).text()
    $(`.ex4 .output`).text(번호)
  })

  $(`.ex5 button`).click(function () {
    var 번호 = $(this).val()
    $(`.ex5 .output`).text(번호)
  })

  $(`.ex6 div`).click(function () {
    //클릭한 div의 data-col2속성에 기록된 색을 알아낸다.
    var bg = $(this).attr('data-bg')
    $(`.ex6 .output`).text(bg)
  })

  $(`.ex7 div`).click(function () {
    // 모든 div 초기색상으로 변경
    $(`.ex7 div`).css({ 'background': `none` })
    // 클릭한 디브의 css속성의 배경을 레드로 변경
    $(this).css(({ 'background': `red` }))
  })

  $(`.ex8 div`).click(function () {
    //몾든 div를 원래색으로 초기화
    $(`.ex8 div`).css({ 'background': `none` })
    //클릭한 div의 data-bg의 속성값을 가져온다.
    var bg = $(this).attr('data-bg')
    //가져온 속성으로 배경색을 바꾼다.
    $(this).css({ 'background': bg })
  })


  $(`.ex9 button`).click(function () {
    //모든 div를 원래색으로 초기화
    $(`.ex9 div`).css({ 'background': `none` })
    //클릭한 버튼의 번호를 value속성에서 알아낸다
    var num = $(this).val()
    //번호에 해당하는 박스를 찾는다.
    $(`.ex9 .box${num}`).css({ 'background': `red` })
  })

  // 4~11

  $(`.ex10 button`).click(function () {
    $(`.ex10 div`).css({ 'background': 'none' })
    var num = $(this).attr('data-n')
    var bg = $(this).val()
    $(`.ex10 .box${num}`).css({ 'background': bg })
  })

  $(`.ex11 button`).click(function () {
    $(`.ex11 div`).css({ 'background': 'none' })
    var num = $(this).val()
    var bg = $(`.ex11 .box${num}`).attr('data-bg')
    $(`.ex11 .box${num}`).css({ 'background': bg })
  })

  $(`.ex12 input`).bind('input', function () {
    var 입력값 = $(this).val()
    /*   $(this).parent().siblings('article').child('input').text(입력값) */
    $(this).siblings('.output').text(입력값)
  })

  /* $(`.ex13 input`).click(function(){
    $(`.ex13 div`).css({'background':'none'})
    var num = $(this).val()
    var bg = $(`.ex13 .box${num}`).attr('data-bg')
    $(this).siblings(`div.box${num}`).css({'background':bg})
  }) */
  // 출력해야하는 창이 똑같이 두개가 있을때 siblings를 이용하자!


  $(`.ex13 input`).click(function () {
    $(`.ex13 div`).css({ 'background': 'none' })
    var num = $(this).val()
    var bg = $(`.ex13 .box${num}`).attr('data-bg')
    $(this).siblings(`div.box${num}`).css({ 'background': bg })
  })


})