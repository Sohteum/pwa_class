$(function(){
  var start = false

  //숫자 반복 setInterval이 필요
  $(`.progress-num`).each(function(){
    var c = 0 //current 약자, 처음 시작값은 무조건 0
    var el = $(this)

    setInterval(function(){
      if(start === true){
        var t = parseInt(el.attr(`data-t`)) //각각 자기가 정한 값으로 나온다
      }else{
        var t = 0
      }  
      c+=(t-c)*0.1
      el.text(Math.round(c))
    },50)  //출력할 때만 parseInt를 해라, 소수점이 반드시 필요하다
  })

  var reqID
  function fn(){
    var elT
    var elH
    var meta
    //progressing
    elT = $(`.dummy-scroll`).offset().top
    
    //조건문 걸기
    if(scrT >= elT - winH ){
      start = true
      $(`.section5 .progress li`).addClass(`active`)
      TweenMax.to(".section5 .poly-circle",0.5,{morphSVG:".section5 .badge",ease:Linear.easeNone}) //특정 시점에서 적용
    }else{
      start = false
      $(`.section5 .progress li`).removeClass(`active`)
      TweenMax.to(".section5 .poly-circle",0.5,{morphSVG:".section5 .poly-circle-copy",ease:Linear.easeNone})
    }

    //sticky ratio
    var scrollstart = $(`.section5`).offset().top + winH
    var end = $(`.section6`).offset().top - winH
    var scrollrange = end - scrollstart
    var scrollRatio = (scrT - scrollstart) / scrollrange
    if(scrollRatio < 0 ) scrollRatio = 0     
    if(scrollRatio > 1 ) scrollRatio = 1  //0과 1 사이가 나오도록 조건을 건다
    var n = parseInt(scrollRatio * 47) + 1
    $(`.section5 .img`).hide()
    $(`.section5 .img` + n).show()
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})