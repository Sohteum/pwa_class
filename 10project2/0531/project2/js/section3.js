$(function(){
  var reqID
  function fn(){
    var offT = $(`.section3`).offset().top
    var meta = 0 + (scrT - (offT)) * 0.1
    if(meta < -50) meta = -50
    if(meta > 50) meta = 50 //빈 여백이 보이지 않도록 조건을 검
    $(`.section3 .bg`).css({'transform':`scale(1.3) translateY(${meta}%)`})
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })


  $('.section3 .bg').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.01,
  });


})