$(function () {

  function fnScroll() {
    var scrollRange = $(`.scrollbar`).innerWidth() - $(`.scrollbtn`).innerWidth()
    var scrollBtnX = parseInt($(`.scrollbtn`).css('left'))//여기서는 객체로 쓰면 안됨. 가져올때는 중괄호 안써줌
    var scrollRatio = scrollBtnX / scrollRange
    var MoveRange = $(`.container`).innerWidth() - $(`.wrap`).innerWidth()
    var x = MoveRange * scrollRatio //최대이동거리*비율
    $(`.wrap`).css({ 'transform': `translateX(${x}px)` })
  }


  $(`.scrollbtn`).draggable({
    axis: 'x',
    containment: 'parent',
    drag: function () { // 객체도 함수로만들수 있음 여기서 드레그를 함수로 만들었잖아//보기 편하게 위에서 함수를 만들고 호출함
      fnScroll()
    },

  })
})
// x는 좌우로만 됨
//0%, 100%를 구하는거. 0에서 1사이를 구하는거. 수학에서는. 그래서 퍼센트 구하는걸 먼저 알아야함
//스크롤버튼의 현재위치 / 스크롤버튼의 최대이동거리 50px이면 0.5가 나오는거지 50을 100으로 나누니까


$(function () {

  function fnScroll() {
    var dragRange = $(`.container2`).innerWidth() - $(`.wrap2`).innerWidth()
    var dragX = parseInt($(`.wrap2`).css('left'))
    var dragRatio = dragX / dragRange
    var moveRange = $(`.scrollbar2`).innerWidth() - $(`.scrollbtn2`).innerWidth()
    var x = moveRange * dragRatio
    $(`.scrollbtn2`).css({ 'transform': `translateX(${x}px)` })
    //비율을 위치에 대입. 비율*최대이동거리 270이니까 스크롤바너비에서 버튼이 30이라서 270이고.
  }

  $(`.wrap2`).draggable({
    // axis: 'x', //x축으로만 움직이게 해줌
    containment: [
      $(`.container2`).offset().left - 900,
      $(`.container2`).offset().top + 0, //top
      $(`.container2`).offset().left + 0, //
      $(`.container2`).offset().top + 0,
    ],//자식이 부모보다 크면 배열로 넣어줌. //left, top, right, bottom//랩의 기준이 아니고 부모의 기준.픽스드처럼 동작. offsetTop, offsetleft로부터 시작.
    drag: function () {
      fnScroll()
    }
  })

  // 좌표가 나오면 비율을 같이 해서 계산하기 좋은데 좌표가 없으면 어려워짐. 컨테인먼트를 배열로 설정하면 좌표가 안나옴>업뎃되서 나온대
  //레프트좌표.....-900은 컨테이너에서 랩을 뺀거야300-1200 = -900
  // 움직이는애는 무조건 비육 곱하기 이동거리. 이동거리는 변하는애고. 
})



$(function () {

  function fnScrollbarDrag() {
  }

  $(`.scrollbtn3`).draggable({
    containment: 'parent',
    drag: function () { fnScrollbarDrag },
  })


  ///* ------------------------------------------ */드래그로 움직이기
  //비율을 구해서 다른 대상을 제어할거임 그니까 서로서로 구해서 상대방을 제어하는것.

  function fnContainerDrag() {
    var dragRange = $(`.container3`).innerWidth() - $(`.wrap3`).innerWidth()  //컨위드-랩스리너비
    var dragX = parseInt($(`.wrap3`).css('left'))//드래그 된 위치
    var dragRatio = dragX / dragRange
    var moveRange = $(`.scrollbar3`).innerWidth() - $(`.scrollbtn3`).innerWidth()
    var x = dragRatio * moveRange
    $(`.scrollbtn3`).css({'left':`${x}px`})
    //최대이동거리*레이쇼
  }

  function fnSetDrag() {
    $(`.wrap3`).draggable({
      containment: [
        $(`.container3`).offset().left - ($(`.wrap3`).innerWidth() - $(`.container3`).innerWidth()),//랩 이너위드-컨테이너이너위드, 리사이즈 할때마다 계속 변하니까 다시 넣어줘야함
        $(`.container3`).offset().top + 0, //top
        $(`.container3`).offset().left + 0, //
        $(`.container3`).offset().top + 0,
      ],
      drag: function () { fnContainerDrag() }
    })//draggable
    $(`.wrap3, .scrollbtn3 `).css({ 'left': 0 })//움직이고 화면 줄이면 강제로 레프트0으로 조정하는거
  }//fnSetDrag()

  fnSetDrag()
  $(window).resize(function () {
    fnSetDrag()
  })

  ////////////////////////////////////////////////////////////스크롤로 움직이기

  function fnScroll() {
    var scrollRange = $(`.scrollbar3`).innerWidth() - $(`.scrollbtn3`).innerWidth()
    var scrollBtnX = parseInt($(`.scrollbtn3`).css('left'))//여기서는 객체로 쓰면 안됨. 가져올때는 중괄호 안써줌
    var scrollRatio = scrollBtnX / scrollRange
    var MoveRange = $(`.container3`).innerWidth() - $(`.wrap3`).innerWidth()
    var x = MoveRange * scrollRatio //최대이동거리*비율
    $(`.wrap3`).css({ 'transform': `translateX(${x}px)` })
  }

  $(`.scrollbtn3`).draggable({
    axis: 'x',
    containment: 'parent',
    drag: function () { 
      fnScroll()
    }
  })
})