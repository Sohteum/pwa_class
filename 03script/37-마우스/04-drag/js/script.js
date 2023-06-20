{
  let mouseStart
  let isDrag //= false
  const fnDrag = (mouseStart, mouseMove) => {
    //이동량
    if(isDrag===true){
      let diffX = mouseMove - mouseStart
      if(diffX>0)diffX = 0
      //오른쪽으로도 안움직이게 해보기 
      document.querySelector(`.wrap p`).style.transform = `translateX(${diffX}px)`}
      
  }
  document.querySelector(`.wrap`).addEventListener('mousedown', (e) => {//마우스를 눌렀을때
    mouseStart = e.clientX //누르는 시점의 기록
    isDrag = true
  })
  document.querySelector(`.wrap`).addEventListener('touchstart', (e) => {
    mouseStart = e.changeTouches[0].clientX
    isDrag = true
  })

  document.querySelector(`.wrap`).addEventListener('mouseup', (e) => {//마우스를 눌렀을때
    mouseStart = e.clientX //누르는 시점의 기록
    isDrag = false
  })
  document.querySelector(`.wrap`).addEventListener('touchend', (e) => {
    mouseStart = e.changeTouches[0].clientX
    isDrag = false
  })



  document.querySelector(`.wrap`).addEventListener('mousemove', (e) => {
    fnDrag(mouseStart, e.clientX) //실시간으로 움직이는 좌표
  })
  document.querySelector(`.wrap`).addEventListener('touchmove', (e) => {
    fnDrag(mouseStart, e.changeTouches[0].clientX)

  })


}
/* 

*/