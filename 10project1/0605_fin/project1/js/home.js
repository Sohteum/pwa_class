$(function () {

  $('.home_visual').slick({
    slide: 'figure',       
    infinite: true,        
    slidesToShow: 1,      
    slidesToScroll: 1,        
    speed: 1000,   
    arrows: true,       
    dots: true,       
    autoplay: true,          
    autoplaySpeed: 4000,       
    pauseOnHover: false,      
    vertical: false,     
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
    draggable: true,    
    draggable: true,    

  });


  var reqID
  function fnHeaderMotion() {

    $(`.latest article`).each(function () {
      var elT = $(this).offset().top
      if (scrT >= elT - winH * 0.9) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')

      }
    })
  }
  fnHeaderMotion()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function () {
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
})