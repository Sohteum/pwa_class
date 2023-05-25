$(function(){
  var reqID
  function fn(){
    $(`.footer-height`).height($('footer').innerHeight())
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})