{
  const 밀만들기 = function () {
    setTimeout(function () {
      console.log('밀완성')
      setTimeout(() => {
        console.log('밀가루완성')
        setTimeout(() => {
          console.log('빵완성')
          setTimeout(() => {
            console.log('포장완료')

          }, Math.ceil(Math.random() * 3) * 1000) //포장이 완성되는 시간
        }, Math.ceil(Math.random() * 3) * 1000) //빵이 완성되는 시간
      }, Math.ceil(Math.random() * 3) * 1000) //밀가루가 완성되는 시간
    }, Math.ceil(Math.random() * 3) * 1000) //밀이 완성되는 시간
  }//fn
  document.querySelector('.ex1 button').addEventListener('click', e => {
    밀만들기()
  })
}
//이전에는 이런식으로 코딩했는데 중간 하나라도 바뀌면 찾아서 수정하기가 어려움
//가독성도 떨어짐
//callbackHell

{
  const 밀만들기함수 = (재료) => {//대부분이 파라미터를 받는다. 만드는데 얼마나 걸리는지 모르지만 반드시 다음에가 이전 애한테 의존 무조건 리턴뉴프로미스콜백
    return new Promise((resolve, reject) => {//얘가 나오면 무조건 다른애가 기다리고 있다는 뜻 하나, 혹은 두개파람이 나오는데 하나는 성공시, 하나는 실패시
      console.log(`${재료}를 받아서 밀 생산 시작`)
      setTimeout(() => {
        console.log('밀완성');
        resolve('밀') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000) //1~3초 정도 걸린다고 가정. 랜덤시간이 흐르고 나서 다음애가 실행될수있도록 resolve를 해줘야함.
    })
  }//밀만들기함수

  const 밀가루만들기함수 = (재료) => {
    console.log(`${재료}를 받아서 밀가루 생산 시작`)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('밀가루 완성');
        resolve('밀가루') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
    })
  }//밀가루만들기
  const 빵만들기함수 = (재료) => {
    console.log(`${재료}를 받아서 빵 생산 시작`)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('빵 완성');
        resolve('빵') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
    })
  }//빵만들기
  const 빵포장함수 = (재료) => {
    console.log(`${재료}를 받아서 빵포장 시작`)
      setTimeout(() => {
        console.log('빵포장 완성');
        resolve('빵완성') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
  }//빵포장

  document.querySelector('.ex2 button').addEventListener('click', e => {
    밀만들기함수('밀씨앗')
      .then((result) => {//여기서 먼저 리졸브를 해줘야 아래 함수가 실행됨
        return 밀가루만들기함수(result)
      }).then((result) => {//여기서는 밀가루
        return 빵만들기함수(result)
      }).then((result)=>{
        빵포장함수(result)
      })
  })
}
//다 기다리고있는데 포장만 안기다리고있음 그러면 얘는 promise 를 할 필요가 없음
//네개중에 세개가 비동기임

//일이 순차적으로 진행될려면 비동기함수
//일단 프로미스로 만드는거야 얘는 파람을 두개받아 보통 리젝트는 안써
//리졸브로 바톤을 계속 넘겨주는것
//

//함수가 자연스럽게 끝나자마자 실행이 됨.
//요새는 이걸 안좋아함 비동기안에서 비동기문을 작성하는게 있는데 


//비동기는 무조건 promise는 필요함. 여기에 then이냐 async await이냐 인거.
//뉴프로미스 안에 덴은 들어가는데 어웨잇은 안돼 마지막에 들어가는거임.
{
  const 밀만들기함수 = (재료) => {//대부분이 파라미터를 받는다. 만드는데 얼마나 걸리는지 모르지만 반드시 다음에가 이전 애한테 의존 무조건 리턴뉴프로미스콜백
    return new Promise((resolve, reject) => {//얘가 나오면 무조건 다른애가 기다리고 있다는 뜻 하나, 혹은 두개파람이 나오는데 하나는 성공시, 하나는 실패시
      console.log(`${재료}를 받아서 밀 생산 시작`)
      setTimeout(() => {
        console.log('밀완성');
        resolve('밀') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000) //1~3초 정도 걸린다고 가정. 랜덤시간이 흐르고 나서 다음애가 실행될수있도록 resolve를 해줘야함.
    })
  }//밀만들기함수

  const 밀가루만들기함수 = (재료) => {
    console.log(`${재료}를 받아서 밀가루 생산 시작`)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('밀가루 완성');
        resolve('밀가루') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
    })
  }//밀가루만들기
  const 빵만들기함수 = (재료) => {
    console.log(`${재료}를 받아서 빵 생산 시작`)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('빵 완성');
        resolve('빵') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
    })
  }//빵만들기
  const 빵포장함수 = (재료) => {
    console.log(`${재료}를 받아서 빵포장 시작`)
      setTimeout(() => {
        console.log('빵포장 완성');
        resolve('빵완성') //다음 함수를 실행해도 괜찮아^^라는 뜻이고 그럼 그 다음 함수가 재료를 쓸수있게 넘겨줌. 
      }, Math.ceil(Math.random() * 3) * 1000)
  }//빵포장

  document.querySelector('.ex3 button').addEventListener('click', async (e) => {
    let 재료
    재료 = await 밀만들기함수('밀씨앗') //await를 사용하는 중괄호 앞에 반드시 async가 붙어야함
    재료 = await 밀가루만들기함수(재료) //await를 사용하는 중괄호 앞에 반드시 async가 붙어야함
    재료 = await 빵만들기함수(재료) //awiat를 사용하는 중괄호 앞에 반드시 async가 붙어야함
     빵포장함수(재료) //awiat를 사용하는 중괄호 앞에 반드시 async가 붙어야함
  })

  /* 
  async function fn() {
    await비동기함수()
  }
  const fn = async function(){
    await 비동기함수()
  }
  const fn = async() => {
    await 비동기함수()
  }

  */

}