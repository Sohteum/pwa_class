$(function () {
  var reqID
  function fnScrollMotion() {
    var scrT = $(window).scrollTop()
    var winH = $(window).height()
    var ex1Y = $(`.ex1`).offset().top
    var ex2Top = $(`.ex2`).offset().top
    /* ex1 */
    if (scrT >= ex1Y - winH * 0.5) {
      $(`.ex1`).addClass('active')
    } else {
      $(`.ex1`).removeClass('active')
    }// 실ㅈㅔ앱만들때는 먼저 변한 모양 액티브된 모양을 먼저 만들어놓음 css에서 모션부분은 따로 만들어놓고 나중에 액티브를 추가하는거지
    /* ex2 */
    if (scrT >= ex2Top) {
      $(`.ex2`).addClass('active')
    } else {
      $(`.ex2`).removeClass('active')
    }//오프셋이 변하는 상황은 절대 적용못함. 지금 크기가 작아지면서 오프셋 값이 변해서 다시 커지다가 다시 닿으면서 작아지다가 또 커지다가 하면서 버벅임. 즉, 스크롤이랑 비교하는 대상은 무조건 고정적인 위치여야함. 그래서 기준대상은 두고 그 안에 집어넣으면 됨. 둘이 비교를 하고싶다면 둘다 기준점이 변하면 안되지(크기가 변하는 애들 위치가 변하는애들은 기준점을 새로 만들어주자. 부모로 싸서.)
    /*     $(`.ex3 div`).each(function () {
          var offt = $(this).offset().top
        
        if (scrT >= offt - winH*0.8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      }) */
    $(`.ex3 >div`).each(function () {
      var offt = $(this).offset().top

      if (scrT >= offt - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    }) 
    $(`.ex4 >div`).each(function () {
      var offt = $(this).offset().top
      if (scrT >= offt - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
    $(`.ex5 span`).each(function () {
      var offt = $(this).offset().top
      if (scrT >= offt - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
    $(`.ex6>div`).each(function () {
      var offt = $(this).offset().top
      if (scrT >= offt - winH * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })



  }


$(window).scroll(function () {
  reqID = requestAnimationFrame(fnScrollMotion)
}).resize(function () {
  reqID = requestAnimationFrame(fnScrollMotion)
})
})



$(function () {


})
$(function () {


})
$(function () {


})
$(function () {


})
$(function () {


})
$(function () {


})
$(function () {


})