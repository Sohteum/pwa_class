$(document).ready(function () {


  function fn1(el) {
    $(`.ex1 div`).css({ 'background': 'none' })
    var n = el.text()
    var bg = $(`.ex1 .box${n}`).attr(`data-bg`)
    el.siblings(`.ex1 .box${n}`).css({ 'background': bg })
  }


  $(`.ex1 button`).click(function () {
    /*     $(`.ex1 div`).css({ 'background': 'none' })
        var n = $(this).text()
        var bg = $(`.ex1 .box${n}`).attr(`data-bg`)
        $(this).siblings(`.ex1 .box${n}`).css({ 'background': bg }) */
    fn1($(this))
  })


  $(`.ex2 div`).click(function () {
    $(this).siblings('div').removeClass('active')
    $(this).addClass('active')
  })

  $(`.ex3 button`).click(function () {
    $(this).siblings('button').css({ 'color': 'black' })
    $(this).css({ 'color': 'red' })
  })


  /*   $(`.ex4 button`).click(function () {
      $(this).siblings(`button`).removeClass(`active`)
      $(this).toggleClass(`active`)
    }) */
  //여기서 굳이 siblings보다 $(`.ex4 button`).removeClass(`active`) 이렇게 하는게 더 편해.


  $(`.ex5 button`).click(function () {
    $(`.ex5 button`).css({ 'color': 'black' })
    /* $(this) 여기서 디스를 쓰면 부모의 부모의 형제의 자식의 자식을 찾아야하니 이때는 쓰지말자..*/
    $(this).css({ 'color': 'red' })
  })// this가 만사형통은 아님!!!


  /*   $(`.ex6 button`).click(function () {
      $(this).siblings(`button`).removeClass(`active`)
      $(this).toggleClass(`active`)
    }) */
  // 이렇게 하면 안됨. 할아버지의 형제의 머시기를 찾아야함. 디스의 형제가 없잖아.


  $(`.ex6 button`).click(function () {
    $(`.ex6 button`).not($(this)).removeClass(`active`)
    $(this).toggleClass(`active`)
  })

  $(`.ex7 button`).click(function () {
    var num = $(this).val()
    $(`.ex7 .art${num} button`).not($(this)).removeClass(`active`)
    $(this).toggleClass(`active`)
  })//다시풀어보기


  $(`.ex8 button`).click(function () {
    $(this).parents(`article`).find('button').not($(this)).removeClass('active')
    $(this).toggleClass(`active`)
  })// 다시풀어보기

  /* parents는 조상 다 찾을 수 있는거
  find는 자손 다 찾을 수 있는거 */
  /* 위험한 코드야 왜냐면 전체를 아티클로 감쌌거나 하면 모든 버튼을 찾을 수 있음 그러니까 윗 조상이 걸리지 않게 내가 원하는 조상에다가 class를 따로주자. */

  /* 아는 노드
  prev, prevAll, next,nextAll, parent ,children,siblings parents find(오리지널 바닐라는 prev next  parent ,children 밖에없음. 그래서 제이쿼리가 편함)
  this는 이벤트타겟이지 노드는 아님 this를 이용해서 노드를 찾는거지
   */

  /* css
  addClass(`active1 active2 acitive3`),removeClass(`active1 active2 acitive3`),toggleClass 
  클래스는 여러개 추가 가능*/

  $(`.ex9 button`).click(function () {
    var n = $(this).text()
    $(`.ex9 div`).show()
    $(`.ex9 .box${n}`).hide()
  }) // 다시풀어보기


  $(`.ex10 button`).click(function () {
    var n = $(this).text()
    $(`.ex10 div`).hide()
    $(`.ex10 .box${n}`).show()
  })


  /*   $(`.ex11 button`).click(function () {
      var n = $(this).text()
      $(`.ex11 div`).not(`.ex11 .box${n}`).hide()
      $(`.ex11 .box${n}`).toggle()
    }) */
  /* not쓰는 애들은 toggle,toggleClass 다른애들은 전부다 꺼도됨
  토글과 토글클래스 차이 구분할것
  토글은 그냥 그 자체가 생겼다 사라졌다. 토글클래스는 css로 뭔가 추가할때*/

  $(`.ex11 button`).click(function () {
    var n = $(this).text()
    $(`.ex11 div`).hide()
    $(`.ex11 .box${n}`).toggle()
  })


  $(`.ex12 button`).click(function () {
    var n = $(this).text()
    $(`.ex12 div`).not(`.box${n}`).removeClass(`active1 active2 active3`)
    $(`.ex12 .box${n} `).toggleClass(`active${n}`)
  })
  /* $(`.ex12 button`).click(function(){
    var n = $(this).text()
    $(`.ex12 div`).not(`.box${n}`).removeClass(`active${n}`)
    $(`.ex12 .box${n} `).toggleClass(`active${n}`)
  })이거는 전부 꺼지는게 안됨 내가 토글할거만 꺼져있는거 */

  $(`.ex13 button`).click(function () {
    var n = $(this).text()
    $(`.ex13 div`).not(`.box${n}`).removeClass(`active`)
    $(`.ex13 .box${n}`).toggleClass(`active`)
  })

  //12,13똑같은 문젠데 내가 만든다면 13번처럼 만들라는 뜻. 12번은 비효율적
})