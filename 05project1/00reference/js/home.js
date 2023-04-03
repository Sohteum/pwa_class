$(function(){

  $('.home_visual').slick({
    slide: 'figure',         
    infinite : true,          
    slidesToShow : 1,         
    slidesToScroll : 1,         
    speed : 500,     
    arrows : true,          
    dots : true,          
    autoplay : true,            
    autoplaySpeed : 3000,         
    pauseOnHover : false,        
    vertical : false,         
    prevArrow : "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
    nextArrow : "<button type='button' class='slick-next'><i class='fa-solid fa-arrow-right'></i></button>",
    draggable : true,     
    draggable : true,      
  });


  var reqID
  function fnHeaderMotion() {
  
  }
  fnHeaderMotion()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function(){
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
  })