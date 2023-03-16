/* $(document).ready(function () {
  var req
  function fnScrollMotion() {
    var scrT = $(window).scrollTop() // 스크롤탑은 항상 바뀜
    var offsetTop = $(`.box1`).offset().top //여기는 괄호가 없음. 그래서 변수중에 탑은 사용불가, 문서의 시작에서 객체가 떨어져있는거리를 오프셋이라고 함, 오프셋탑은 문서에서 요소까지 수직위치 
    if (scrT >= offsetTop) {
      $(`.box1`).css({ 'background': 'blue' })
    } else {
      $(`.box1`).css({ 'background': `red` })
    }
  }
  //화면에 출력할 내용을 컨트롤하는내용 스크롤이랑 브라우저크기에 맞추어서 리쿼스트애니메이션프레임 을 사용해서 과부하가 걸리지않게함
  fnScrollMotion()
  //이건 처음 로딩됐을때니까 리퀘스트애니메이션프레임 안해도됨

  $(window).scroll(function () {
    req = requestAnimationFrame(fnScrollMotion)
  }).resize(function () {
    req = requestAnimationFrame(fnScrollMotion)
  })
}) */


/* $(document).ready(function () {
  var req
  function fnScrollMotion() {
    var scrT = $(window).scrollTop()
    var winH = $(window).height()
    var offsetTop = $(`.box1`).offset().top
    var box1H = $(`.box1`).innerHeight() //패딩까지 감지를 못해서 이너하이트를 씀
    if (scrT >= offsetTop - winH * 0.7 + box1H) { //  >=(이상)부터/(이하)까지  라고 읽을것. 머리통찧는순간부터 뒤로 윈도우반만끔 빠꾸(스크롤이 아래로) 플러스는 전진(스크롤이 위로가는거)
      $(`.box1`).css({ 'background': ` red` })
    } else {
      $(`.box1`).css({ 'background': `#CCC` })
    }
  }

  fnScrollMotion()

  $(window).scroll(function () {
    req = requestAnimationFrame(fnScrollMotion)
  }).resize(function () {
    req = requestAnimationFrame(fnScrollMotion)
  })

}) */


$(document).ready(function () {
  var req
  function fnScrollMotion() {
    var scrT = $(window).scrollTop()
    var winH = $(window).height()

    $(`.box1`).each(function () {

      var offsetTop = $(this).offset().top //top이랑 left있음
      var box1H = $(this).innerHeight()

      if (
        (scrT < offsetTop - winH * 0.3)
        &&
        (scrT >= offsetTop - winH * 0.7 + box1H)
      ) {
        $(this).css({ 'background': ` red` })
      } else {
        $(this).css({ 'background': `#CCC` })
      }//값이 계속 달라지는 걸 찾으면 된다. 그게 디스!!
    })

  }

  fnScrollMotion()

  $(window).scroll(function () {
    req = requestAnimationFrame(fnScrollMotion)
  }).resize(function () {
    req = requestAnimationFrame(fnScrollMotion)
  })

})