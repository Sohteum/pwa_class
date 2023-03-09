$(function () {
  var n = 0
  $(`.ex1 button`).not(`.clr`).click(function () { //button:not(.clr)
    var num = parseInt($(this).text())
    n += num //n이 클릭한 버튼 숫자만큼 증가한다.
    $(`.ex1 .output`).append(`, ${n}`)
  })
  $(`.ex1 .clr`).click(function () {
    n = 0
    $(`.ex1 .output`).text('0') //이것만 하면 캐시남은것처럼 지난 숫자가 나옴. 그래서 변수도 0으로 같이 바꿔줌
  })
})

$(function () {
  var n = 0
  var 증가량 = 0
  $(`.ex2 button:not(.clr)`).click(function () {
    /*     증가량++
        n+=증가량 */
    n += ++증가량  //증가량++하면 0이 들어와서 안됨
    $(`.ex2 .output`).append(`, ${n}`)
  })

  $(`.ex2 .clr`).click(function () {
    n = 0
    증가량 = 0
    $(`.ex2 .output`).text('0')
  })

})

$(function () {
  var n = 0
  var timeoutID
  $(`.ex3 button`).click(function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      ++n
      $(`.ex3 .output`).text(n)
    }, 1000)
  })

  /* 마지막 클릭 이후에 증가한다는것
  지연 후 실행되는것을 비동기라고 함
  다큐먼트레디도 그렇고 클릭도 그런셈이지.
  */
  /* setTimeout 1000이 1초 밀리세컨즈임. 100 은 0.1초 /특정시간이 지나면 실행*/
  //스택이 쌓임. 나는 마지막 클릭 이후에 1을 올리려고 했는데 클릭을 여러번 하면 내가 클릭한 만큼 숫자가 올라가버림 그래서 아까클릭한거 취소 클릭 아까클릭한거 취소 클릭 이렇게. 그래서 클리어 타임아웃을 쓰고 셋타임아웃에 행동이름을 설정함. 클리어타임아웃에 행동이름을 넣음.그럼 취소하겠다는거지 /근데 또 언디파인 에러가 뜸 그래서 빈 예약번호를 한번 넣어줌timeoutID
  //처음시작할때 취소가 같이 실행되니까 실행도 안하고 취소해?이렇게 됨. 그래서 아직 취소 안햇지만 위에 변수이름으로 넣어주면 ..빈예약넘버...
})

$(function () {
  var n = 0
  var intervalID
  $(`.ex4 .btn1`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex4 .output`).text(++n)
    }, 1000)
  })
  $(`.ex4 .btn2`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex4 .output`).text(--n)
    }, 1000)
  })
  //아래 이벤트에서 마이너스되면 얘도 중지 위에도 같이 중지해야하니까 같은 예약번호(테이블)을 가지고 같이 취소를하는거지. 
  $(`.ex4 .btn3`).click(function () {
    clearInterval(intervalID)
  })
  //감소가되던 증가가되던 다 취소할거야 의미
  //인터벌, 타임아웃 이벤트에서는 취소가 중요. 그러니 취소를 먼저만들자! 그냥 만들면 에러나니까 빈예약표를 먼저 만들자!예약번호는 같이 하는 애들끼리는 같이 줘야함. 그래야 둘다 한방에 멈출수있지요
})

$(function () {
  var n = 0
  var intervalID = setInterval(function () {
    $(`.ex5 .output`).text(++n)
  }, 1000)
  $(`.ex5 .btn1`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex5 .output`).text(++n)
    }, 1000)
  })
  $(`.ex5 .btn2`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex5 .output`).text(--n)
    }, 1000)
  })
  $(`.ex5 .btn3`).click(function () {
    clearInterval(intervalID)
  })
})

$(function () {
  var n = 0
  var 클릭가능 = true
  $(`.ex6 button`).click(function () {
    if (!클릭가능) return false;
    //클릭이 true인 상태에서 실행되는코드
    클릭가능 = false;//다음부터는 클릭못해
    setTimeout(function () {//1초후에는 클릭이 가능해
      클릭가능 = true;
    }, 1000)
    $(`.ex6 .output`).text(++n)
    //트루면 버튼을 사용하겠다. 폴스면 버튼을 사용하지안ㅎ겠다 .일단 처음에는 클릭을 할 수 있어야함. 트루면 빠져나와서 1을 시작해 근데 조건에서 클릭가능을 폴스라고 집어넣으면 .그러니까 처음에는 클릭이 되는데 두번재부터 클릭이 안됨. 처음에는 트루니까 피해서 와. 근데 이제부터 클릭가능이니까 폴스가돼서 클릭이안되는걸로 바뀜. 우리의 목표는 1초후에는 클릭가능응로 바뀌는거지. 1초후에 클릭가능넣기
    //3번에서 클리어를 했는데 여기서는 안하는 이유, 1초후에 1증가. 이거는 1초를 안기다리고 여러번클릭하면 문제가 생기는거.따다다 하고 여러번클릭하면 한번에 올라가잖아. 나는 여러번 연클릭해도 마지막 클릭 이후 한번만 올리고싶은거지.
    //여기서는 1초마다 클릭이 가능하니까 여러번 해봐야 1초 기다려야 클릭하면 숫자가늘어나지. 그러니까 
  })


})


$(function () {
  var n = 0
  var timeoutID
  var intervalID
  $(`.ex7 .btn1`).click(function () {
    clearTimeout(timeoutID)
    clearInterval(intervalID)
    timeoutID = setTimeout(function () {
      setInterval(function () {
        $(`.ex7 .output`).text(++n)
      }, 1000)
    }, 3000)
    //예를 들어 3년 후면 매일 학교가야해 매일은 반복, 3년마다매일은 아니지. 3년은 반복이 아니야. 이건 셋타임아웃이 (펑션() {셋인터벌(3년후에할일:매일학교가기},3년)
    //연타 눌러보면 클리어 해야할지 알수잇음 눌러보자
    //그래서 클리어타임을 했는데 그래도 연타하면 이상해 왜냐면 클리어타임만 했지 인터벌은 그대로 계속 쌓이기때문.그러니까 클리어인터벌도 만들어주는거야
  })

})



 $(function () {
  var x = 0
  var timeoutID
  $(`.ex8 button`).click(function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      x += 50
      if (x > 250) { x = 250 }
      $(`.ex8 div`).css({ 'left': `${x}px` })
      //키(백틱노노):키밸류
    }, 500);
  });
  //멈추면 그다음에 움직이게, 반대쪽으로 가는것도 만들어보기
}) 



$(function () {

  function play() {
    n++
    if (n > 5) { n = 1 }
    if (n < 1) { n = 5 }
    $(`.ex9 img`).hide()
    $(`.img${n}`).show()
  }
  play()

  var n = 0
  var timeoutID
  var intervalID
  timeoutID = setTimeout(function () {
    intervalID = setInterval(function () {
      ++n
      play()
    }, 500)
  }, 0)

  $(`.ex9 .container .start`).click(function () {
    timeoutID = setTimeout(function () {
      intervalID = setInterval(function () {
        ++n
        play()
      }, 500)
    }, 0)
  })

  $(`.ex9 .container .stop`).click(function () {
    clearInterval(intervalID)
    clearsetTime(setTimeID)
  })

})

