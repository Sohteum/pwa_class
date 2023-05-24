$(function () {

  //숫자가 반복해서 올라가는거라서 셋인터벌이 필요함. 0.5초정도 필요함0.3정도
  //이징 수렴하는 공식. 수렴=특정값인 t에 수렴하게됨. c->t 
  //0에서 100이 있다고 할때 계속 작아지다가 결국은 100이됨. 1에가까울수록 빨리, 0에 가까울수록 늦게 
  //여기서는 소수점이 나올수밖에 없음. 없으면 계산이 안되니까 팔스인트 필요. 근데 출력할땐 해준다??????
  //셋인터벌이 4개가 되어야되는건데, 셋인터벌안에서 포이치를하면너무어려우니까...

  //var t = 2023   //이제 이 값은 4개가 되는거니까 2023이 아닌것
  var start = false

  $(`.progress_n`).each(function () {
    var c = 0 //걍 공식임. 트랜지션이 없을때는 계산해서 구현했었는데 트랜지션 공식같은거임//이게 안에있어야 내가 정한 값이 나옴
    var el = $(this)
    setInterval(() => {
      if (start === true) {
        var t = parseInt(el.attr('data-t')) //정해진 t값으로 변한다
      } else {
        var t = 0 //전부 0으로 변한다
      }
      c += (t - c) * 0.1  //0에 가까워질수록 빨리변한다.
      el.text(Math.round(c))//ceil하면 숫자가 1에서 멈춤. 그래서 반올림인 라운드?로 해야함
    }, 50); //변하는 속도. 커지면 숫자가 점프를 크게하고, 작게하면 디테일하게 
  })//each


  var reqID
  function fn() {
    var elT
    var elH
    var meta

    var elT = $(`.dummy-scroll`).offset().top
    if (scrT >= elT - winH) {
      start = true
      $(`.section5 .progress li`).addClass(`active`)
      TweenMax.to(".section5 .poly-circle", 0.5, { morphSVG: ".section5 .badge", ease: Linear.easeNone }) //사용법1특정시점2는 게속바뀌는거
    } else {
      start = false
      $(`.section5 .progress li`).removeClass(`active`)
      TweenMax.to(".section5 .poly-circle", 0.5, { morphSVG: ".section5 .poly-circle-copy", ease: Linear.easeNone }) //사용법1특정시점2는 게속바뀌는거
    }

    //sticky ratio 
    var scrStart = $(`.section5`).offset().top + winH //스크롤레인지가 0~1이걸가지고 현재 스크롤의 위치를 구한다?
    var end = $(`.section6`).offset().top - winH
    var scrollRange = end - scrStart
    var scrRatio = (scrT - scrStart) / scrollRange
    if (scrRatio < 0) scrRatio = 0
    if (scrRatio > 1) scrRatio = 1
  
    var n = parseInt(scrRatio * 47) + 1
    $(`.section5 .img`).hide()
    $(`.section5 .img`+n).show()
  }

  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})

  //오프셋을 누구로 잡을지가 중요, 더미로 잡으면 오프셋탑에 윈h만큼 빠지면 됨 