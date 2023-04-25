function flower(container,imgFolder){
  var container = container
  var imgFolder = imgFolder
  function makeFlower(){
    $(container).empty()
    var w = $(container).width()
    var h = $(container).height()
    var flowerCnt = w * 0.2
    for(i=1;i<=flowerCnt;i++){
      var n = Math.ceil(Math.random() * 10)
      $(container).append('<img src='+imgFolder+'/flower'+n+'.png>');
      var w = Math.floor(Math.random()*20) + 10
      var o = Math.random()*0.6 + 0.4
      var l = Math.ceil(Math.random()*100) 
      var s = Math.ceil(Math.random()*30) + 10
      var r = Math.floor(Math.random()*361)
      $(container).children('img:last-child').css({
        'width': w,
        'opacity': o,
        'left' : l + '%',
        'transform':'rotate('+r+'deg)',
        'animation-duration' : s + 's',
      })
    }  
  }
  makeFlower()
  $(window).resize(function(){
    makeFlower(container,imgFolder)
  })
}//fn

