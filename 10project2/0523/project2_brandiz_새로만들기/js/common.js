window.isMobile = false;
var filter = "win16|win32|win64|mac";
if (navigator.platform) {
  isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
}

window.isAndroid = false;
if (/Android/i.test(navigator.userAgent)) {
  isAndroid = true;
}

window.isIOS = false;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  isIOS = true;
}
 

$(function () { //공통으로 사용할 js파일//헤드에 링크를 해두고 비동기로 객체를 찾으려고. 바디 안쪽에 있는애들은 파싱이 끝난 후 찾을 수 있다. 윈도우는 파싱전에도 찾을 수 있어. 다른 돔요소를 찾을 때도 있으니까 편의상 넣었다.
  var reqID
  function fnGetWinInfo() {
    window.scrT = $(window).scrollTop()
    window.scrL = $(window).scrollLeft()
    window.winW = $(window).width()
    window.winH = $(window).height()
    window.docH = $(document).innerHeight()
/*     console.log(scrT,scrL,winW,winH); */

  }
  
  fnGetWinInfo()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnGetWinInfo)
  }).resize(function () {
    reqID = requestAnimationFrame(fnGetWinInfo)
  })
})