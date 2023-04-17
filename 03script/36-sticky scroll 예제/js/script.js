  $(function () {

    function fnScroll() {
      var scrollRange = $(`.scrollbar`).innerWidth() - $(`.scrollbtn`).innerWidth()
      var scrollBtnX = parseInt($(`.scrollbtn`).css('left'))//여기서는 객체로 쓰면 안됨. 가져올때는 중괄호 안써줌
      var scrollRatio = scrollBtnX / scrollRange //현재 위치/최대이동거리 (공의 현재위치를 최대이동거리로 나누면 됨0~1)
      var MoveRange = $(`.container`).innerWidth() - $(`.scrollbtn`).innerWidth()//300-1200=900
      var x = MoveRange * scrollRatio //최대이동거리*비율
      $(`.car${n}`).show()
    }
  
  
    $(`.scrollbtn`).draggable({
      axis: 'x',
      containment: 'parent', //이건 자식이 부모보다 작을때만 사용.부모보다 크면 못해
      drag: function () { // 객체도 함수로만들수 있음 여기서 드레그를 함수로 만들었잖아//보기 편하게 위에서 함수를 만들고 호출함
        fnScroll()
      }
  
    })
  })
  

