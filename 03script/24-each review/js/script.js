$(document).ready(function () {
  $(`.ex1 button`).click(function () {
    $(`.ex1 div`).css({ 'background': `none` })
    $(this).parent().siblings(`div`).each(function () {
      var bg = $(this).attr(`data-bg`)
      $(this).css({ 'background': bg })
    })
  })
})

/* $(`.ex1 button`).click(function(){
  $(`.ex1 div`).css({'background':`none`})
  $(this).parent().siblings(`div`).each(function(){
  var bg = $(this).attr('data-bg')
  $(this).css({'background':bg})
})
}) */


$(document).ready(function () {

  function setN() {
    $(`.ex2 span`).each(function () {
      var r = Math.floor(Math.random() * 10) //전부 다른값이 나와야하니까
      $(this).text(r)
    })//each안은 이벤트니까 이벤트 안의 디스는 찾을 수 잇음
  } setN()

  var point = 0
  $(`.ex2 button`).click(function () {
    var sum = 0

    $(`.ex2 span`).each(function () {
      sum += parseInt($(this).text())
    })//이 방법은 더하기랑 빼기만 가능

    var n = parseInt($(`.ex2 input`).val())
    var result
    /*     var result = (sum === n) ? '정답' : '오답' */

    if (sum === n) {
      result = '정답'
      ++point
      $(`.ex2 div`).css({ 'background': 'none' })
      $(`.ex2 input`).val('')
      setN()

    } else {
      result = '오답'
      $(`.ex2 div`).css({ 'background': 'pink' })
    }

    $(`.ex2 input`).focus()
    $(`.ex2 .output`).text(`${result}, ${point}`)
  })
})



/* $(`.ex2 span`).each(function(){
var n = parseInt(Math.floor(Math.random()*10))
$(this).text(n)
})
$(`.ex2 button`).click(function(){
var sum = 0
$(`.ex)
sum+= $(this).text()
if()
})
 */




$(document).ready(function () {
  $(`.ex3 .btn1`).click(function () {
    var point = 0
    $(`.ex3 div`).each(function () {
      var checked = $(this).find('input:checked').val()
      if (checked === '정답') {
        ++point
        $(this).find('.radios').css({ 'background': 'green' })
      } else {
        $(this).find('.radios').css({ 'background': 'pink' })
      }
      /* (checked === '1') ? ++point : 0 */
      /*  point += (checked === '정답')? 1:0 */
    })
    $(`.ex3 .output`).text(point)
  })
  $(`.ex3 .btn2`).click(function () {
    $(`.ex3 .output`).text('0')
    $(`.ex3 .radios`).css({ 'background': 'none' })
    $(`.ex3 input`).prop('checked', false)
  })
})


$(document).ready(function () {
  $(`.ex4 button`).click(function () {
    var 체크박스개수 = $(`.ex4 input`).size()
    var 정답수 = 0
    $(`.ex4 input`).each(function () {
      /*   체크가 되어있으면서 밸류가 o 또는 체크가 안되어있으면서 밸류가 x */
      var ox = $(this).val()
      var checked = $(this).prop('checked')
      if ((checked === true && ox === 'o') || (checked === false && ox === "x")) {
        정답수 += 1
      }
    })//여기까지는 몇개맞았는지 본거지
    /* 체크가 되어있으면 트루, 안되어있으면 ㅎ폴스 
정답의 개수가 체크박스 개수랑 일치하면 정답.만점이어야 정답*/
    var result = (정답수 === 체크박스개수) ? '정답' : '오답'
    $(`.ex4 .output`).text(result)
  })
  //체크가 돼있으면 정답인지 확인 체크가 안되어있으면반드시 오답인지확인 이 두개가 체크박스하나
})



$(document).ready(function () {
  $(`.ex5 .btn1`).click(function () {
    // 체크를 올바르게 다 하면 1점, 다맞으면 3점  

    var point = 0

    $(`.ex5 div`).each(function () {
      var 문제개수 = $(this).children(`input`).size()
      var 정답체크개수 = 0
      $(this).children(`input`).each(function () {
        var val = $(this).val()
        var checked = $(this).prop('checked')
        if ((checked === true && val === 'o')
          ||
          (checked === false && val === "x")
        ) { 정답체크개수 += 1 }
      })
      if (정답체크개수 === 문제개수) {
        ++point
        $(this).css({ 'background': 'green' })
      } else {
        $(this).css({ 'background': 'pink' })
      }
    })
    $(`.ex5 .output`).text(point)
  })
  $(`.ex5 .btn2`).click(function () {
    $(`.ex5 .output`).text('0')
    $(`.ex5 div`).css({ 'background': 'none' })
    $(`.ex5 input`).prop('checked', false)
  })

})



/* $(document).ready(function () {

  $(`.ex5 .btn1`).click(function () {

    var 총점 = 0

    $(`.ex5 div`).each(function () {//문제마다 한번씩 반복
      var 체크박스개수 = $(this).children('input').size()//체크박스개수
      var 정답체크개수 = 0

      $(this).children('input').each(function () { //한문제당 체크박스 한번씩 반복
        var 정답여부 = $(this).val()//인풋의 정답여부
        var 체크여부 = $(this).prop(`checked`)
        if ((정답여부 === 'o' && 체크여부 === true)
          ||
          (정답여부 === 'x' && 체크여부 === false)
        ) { 정답체크개수++ } //정답체크조사
      })

      if (정답체크개수 === 체크박스개수) {
        ++총점
        $(this).css({ 'background': 'green' })
      } else {
        $(this).css({ 'background': 'pink' })
      }
    })
    $(`.ex5 .output`).text(총점)

  })
  $(`.ex5 .btn2`).click(function () {
    $(`.ex5 .output`).text('0')
    $(`.ex5 p:first-child`).css({ 'background': 'none' })
    $(`.ex5 input`).prop('checked', false)
  })
}) */


/* $(document).ready(function () {

  function 체크정답숫자알아내기(el) {//체크박스each 하나를 헷갈리니까 꺼내서 쓰는거. 그러면 어떤each인지 분명해지니까.
    var 정답체크개수 = 0
    el.children('input').each(function () { //한문제당 체크박스 한번씩 반복
      var 정답여부 = $(this).val()//인풋의 정답여부
      var 체크여부 = $(this).prop(`checked`)
      if ((정답여부 === 'o' && 체크여부 === true)
        ||
        (정답여부 === 'x' && 체크여부 === false)
      ) { 정답체크개수++ } //정답체크조사
    })
    return 정답체크개수;
  }

  $(`.ex5 .btn1`).click(function () {

    var 총점 = 0

    $(`.ex5 div`).each(function () {//문제마다 한번씩 반복
      var 체크박스개수 = $(this).children('input').size()//체크박스개수
      var 정답체크개수 = 체크정답숫자알아내기($(this))

     //  $(this).children('input').each(function () { //한문제당 체크박스 한번씩 반복
     //   var 정답여부 = $(this).val()//인풋의 정답여부
      //   var 체크여부 = $(this).prop(`checked`)
      //   if ((정답여부 === 'o' && 체크여부 === true)
      //     ||
      //     (정답여부 === 'x' && 체크여부 === false)
      //   ) { 정답체크개수++ } //정답체크조사
      // }) 

      if (정답체크개수 === 체크박스개수) {
        ++총점
        $(this).css({ 'background': 'green' })
      } else {
        $(this).css({ 'background': 'pink' })
      }
    })
    $(`.ex5 .output`).text(총점)

  })
  $(`.ex5 .btn2`).click(function () {
    $(`.ex5 .output`).text('0')
    $(`.ex5 p:first-child`).css({ 'background': 'none' })
    $(`.ex5 input`).prop('checked', false)
  })
})
 */
