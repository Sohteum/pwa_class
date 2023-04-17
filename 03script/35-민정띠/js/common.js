window.isMobile = false; 
var filter = "win16|win32|win64|mac";
if (navigator.platform) {
  isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
} //실제 핸드폰으로 보는지 구분해야 해서 검사 필요함

window.isAndroid = false
if( /Android/i.test(navigator.userAgent)) {
  isAndroid = true
} // 안드로이드

window.isIOS =false
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  isIOS = true
} // iOS 아이폰, 아이패드, 아이팟


$(function(){
  var reqID
  function fnGetWinInfo(){
    window.scrT = $(window).scrollTop() //전체 script에서 사용하겠다
    window.scrL = $(window).scrollLeft() //전체 사용이기 때문에 같은 이름 사용하면 안 된다
    window.winW = $(window).width()
    window.winH = $(window).height()
  }

  fnGetWinInfo()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fnGetWinInfo)
  }).resize(function(){
    reqID = requestAnimationFrame(fnGetWinInfo)
  })

}) //비동기로 객체를 찾으려고
//윈도우는 바로 찾을 수 있어서 여기서는 안 해도 되지만 
//문서의 높이를 찾을 때가 있어서 함(body안의 요소를)