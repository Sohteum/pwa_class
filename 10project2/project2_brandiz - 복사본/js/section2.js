
$(function () {
  var reqID
  function fn() {
    var offT = $(`.section2`).offset().top
    var meta = 0 + (scrT - (offT - 60)) * 0.05  //헤더 높이때문에 60 빼즘
    if (meta > 20) { meta = 20 }
    if (meta < -20) { meta = -20 }
    $(`.section2 .bg`).css({ 'transform': `scale(1.4) translateY(${meta}%) translateX(-40%)` })//구멍 안생기게할려면 비율이 0.5이상 움직이면 안됨

  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

  /* slider */
  var n = 1
  var timeoutID
  var intervalID = setInterval(function () {
    n++
    change()
    $(`.carousel .img`).stop().animate({ 'left': `-20%`, 'opacity': `0` })
    $(`.carousel .img${n}`).css({ 'left': `20%` })
    $(`.carousel .img${n}`).stop().animate({ 'left': `0`, 'opacity': `1` })
  }, 2000)

  function change() {
    if (n > 2) { n = 1 }
    if (n < 1) { n = 2 }
  }

  function autoplay() {
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      intervalID = setInterval(function () {
        n++
        change()
        $(`.carousel .img`).stop().animate({ 'left': `-20%`, 'opacity': `0` })
        $(`.carousel .img${n}`).css({ 'left': `20%` })
        $(`.carousel .img${n}`).stop().animate({ 'left': `0`, 'opacity': `1` })
      }, 2000)
    }, 5000)
  }

    $(`.carousel .next`).click(function () {
      n++//이미지를 오른쪽으로 확 주고 왼쪽으로 천천히
      change()
      $(`.carousel .img`).stop().animate({ 'left': `-20%`, 'opacity': `0` })
      $(`.carousel .img${n}`).css({ 'left': `20%` })
      $(`.carousel .img${n}`).stop().animate({ 'left': `0`, 'opacity': `1` })
      autoplay()
    })

    $(`.carousel .prev`).click(function () {
      n--
      change()
      $(`.carousel .img`).stop().animate({ 'left': `20%`, 'opacity': `0` })
      $(`.carousel .img${n}`).css({ 'left': `-20%` })
      $(`.carousel .img${n}`).stop().animate({ 'left': `0`, 'opacity': `1` })
      autoplay()
    })

  })