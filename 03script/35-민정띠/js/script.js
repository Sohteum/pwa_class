$(function(){
  var reqID
  function fn(){
    var scrollRange = $(`.scrollbar`).innerWidth() - $(`.scrollbtn`).innerWidth() 
  
    var scrollBtnX = parseInt($(`.scrollbtn`).css('left')) //스크롤의 현재 위치
    var scrollRatio = scrollBtnX / scrollRange //0~1
  
    var n = parseInt(scrollRatio * 35) + 1
    $(`.car`).hide()
    $(`.car${n}`).show()
  } //비율 구하는 공식

  $(`.scrollbtn`).draggable({
    axis : 'x',
    containment : 'parent',
    drag:function(){fn()},
  })

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})