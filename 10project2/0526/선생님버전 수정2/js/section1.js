$(function(){
  $(window).load(function(){
    var wave1 = new displacmentWave('.section1 .bg img', '#ripple-filter1', './img/ripple/ripple.png', 4, 4)
    
    setInterval(function(){
      wave1.wave()
    },6000)
  }) //로딩이 완료될 때

  /* scroll motion & parallax */
  var reqID
  function fn(){
    var offT
    var meta
    offT = $(`.section2`).offset().top
    if(scrT >= offT - winH *0.5){
      $(`.section1`).removeClass(`active`)
    }else{
      $(`.section1`).addClass(`active`)
    } //첫번째 section은 반대로 해야 한다

    offT = $(`.section1`).offset().top //section1은 0이다
    meta = 0 + (scrT - offT) * 0.3
    $(`.section1 .boy`).css({'transform':`translateY(${meta}px)`})

    meta = 1 + (scrT - offT) * 0.001
    $(`.section1 .bg`).css({'transform':`scale(${meta})`})

    meta = 0 + (scrT - offT) * 0.02
    $(`.section1 .bg`).css({'filter':`blur(${meta}px)`})
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})