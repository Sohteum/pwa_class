
nextNum = 1
startTime = 10*60
time = startTime
intervalID = null //전역으로 사용해야 다들 사용할 수있자나
timeoutID = null

fnInit = () => { //윈도우 안쓰면 자동으로 전역변수
  fnPrintNextNum(nextNum)
  fnSetTimer()
  fnInitVar()
  fnSetArr(1, 25)
  fnSpawnBtn()
  fnBtnHandler()
}

fnInitVar = () => {//전부다 초기화 
  nextNum = 1
  time =startTime
}

fnPrintNextNum = (n) => {//초기숫자를 뿌림.
  document.querySelector('.next-num').innerText = n
}


fnSetTimer = () => {
  intervalID = setInterval(() => {
    time -- 
    document.querySelector('.sec').innerText = time / 10
    fnCheckGameover()
  }, 100)//0.01초마다 한번식 타임을 증가
}

fnCheckGameover = () => {
  if (time <= 0) {
    clearInterval(intervalID)
    document.querySelector('.game-over').style.display = 'flex'
  }
}