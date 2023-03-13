$(function () {

  $(`.ex1 button`).click(function () {
    $(`.ex1 div`).css({ 'background': `red` })
  })
})

$(function () {
  $(`.ex2 button`).click(function () {
    /*     var bg = $(`.ex2 div`).text() //값이 네개니까 한번에 가져옴 그러니까 안됨
        $(`.ex2 div`).css({ 'background': bg }) */
    $(`.ex2 div`).each(function () {
      /*  console.log('r'); 로그찍어보면 네번 반복함 우르르르한번에해버려.한개씩말해야하니까 순서해당 하나씩 이라는 조건을 달아야함 이때 순서에 해당하는 엘리먼트도 역시 $(this)를 사용함 디스는 펑션안에서만 사용가능하지~~~~*/
      var bg = $(this).text()
      $(this).css({ 'background': bg })//문장이 아직 안끝났으니까 아직 첫번째야 끝나면 바로 두번째 시작......
    }) //div 개수만큼 반복되어 4번발생, 먼저 나온것부터 시작
  })
})

$(function () {
  $(`.ex3 button`).click(function () {
    $(`.ex3 div`).each(function () {//디브의 숫자만큼 반복하겠다
      var size = Math.floor(Math.random() * 41) + 30 //ceil올림 floor내림 
      $(this).css({
        'width': `${size}px`,
        'height': `${size}px`,
      })
    })
  })
})


$(function () {
  $(`.ex4 input`).not('.user').each(function () {
    var num = Math.floor(Math.random() * 10)
    $(this).val(num)
  })
  $(`.ex4 button`).click(function () {
    var sum = 0
    /* sum += parseInt($(`.ex4 .input:nth-of-type().val()) */
    $(`.ex4 input:not(.user)`).each(function () {
      sum += parseInt($(this).val())
    })
    var user = parseInt($(`.ex4 .user`).val())
    /*   if (sum === user) {
        $(`.ex4 .output`).text('정답')
      } else {
        $(`.ex4 .output`).text('오답')
      } */
    var result = (user === sum) ? `정답` : `오답`
    $(`.ex4 .output`).text(result)
  })
  //증감연산이 필요 
})

$(function () {
  $(`.ex5 button`).click(function () {
    var user = $(`.ex5 input:checked`).val()
    var result = (user === '1') ? '정답' : '오답'
    $(`.ex5 .output`).text(result)
  })
})

$(function () {
  $(`.ex6 button`).click(function () {
    //문제마다 한번씩 
    var num = 0
    $(`.ex6 div`).each(function () {
      // 각 문제안의 체크된 input이 정답인지 확인
      if ($(this).find(`input:checked`).val() === 'o')
        ++num
    })
    $(`.ex6 .output`).text(num)
  })
})


$(function () {
  $(`.ex7 button `).click(function () {
    $(`.ex7 div`).each(function (){
      var bg = $(this).attr(`data-bg`)
    $(this).parent().siblings(`box`).css({ 'background': bg })
  })
})

})




