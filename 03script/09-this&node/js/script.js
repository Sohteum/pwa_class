$(function () {

  function fn(conN, btnN, bg) {
    $(`.ex1 .cont${conN} div:nth-of-type(${btnN})`).css({ 'background': bg })
    $(`.ex1 .cont${conN} div`).not($(`div:nth-of-type(${btnN})`)).css({ 'background': 'none' })
  }
  //내용이 다른건 못넣음
  //파라미터 세개중에 같은것만 함수에 넣어줌
  //bg를 넣어준데에 원래는 스트링을 ''로 넣어주는데 bg는 그냥 스트링으로 작성한 문자열이 아니고 내가 지정한 변수니까 그냥 변수를 넣어주는거지


  $(`.ex1 .cont1 button`).click(function () {
    var btnN = $(this).text() //클릭한 버튼의 번호
    var bg = $(`.ex1 .cont1 div:nth-of-type(${btnN})`).attr('data-bg')
    //클릭한버튼에 해당하는 박스의 data-bg속성값
    fn(1, btnN, bg)
  })//다른값을 받는걸 파라미터로 처리. text와 val로 다르고, attr과 text로 다름, 그리고 컨테이너가 다르니 세개
  // fn(1, btnN, bg)conN을 변수선언을 안하고 여기서 이렇게 숫자로 1넣어줘도됨


  $('.ex1 .cont2 button').click(function () {
    var btnN = $(this).val()
    var bg = $(`.ex1 .cont2 div:nth-of-type(${btnN})`).text()
    fn(2, btnN, bg)
  })// fn(2, btnN, bg)여기서 이렇게 숫자로 2넣어줘도됨





  function fn2(conN, el) {
    $(`.ex2 .cont${conN} div`).css({ 'background': 'none' })
    el.css({ 'background': `red` })
  }

  $(`.ex2 .cont1 button`).click(function () {
    fn2(1, $(this).next())
    /* $(`.ex2 .con1 div`).not($(this).next()).css({'background':'none'}) */
  })
  //next는 바로 밑에 동생을 찾는거 
  //다 나가라고 한다음에 필요한애만 빨갛게 하면됨. 여기선 순서가 중요함
  //노드찾기 : 누구(여기선 디스)를 기준으로 족보찾는거

  $(`.ex2 .cont2 button`).click(function () {
    var el = $(this).prev()
    fn2(2, el)
  })
  //앞에있는애는 previous?그래서 prev
  // css는 부모선택이 안됨. 위에 형선택이 안됨. 오로지 캐스캐이딩 그래서 자스랑 섞어서 쓸수밖에 없음




  function fn3(conN, el) {
    $(`.ex3 .cont${conN} div`).not(el).removeClass('t')
    el.toggleClass('t')
  }

  $(`.ex3 .cont1 div`).click(function () {
    fn3(1, $(this))
  })
  /* 작은 앱은 리액트로 가능하지만 복잡한건 못써 */

  $(`.ex3 .cont2 div`).click(function () {
    fn3(2, $(this))
  })

  function fn4(el, el2) {
    el.addClass('t')
    el2.addClass('t')
  }

  $(`.ex4 .cont1 div`).click(function () {
    var el = $(this)
    fn4(el, $(this).prevAll())
  })

  $(`.ex4 .cont2 div`).click(function() {
    fn4($(this), $(this).nextAll())
  })

})