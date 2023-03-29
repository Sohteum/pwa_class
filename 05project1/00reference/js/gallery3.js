
$(function(){
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