$(function () {
  var 위치 = 0
  var 클릭가능 = true //할거냐말거냐 결정하는거니까 가장 상단에와야함 클릭을 못하면 다 막아버려야됨
  var 이동거리 = 50
  $(`.ex1 button`).click(function () {
    if (클릭가능 === false) return false;
    /* if (클릭가능===true) 클릭가능 = false; */ //처음에는 트루로했고 그 결과 폴스로 만들어서 그 다음에는 폴스에 걸려서 클릭이 안됨 근데 하단은 트루일때만 실행되니까 어자피 안적어도되는것  
    클릭가능 = false; //한번만 클릭하게 만든것.(0.3초뒤에 이동끝나니까 그 후에 트루로 바꿔주면 됨)
    setTimeout(function () {
      클릭가능 = true
    }, 300)
    위치 += 이동거리 //쁠쁠도 하고 마이너스도 해야되니까 변수로 만들기
    if (위치 > 250) { 위치 = 200; 이동거리 = -50; }
    if (위치 < 0) { 위치 = 50; 이동거리 = +50; }
    $(`.ex1 .box`).css({ 'transform': `translateX(${위치}px)` })
    /* 위치가 왜 300임? 너비가 300이니까?*/
  })
})

$(function () {


  function fn1() {
    ++n
    if (n > 5) n = 1
    $(`.ex2 img`).hide()
    $(`.ex2 .img${n}`).show()
  }


  var n = 1
  var IntervalID = setInterval(function () {
    /*     ++n
        if (n > 5) n = 1
        $(`.ex2 img`).hide()
        $(`.ex2 .img${n}`).show() */
    fn1()
  }, 1000)

  $(`.ex2 .pause`).click(function () {
    clearInterval(IntervalID)
    $(`.ex2 .btns`).addClass('active')
  })

  $(`.ex2 .play`).click(function () {
    clearInterval(IntervalID)
    /* 인터벌 중첩이 되면 나이트클럽되니까 순서를 절대지켜!! */
    /* 여기서 var를 쓰면 스코프 문제가 생김 , 시작했을때 저 맨위에 없으면 바 인터벌 이렇게 만들어주는게 맞는데 여기는 있으니까 안만들어도됨.  */
    IntervalID = setInterval(function () { //여기 함수로 묶으면 또 스코프 문제 생김 이 아래부터 묶어야함
      /*     ++n
          if (n > 5) n = 1
          $(`.ex2 img`).hide()
          $(`.ex2 .img${n}`).show() */
      fn1()
      $(`.ex2 .btns`).removeClass('active')
    }, 1000)
  })
})

$(function () {
  var 목적지 = 0
  var 이동량 = 50
  var IntervalID
  $(`.ex3 .move`).click(function () {
    clearInterval(IntervalID)
    IntervalID = setInterval(function () {
      목적지 += 이동량
      if (목적지 > 250) { 목적지 = 200; 이동량 = -50; }
      if (목적지 < 0) { 목적지 = 50; 이동량 = +50; }
      $(`.ex3 .box`).css({ 'transform': `translate(${목적지}px)` })
    }, 300)
    $(`.ex3 .btns`).addClass(`active`)
  })
  $(`.ex3 .stop`).click(function () {
    clearInterval(IntervalID)
    $(`.ex3 .btns`).removeClass(`active`)
  })
})


$(function () {

  $(`.ex4 button`).click(function () {
    var num = parseInt($(`.ex4 input`).val())
    /* 1초마다 반복해서 숫자를 떨어뜨려 그리고 버튼은 한번 클릭하면 버튼이 사라지게 만들기(하이드명령어) */
    $(`.ex4 button`).hide()
    $(`.ex4 .output`).text(num) //사용자가 10부터 보는게 좋으니까 num밑이 아니고 여기 두자
    var IntervalID = setInterval(function () {
      --num
      if (num === 0) {
        clearInterval(IntervalID)
      }
      $(`.ex4 button`).show()
      $(`.ex4 .output`).text(num)
    }, 1000)
  })

})


$(function () {

  var IntervalID
  $(`.ex5 .start`).click(function () {
    $(`.ex5 .btns`).addClass(`active`)



    var num = 1
    $(`.ex5 .box${num}`).addClass(`active`)


    IntervalID = setInterval(function () {
      ++num
      if (num > 5) num = 1
      $(`.ex5 div`).removeClass(`active`)
      $(`.ex5 .box${num}`).addClass(`active`)
    }, 800)
  })

  $(`.ex5 .stop`).click(function () {
    clearInterval(IntervalID)
    $(`.ex5 div`).removeClass(`active`)
    $(`.ex5 .btns`).removeClass(`active`)
  })

})

/* $(function () {
  var n
  var intervalID
  $(`.ex5 .start`).click(function () {
    n = 0
    $(`.ex5 p`).addClass('active')
    clearInterval(intervalID)//시작마니해서 에러나서쓰는거잖아. 시작버튼이 없으니 필요없음
    intervalID = setInterval(function () {
      ++n
      if (n > 5) n = 1
      $(`.ex5 div`).removeClass('active')
      $(`.ex5 .box${n}`).addClass('active')
    }, 1000)
  })
  $(`.ex5 .stop`).click(function () {
    $(`.ex5 p`).removeClass('active')
    clearInterval(intervalID)
    $(`.ex5 div`).removeClass('active')
  })
})//ready ex5 */


