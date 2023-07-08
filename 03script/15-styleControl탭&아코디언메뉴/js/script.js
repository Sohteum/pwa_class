$(document).ready(function () {


  $(`.ex1 button`).click(function () {
    var n = $(this).text()
    $(`.ex1 .box`).hide()
    $(`.ex1 .box${n}`).show() //css 명령어. display none이었던것을, 블럭으로 바꾼ㄴ닫고 생각하면 되는데 원래 블럭이었으니까..근데 얘가 만약 인라인이었다면 인라인으로 바꾸고. 그러니까 원래 자신의 디스플레이레벨으로 바꿔주는 기능인것({'display':'block'})
  })

/*   $(`.ex1 button`).click(fucntion(){
    var n = $(this).text()
    $(`.ex1 .box`).hide()
    $(`.ex1 .box${n}`).show()
  }) */

  $(`.ex2 button`).click(function () {
    var n = $(this).text()
    /*   $(`.ex2 .box`).not($(`.ex2 .box${n}`)).css({'display':'none'}) */
    $(`.ex2 .box${n}`).siblings('.box').css({ 'display': 'none' })
    $(`.ex2 .box${n}`).toggle()
  })

  $(`.ex2 button`).click(function(){
    $(`.ex2 box${n}`).siblings('.box').css({'display':'none'})
    $(`.ex2 box${n}`).toggle()
  })

  /* $(`.ex3 .box`).click(function(){
    $(`.ex3 .box div`).stop().slideUp() // 아래에서 위로 펼쳐진다.` 아코디언메뉴`
    $(this).children('div').stop().slideDown() // 위에서 아래로 펼쳐진다. 아코디언메뉴
  }) */
  //애니메이션의 스택이 남음. 100번 클릭하면 100번 다해야돼서....스탑을 이용해서 마지막 행동만 하게함. 
  /* 애니메이션:천천히 움직이는거 */

  $(`.ex3 .box`).click(function () {
    $(`.ex3 .box div`).stop().slideUp()
    $(this).children('div').stop().slideToggle()
  })// 업, 다운, 토글

  $(`.ex4 .box`).click(function () {
    $(`.ex4 .box div`).stop().fadeOut()
    $(this).find('div').stop().fadeToggle()
  })// 인, 아웃, 토글


  /* css
  addClass, removeClass, toggleClass
  show, hide, toggle
  위에 두개는 전부다 꺼버리면 토글이 안되니 조심할것
  
  slideup, slidedown, sildetoggle
  fadeIn, fadeout, fadetoggle */

  /* rolem. 쓸말없을때 쓰는거 */

  $(`.tab button`).click(function () {
    var n = $(this).val()
    $(`.tab .pane`).hide()
    $(`.tab .pane${n}`).show()
    $(`.tab button`).removeClass('active')
    $(this).addClass('active')
  })



  $(`.menu>ul>li>a`).click(function (e) {
    //이벤트리스너로 앵커가 페이지이동을 못하게 함
    /*   $(this).siblings('ul').slideToggle() */
    e.preventDefault() //이거는 항상 맨위에 써야함 //함수의 리턴은 가장 아래에(하단의 문장실행해야하니까)
    $(`.menu>ul>li>ul`).stop().slideUp()
    $(this).nextAll('ul').stop().slideToggle()
    $(`.menu>ul>li>a`).not($(this)).removeClass('active')
    $(this).toggleClass('active')


  })




})