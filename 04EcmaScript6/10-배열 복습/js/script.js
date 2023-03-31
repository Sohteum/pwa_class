// {
//   var cnt = 0
//   document.querySelector(`.ex1 button`).addEventListener('click',e => {
//     //이름을 일단 가져와야함. 인풋을 먼저 찾음
//     cnt ++ //클릭을 처음했을때만 명단 배열을 만들어준다. 그뒤에는 부활 노노
//     if(cnt ===1) {

//     }
//     let str = document.querySelector(`.ex1 input`).value
//     let arr = str.split(',')
//     //배열을 계속 새로 만드는게 문제야. 어제는 이미 만들어진 배열에서 지우는걸 했는데 클릭할때마다 한개씩지워야되는데 클릭할때마다 배열을 새로 셋팅해주면안됨. 그래서 어제는 밖에다가 배열을 만들었잖아 증감연산 밖에서 선언 안에서 선언이랑 같은문제. 클릭하면 값을 가져오긴 해야하는데 초기화가되면 안되니까. 처음클릭일때만 저 값을 만들어놓고 시작함. 뽑힌놈은 제거한다. 그러니까 클릭을 횟수를 셈. 클릭할때마다 카운팅을 증가. 증감연산을 초기화할 변수가 필요 밖에서 선언을 함. 
//     console.log(arr);
//   })
// }
{
  let click = false
  let arr = []
  document.querySelector(`.ex1 .print`).addEventListener('click', e => {

    if (!click) {
      let str = document.querySelector(`.ex1 input`).value
      arr = str.split(',') //[김,이,박] 랜덤하게 길이중하나뽑기
      click = !click //click =true 로 바꿔준거임
    }//여기는 처음클릭인지 알아보려고

    let rand = Math.floor(Math.random() * arr.length)

    document.querySelector(`.ex1 .output`).append(
      //배열의 랜덤번째를 어팬드함. 배열의 중간을 지우는게 어려움 그게 splice
      arr[rand].trim(),
      //문자열의 앞뒤여백을 없애버림. 띄어쓰기를 다 제거함. 중요한 메소드
      document.createElement('br')

    )
    arr.splice(rand, 1)
    if (arr.length === 0) {
      // e.target.setAttribute('disabled',true) 
      // 커런트타겟은 또다른 부모자식이 있을때.  
      e.target.disabled = true  //$(`button`).prop('disabled', true)
    }
    console.log(arr);
    //어제는 배열의 길이가 0이 되었을때 리턴폴스함.
  }) / click

  document.querySelector(`.ex1 .reset`).addEventListener(`click`, e => {
    document.querySelector(`.ex1 .print`).disabled = false
    //$().html('') $().empy()  $().remove()
    document.querySelector(`.ex1 .output`).innerHTML = ''
    document.querySelector(`.ex1 input`).value = ''
    document.querySelector(`.ex1 input`).focus() //$().focus

    click = false
    arr = []

  })
}//ex1

{
  let arr = []
  document.querySelector(`.ex2 form`).addEventListener(`submit`, e => {
    e.preventDefault()
    let name = document.querySelector(`.ex2 input`).value.trim() //여백 지우려고 트림
    document.querySelector(`.ex2 .list`).append(
      name,
      document.createElement('br'),
    )
    document.querySelector(`.ex2 input`).value = ''
    //append는 글자를 이어붙이겠다는 메소드니까 그 안에는 글자는 들어갈수있어도 행위는 들어갈수없다 그러니까 이걸밖에 써줘야되는거야
    arr.push(name) //배열을 푸쉬 해줘야 이ㅆ다가 ㅏ이 배열응ㄹ 가지고 랜덤하게 출력을 하니까
  })

  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let leng = arr.length
    for (let i = 1; i <= leng; i++) {
      let rand = Math.floor(Math.random() * arr.length)
      //반복해서 이어붙일거니까 어펜드
      document.querySelector(`.ex2 .output`).append(
        `${leng + 1 - i}등은 `,
        arr[rand],
        document.createElement(`br`)
      )
      arr.splice(rand, 1)
    }
  })
}


{
  let arr = []
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex3 .output`).innerHTML = ''
    let num1 = parseInt(document.querySelector(`.ex3 .start`).value)
    let num2 = parseInt(document.querySelector(`.ex3 .end`).value)
    let start = num1
    let end = num2
    let rand
    if (num2 < num1) {
      start = num2
      end = num1
    }
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
    let leng = end - start + 1
    for (let i = 1; i <= leng; i++) { //만약 여기서 arr.length를 사용하면 아래에서 랜덤한거가 하나씩 삭제되어서 배열의 길이가 줄어버림. 그래서 상관없는 leng을 새로 선언해서 돌려줌.
      rand = Math.floor(Math.random() * arr.length)
      document.querySelector(`.ex3 .output`).append(
        arr[rand],
        document.createElement(`br`)
      )
      arr.splice(rand, 1)
      console.log(i);
    }
  })
}


// {
//   let click = false //유효성검사랑 비슷한데 여기서는 저 아래 클릭이랑 연결해서 보면됨
//   let arr = []
//   document.querySelector(`.ex3 button`).addEventListener('click', e => {
//     document.querySelector(`.ex3 .output`).innerHTML = ''
//     if (!click) { //위에서 클릭은 폴스라고 선언했으니까 폴스가 아니면 들어오는건데 여기서 배열을 완성해서 트루가 되면 패싱해서 지나감. 셋타임아웃같은데서는 초가 있으니까 그동안 건드리지마!!
//       let num1 = parseInt(document.querySelector(`.ex3 .start`).value)
//       let num2 = parseInt(document.querySelector(`.ex3 .end`).value)
//       let start = num1
//       let end = num2
//       let rnd
//       if (num1 > num2) {
//         start = num2
//         end = num1
//       }
//       for (let i = start; i <= end; i++) {
//         arr.push(i)
//       }//for
//       let leng = end - start + 1
//       for (let i = 1; i <= leng; i++) {
//         rnd = Math.floor(Math.random() * arr.length)
//         document.querySelector(`.ex3 .output`).append(
//           `${i}등은`,
//           arr[rnd],
//           document.createElement(`br`)
//         )
//         arr.splice(rnd, 1)
//       }//for
//     }
//     click = !click
//   })

// }


// {
//   let arr = []// 클릭할때마다 지워지면 안되니까 밖에 만들어줌
//   for (let i = 1; i <= 10; i++) {//내가 다 적기 귀찮으니까 포구문 돌려줌
//     arr.push(i)
//   }// 포구문 돌린 값을 arr에  push함
  
//   document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
//     document.querySelector(`.ex4 .output`).innerHTML = ''

//     let arr = []// 클릭할때마다 지워지면 안되니까 밖에 만들어줌
//     for (let i = 1; i <= 10; i++) {//내가 다 적기 귀찮으니까 포구문 돌려줌
//       arr.push(i)
//     }//클릭한게 지워졌으니까 여기서 배열을 다시 만들어줘야함

//     for (let i = 1; i <= 10; i++){
//       let rand = Math.floor(Math.random()*arr.length)
//       //랜덤번호뽑기 
//       document.querySelector(`.ex4 .output`).append(arr[rand], ',')
//       //하나 뽑고 그거 지워야함 그 배열값이 다시 나오면 안되니까
//       arr.splice(rand,1)
//     }
//   })//언디파인 나오는 이유, 클릭하고 나면 배열을 지워버리니까. 두번째클릭할때는 

// }


{
  // let arr = []//배열을 사용자가 넣은 값으로 해준고싶다면? 배열의 길이만큼 돌려주면 되고, 시작번호를 첫번째 애한테 끝번호를 두번째 애한테 주면 됨. 시작과 끝은 유저가 정하기로 함
  // for (let i = start; i <=end; i++) {//내가 다 적기 귀찮으니까 포구문 돌려줌
  //   arr.push(i)
  // }// 포구문 돌린 값을 arr에  push함
  
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex4 .output`).innerHTML = ''
    
    let start = parseInt(document.querySelector(`.ex4 .start`).value)
    let end = parseInt(document.querySelector(`.ex4 .end`).value)
    let arr = []// 클릭할때마다 지워지면 안되니까 밖에 만들어줌
    for (let i = start; i <= end; i++) {//내가 다 적기 귀찮으니까 포구문 돌려줌
      arr.push(i)
    }//클릭한게 지워졌으니까 여기서 배열을 다시 만들어줘야함

    for (let i = start; i <= end; i++){
      let rand = Math.floor(Math.random()*arr.length)
      //랜덤번호뽑기 
      document.querySelector(`.ex4 .output`).append(arr[rand], ',')
      //하나 뽑고 그거 지워야함 그 배열값이 다시 나오면 안되니까
      arr.splice(rand,1)
    }
  })//언디파인 나오는 이유, 클릭하고 나면 배열을 지워버리니까. 두번째클릭할때는 

}

{
  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex5 .output`).innerHTML = ''
    
    let start = parseInt(document.querySelector(`.ex5 .start`).value)
    let end = parseInt(document.querySelector(`.ex5 .end`).value)
    let arr = []
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
    // let arrCopy = [...arr] //전개연산자(카피하는 방법임. 무조건 똑같이 카피하므로 랜덤으로 숫자를 바꿀수는 없어서 지금 사용할 수 없음 나중에 자세히 다룰예정)
    let arrCopy = []
    let leng = arr.length //원본 배열의 길이, 초기값을 적어두면 변해도 이걸 사용해서 변하지 않도록 해주는거야
    for(let i=1; i<=leng; i++){//<이렇게 하면 계속 지우면서 길이가 바뀌는데 그럼 배열이 3번반복이었다가 지우고나면 2번반복이었다가 이렇게 반복이 다라지니까 안돼
    let ranNum = Math.floor(Math.random()* arr.length) // 원본 배열의 길이에서 하나의 번호를 랜덤하게 뽑는다
    arrCopy.push(arr[ranNum])//뽑힌 번호에 해당하는 원본배열의 값을 카피본에 집어넣는다
    arr.splice(ranNum,1)//원본배열에서 뽑힌 번호를 제거(그래서 콘솔출력하면 원본이 안나오고 랜덤넘버만 나옴)
    }
    let str = arrCopy.join('/') //여기서 그냥 출력을 안하고 문자열 등으로 바꿔준다 중간에 뭘 넣을지는 내가 정하면 됨!!
    document.querySelector(`.ex5 .output`).innerText= str//배열을 통ㅌ재로 출력하는건 굉장히 안좋은 습관임!
  })
}