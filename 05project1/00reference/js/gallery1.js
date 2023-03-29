
$(function(){
  hover_box(`.float_container li a figure`, `.float_container li a figure figcaption`)

  var reqID
  function fn() {
    $(`.float_container li a figure`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0+(scrT-(offT-winH*0.5+elH*0.5))*0.1
      if(meta>15){meta=15}//위로 올라갈때 문제 (구멍 보이는거)막기
      if(meta>-15){meta=-15} //아래로 내려갈때 문제 막기

      $(this).children(`img`).css({'transform': `scale(1.4) translateY(${meta}%)`})
    })
  }
  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn())
  }).resize(function(){
    reqID = requestAnimationFrame(fn())
  })
  })