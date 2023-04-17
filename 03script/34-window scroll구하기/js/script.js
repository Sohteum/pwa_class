$(function () {

  var reqID

  function fn() {
    var docH = $(document).innerHeight()   //document는 문서!!  //브라우저의 높이는 common파일에 있음
    var scrRange = docH - winH
    var scrRatio = scrT / scrRange
    // console.log(scrRatio);

    $(`.scrollspy1 .progress`).css({ 'height': `${scrRatio * 100}%` })
    //스크롤 비율을 아까 구했잖아 만약 스크롤 비율이 1일때 거기에 100을 곱하면 100이 나오고 bar가 녹색으로 채워지겠지. 그렇게 스크롤비율*100을 해주면 되는것


    $(`.scrollspy2 circle`).css({ 'offset-distance': `${scrRatio * 100}%` })
    //scrRatio:dachoffset 1:0 , 0.5:0.5 , 0:1 아래 참고
    $(`.scrollspy2 path`).css({ 'stroke-dashoffset': `${1 - scrRatio}px` })
    console.log(scrRatio);//이해가 안되무ㅜㅠㅠㅠ
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

})