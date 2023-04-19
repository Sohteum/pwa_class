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
    var dashoffset = -(1 - scrRatio) /
      $(`header .line`).css({ 'stroke-dashoffset': dashoffset })
    console.log(scrRatio);

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

  $(`.mBtn`).click(function () {
    $(this).toggleClass(`active`)
    $(`.gnb_sm`).stop().slideToggle()
  })

  var reqID
  var headerH
  var offT1; var offT2; var offT3; var offT4; var offT5; var offT6; var offsetArr

  if (window.matchMedia('screen and (min-width:1000px)').matches) {
    headerH = 70
  } else {
    headerH = 60
  }

  function fn() {
    offT1 = $(`.section1`).offset().top
    offT2 = $(`.section2`).offset().top - headerH
    offT3 = $(`.section3`).offset().top - headerH
    offT4 = $(`.section4`).offset().top - headerH
    offT5 = $(`.section5`).offset().top - headerH
    offT6 = $(`.section6`).offset().top - headerH
    console.log(offT1);
    offsetArr = [offT1, offT2, offT3, offT4, offT5, offT6]
  }


  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


  $(`.gnb a`).click(function (e) {
    e.preventDefault()
    var n = parseInt($(this).attr(`href`))
    $(`.gnb_sm`).stop().slideUp()
    $(`.mBtn`).removeClass(`active`)

    window.scrollTo({
      top: offsetArr[n - 1],
      behavior: 'smooth',
    })
  })

})


$(function () {

  /* scrollspy */
  var reqID
  var headerH
  var offT1; var offT2; var offT3; var offT4; var offT5; var offT6; var offsetArr

  if (window.matchMedia('screen and (min-width:1000px)').matches) {
    headerH = 70
  } else {
    headerH = 60
  }

  function fn() {
    offT1 = $(`.section1`).offset().top
    offT2 = $(`.section2`).offset().top - headerH
    offT3 = $(`.section3`).offset().top - headerH
    offT4 = $(`.section4`).offset().top - headerH
    offT5 = $(`.section5`).offset().top - headerH
    offT6 = $(`.section6`).offset().top - headerH
    console.log(offT1);
    offsetArr = [offT1, offT2, offT3, offT4, offT5, offT6]
    var currentSection

    if (scrT < offT2) {
      currentSection = 1
    } else if (scrT >= offT2 - 1 && scrT < offT3 - 1) {
      /
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