$('body').css({'overflow':`hidden`})


$(function () {
  $(`.gnb>div>ul>li>ul>li>a, .snb>div>ul>li>ul>li>a, .fnb>div>ul>li>a`).click(function (e) {
    e.preventDefault();
    $('body').css({'overflow':`hidden`})
    $(`.loader`).removeClass('active')
    var href =  $(this).attr('href')
    var timeoutID
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      location.href=href  //커튼내려오는 시간 0.5초를 기다려야함 그래서 셋타임아웃
    }, 500)
  })
})//ready

//위에 넣어도 되고 안넣어도됨
$(window).load(function () { //헤더에 적용했으니까 모든페이지에서 다 나와
  $(`.loader`).addClass('active')
  setTimeout(function(){
    $('body').css({'overflow':`auto`})
  },500)
})//load