window.portfolioArr = [
  {
    title: 'title1',
    desc: 'Lorem ipsum dolor sit amet',
    thumb: 'thumb1',
    detail: 'big1',
    class: 'LEGO ART',
  },
  {
    title: 'title2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    thumb: 'thumb2',
    detail: 'big2',
    class: 'LEGO ART',
  },
  {
    title: 'title3',
    desc: 'Lorem ipsum dolor sit amet consectetur',
    thumb: 'thumb3',
    detail: 'big3',
    class: 'PIXEL ART',
  },
  {
    title: 'title4',
    desc: 'Lorem ipsum dolor sit',
    thumb: 'thumb4',
    detail: 'big4',
    class: 'LEGO ART',
  },
  {
    title: 'title5',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    thumb: 'thumb5',
    detail: 'big5',
    class: 'PIXEL ART',
  },
  {
    title: 'title6',
    desc: 'Eveniet reiciendis laboriosam provident commodi quia ipsam',
    thumb: 'thumb6',
    detail: 'big6',
    class: 'LEGO ART',
  },
  {
    title: 'title7',
    desc: 'Tenetur ad corrupti amet numquam nisi voluptate',
    thumb: 'thumb7',
    detail: 'big7',
    class: 'PIXEL ART',
  },
  {
    title: 'title8',
    desc: 'Sequi molestias perspiciatis quaerat quidem esse',
    thumb: 'thumb8',
    detail: 'big8',
    class: 'etc',
  },
  {
    title: 'title9',
    desc: 'voluptatibus at velit odit minus aspernatur libero',
    thumb: 'thumb9',
    detail: 'big9',
    class: 'LEGO ART',
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