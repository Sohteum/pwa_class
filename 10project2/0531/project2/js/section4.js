window.portfolioArr = [
  {
    title: 'Cool cars',
    desc: 'We have creatively built various cars with LEGO',
    thumb: 'thumb1',
    detail: 'big1',
    class: 'LEGO',
  },
  {
    title: 'Familiar characters',
    desc: 'Any character becomes even cooler when they are with us',
    thumb: 'thumb2',
    detail: 'big2',
    class: 'LEGO',
  },
  {
    title: 'pixel arts',
    desc: 'Pixels can represent many things',
    thumb: 'thumb3',
    detail: 'big3',
    class: 'PIXEL',
  },
  {
    title: 'Harry Poter',
    desc: 'Meet a new Harry Potter through LEGO',
    thumb: 'thumb4',
    detail: 'big4',
    class: 'LEGO',
  },
  {
    title: '2D world in the game',
    desc: 'Even in the world of games, it becomes more creative with Brandiz',
    thumb: 'thumb5',
    detail: 'big5',
    class: 'PIXEL',
  },
  {
    title: 'Various concept art',
    desc: 'We build a small world with LEGO',
    thumb: 'thumb6',
    detail: 'big6',
    class: 'LEGO',
  },
  {
    title: 'Beautiful sky',
    desc: 'Enjoy the beautiful sky through pixel art',
    thumb: 'thumb7',
    detail: 'big7',
    class: 'PIXEL',
  },
  {
    title: 'LEGO comes to life',
    desc: 'Even in the real world, LEGO brings creativity',
       thumb: 'thumb8',
    detail: 'big8',
    class: 'ETC LEGO',
  },
  {
    title: 'The heroes we love',
    desc: 'Our heroes become even more relatable when we are with LEGO',
    thumb: 'thumb9',
    detail: 'big9',
    class: 'LEGO',
  },
]

$(function () {

  hover_box('.portfolio figure', 'figcaption')

  var reqID
  function fn() {
    $(`.portfolio li`).each(function () {
      var elT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (elT - winH * 0.5 + elH * 0.5)) * 0.1
      $(this).find('img').css({ 'transform': `scale(1.2) translateY(${meta}px)` })
    })
  }

  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })


  $(window).load(function () {
    var $container = $('.section4 .portfolio');
    var filterSelect = "*"
    fn_isotope()
    function fn_isotope() {
      $container.isotope({
        filter: filterSelect,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }//animationOptions
      })//isotope
    }//fn
    $('.section4 .btns button').click(function () {
      filterSelect = $(this).val()
      $('.section4 .btns button').removeClass(`active`)
      $(this).addClass(`active`)
      fn_isotope()
    })//click	
    $(window).resize(function () {
      fn_isotope()
    })//resize
  })//load


  /* modal */
  $(`.portfolio li a`).click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn() //modal이 바로 나와서 animation이 중첩되지 않아서 stop()을 쓰지 않아도 된다
    $('body').css({ 'overflow': `hidden` })
    $(`.modal .loader`).show()
    $(`.modal`).append(`
      <img src="${$(this).attr('href')}" alt="">
    `)
    $(`.modal img`).load(function () {
      $(this).fadeIn()
      $(`.modal .loader`).fadeOut()
    }) //로딩이 끝나자마자
    $(`.modal img`).click(function (e) {
      e.stopPropagation() //img를 누르면 안 닫히게 한다, img를 append한 곳에서 img 클릭 이벤트를 만들어야 한다
    })
  })

  $('.modal').bind('mousewheel', function (e) {
    e.stopPropagation() //부모(웹브라우저) 이벤트를 막는 것, 이벤트 버블링
  })

  $('.modal').click(function () {
    $(this).fadeOut()
    $(`.modal img`).remove()
    $('body').css({ 'overflow': `auto` })
  })


})