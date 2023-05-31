$(function(){
  var reqID
  function fn(){
    var offT = $(`.section2`).offset().top
    var meta = 0 + (scrT - (offT - 60)) * 0.05
    if(meta > 20) {meta = 20}
    if(meta < -20) {meta = -20}
    $(`.section2 .bg`).css({'transform':`scale(1.1) translateY(${meta}%) translateX(-50%)`})
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

  /* slider */
  var n = 1
  var timeoutID
  var intervalID = setInterval(function(){
    n++
    fnChange()
    $(`.carousel .img`).stop().animate({'left':`-20%`, 'opacity':'0'})
    $(`.carousel .img${n}`).css({'left':`20%`})
    $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
  },2000)

  function fnChange(){
    if(n > 2){n=1}
    if(n < 1){n=2}
  }

  function autoplay(){
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function(){
      intervalID = setInterval(function(){
        n++
        fnChange()
        $(`.carousel .img`).stop().animate({'left':`-20%`, 'opacity':'0'})
        $(`.carousel .img${n}`).css({'left':`20%`})
        $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
      },2000)
    },5000)
  }

  $(`.carousel .next`).click(function(){
    n ++
    fnChange()
    $(`.carousel .img`).stop().animate({'left':`-20%`, 'opacity':'0'})
    $(`.carousel .img${n}`).css({'left':`20%`})
    $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
    autoplay()
  })
  $(`.carousel .prev`).click(function(){
    n --
    fnChange()
    $(`.carousel .img`).stop().animate({'left':`20%`, 'opacity':'0'})
    $(`.carousel .img${n}`).css({'left':`-20%`})
    $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
    autoplay()
  })

})