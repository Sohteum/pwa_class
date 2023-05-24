
window.offT1; window.offT2; window.offT3; window.offT4; window.offT5; window.offT6; window.offsetArr; window.currentSection;

$(function () {

  /* common offset */

  var reqID
  function fn() {
    if (window.matchMedia('screen and (min-width:1000px)').matches) {
      headerH = 70
    } else { headerH = 60 }
    offT1 = $(`.section1`).offset().top
    offT2 = $(`.section2`).offset().top - headerH
    offT3 = $(`.section3`).offset().top - headerH
    offT4 = $(`.section4`).offset().top - headerH
    offT5 = $(`.section5`).offset().top - headerH
    offT6 = $(`.section6`).offset().top - headerH
    offsetArr = [offT1, offT2, offT3, offT4, offT5, offT6]
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


})



$(function () {

  /* header motion */

  var reqID
  function fn() {


    if (scrT > 200) {
      $(`header`).addClass(`active`)
      TweenMax.to("header .line", 1, { morphSVG: "header .zigzag", ease: Linear.easeNone })
    } else {
      $(`header`).removeClass(`active`)
      TweenMax.to("header .line", 1, { morphSVG: "header .linecopy", ease: Linear.easeNone })
    }

    if (window.matchMedia(`screen and (max-width:1000px)`).matches) {
      $(`header`).addClass(`active`)
    }

    var scrRange = $(document).innerHeight() - winH
    var scrRatio = scrT / scrRange
    var dashoffset = -(1 - scrRatio)  //ratio:dashoffset 0:-1 0.5:-0.5 `:-0
    $(`header .line`).css({ 'stroke-dashoffset': dashoffset })
    // console.log(scrRatio);

  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

})


$(function () {

  /* menu */

  $(`.mbtn`).click(function () {
    $(this).toggleClass(`active`)
    $(`.gnb_sm`).stop().slideToggle()
  })

  $(`.gnb a`).click(function (e) {
    e.preventDefault()
    $(`.gnb_sm`).stop().slideUp()
    $(`.mBtn`).removeClass(`active`)
    var n = parseInt($(this).attr(`href`))
    $('body,html').stop().animate({ 'scrollTop': offsetArr[n - 1] }) //없던시절에 부드럽게 할려면 에니메이트가 필요했음 트랜지션대신에 css속성을 천천히 변하게하고싶을때 사용
    // window.scrollTo({
    //   top: offsetArr[n - 1],
    //   behavior: 'smooth',
    // })//스무드스크롤 사용시 바닐라는 제이쿼리, 제이쿼리는 바닐라로 내부링크 짝을 맞춰야함
  })
})


$(function () {

  /* scrollspy */

  var reqID

  function fn() {
    if (scrT < offT2) {
      currentSection = 1
    } else if (scrT >= offT2 - 1 && scrT < offT3 - 1) { //소수점이 나오면 잘 안갈때가 있음 그럴때를 대비해서 1을 빼줌
      currentSection = 2
    } else if (scrT >= offT3 - 1 && scrT < offT4 - 1) {
      currentSection = 3
    } else if (scrT >= offT4 - 1 && scrT < offT5 - 1) {
      currentSection = 4
    } else if (scrT >= offT5 - 1 && scrT < offT6 - 1) {
      currentSection = 5
    } else {
      currentSection = 6
    }
    $(`.gnb a `).removeClass(`active`)
    $(`.gnb .link${currentSection}`).addClass(`active`)
  }

  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

})

$(function () {

  /* side scrollspy */

  var reqID
  function fn() {
    var scrRange = docH - winH
    var scrRatio = scrT / scrRange

    $(`.scrollspy .star`).css({ 'offset-distance': `${scrRatio * 100}%` })//동그라미움직이기
    $(`.scrollspy .path`).css({ 'stroke-dashoffset': `${1 - scrRatio}px` })//선 움직이기
  }//0일때 1이되어야하고 1일때 0이 되어야함

  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


})