$(function () {

  $('.home_visual').slick({
    slide: 'figure',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    vertical: false,
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-arrow-right'></i></button>",
    draggable: true,
    draggable: true,
  });


  var reqID
  function fn() {
    $(`.feature li`).each(function () {
      var elT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 1 + Math.abs(scrT - (elT - winH * 0.5 + elH * 0.5)) * -0.0005
      if (meta < 0) { meta = 0 }
      $(this).find(`a`).css({ 'transform': `scale(${meta})` })
    })
    $(`.latest article`).each(function () {
      var elT = $(this).offset().top
      if(scrT >=elT-winH*0.8){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')

      }
    })
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })
})