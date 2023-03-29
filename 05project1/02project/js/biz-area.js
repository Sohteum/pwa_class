$(function(){
  var reqID
  function fnHeaderMotion() {
  $(`.biz_area_section p, .biz_area_section figure`).each(function(){
    var offT = $(this).offset().top
    if(scrT - offT - winH *0.8){
      $(this).addClass(`active`)
    }
    $(this).removeClass(`active`)
  })


  }
  fnHeaderMotion()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fnHeaderMotion)
  }).resize(function(){
    reqID = requestAnimationFrame(fnHeaderMotion)
  })
  })