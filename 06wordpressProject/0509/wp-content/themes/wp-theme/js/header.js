$(function () {
  /* headermotion */
  var reqID
  function fn() {
    if (scrT >= 35) {
      $(`header`).addClass(`active`)
    } else {
      $(`header`).removeClass(`active`)
    }
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


  /* gnb-lg */

  $('.gnb-lg > div > ul> li> a').click(function (e) {
    e.preventDefault()
  })

  $('.gnb-lg > div > ul> li').mouseenter(function () {
    $(this).find('ul').stop().slideDown()
  }).mouseleave(function () {
    $(this).find('ul').stop().slideUp()
  })


  /* gnb-sm */
  $(`.mbtn-open`).click(function () {
    $(`.gnb-sm`).fadeIn(500, function () {
      $(`.gnb-sm video`)[0].play()
    })
    $('body').append(` 
      <script src="/wp-content/themes/wp-theme/js/app_particle_star.js"></script> 
    `)

  })
  $(`.mbtn-close`).click(function () {
    $(`.gnb-sm`).fadeOut(500)
    $('.gnb-sm > div > ul>li>ul').slideUp()
    $(`.gnb-sm > div > ul>li>a`).removeClass('active')
    $(`body script:last-child`).remove()
  })//외부스크립트 호출하는방법

  $('.gnb-sm > div > ul>li>a').click(function (e) {
    e.preventDefault()
    $('.gnb-sm > div > ul>li>ul').slideUp()
    $(`.gnb-sm > div > ul>li>a`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
    $(this).siblings('ul').stop().slideToggle()
  })

  $()

})