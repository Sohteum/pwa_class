{

  //  arr = [
  //   [홍길동,24,남],
  //   [],
  //   [],
  //  ]
  //  arr[1][0]

  //  arr= [
  //    {이름:홍길동, 나이:32, 성별:남},
  //    {},
  //    {}
  //   ]
  //   arr[1].이름 -> 아무개
  //   arr.find((v)=>{
  //    v.성별 ==='여'
  //   })
  //클릭할대마다 배열이 생성되는데 배열안에는 이름, 나이, 성별들어감. 그리고 그 배열 안에 계속 이름 나이 성별 계속 이어서 들어가게됨 그래서 몇번째인지 계속 알아내야하는거지. 찾기가 힘들어. 데이터가 중구난방이면 안돼.
  //그래서 첫번째방법 : 배열을 배열로 감싼다(old way). 근데 찾을때 직관적이지가 못함. arr[1][0]여기서 알수있는정보가 없잖아 그래서 가독성이 떨어지고 설명이 필요함 //만약 여자만 찾고싶다. 이러는 경우에는 복잡해짐

  //두번째 방법 : 배열 안에 객체를 넣음. 하나의 값에 여려개의 값을 넣을수있다는 둘의 공통점이 있음. 그래서 어레이에 객체로 이름 나이, 성별을 넣어주면 이걸 찾고자 할때는 
  //arr[1].이름  이렇게 하면 아까와 동일

  //객체는 정보를 빨리 찾을려고
  //배열은 정보를 누적할려고
}

// 배열 =[홍길동, 아무개]
// 홍길동 ={
//   성:홍,
//   이름:길동,
//   나이:25,
//   성별:여,
// }
// 홍길동 ={
//   성:홍,
//   이름:길동,
//   나이:25,
//   성별:여,
// }
// 홍길동.성 ->홍
// 명단배열[0].성 ->홍
// 명단배열[1].이름 ->무개


{
  // let 명단배열 = []
  // document.querySelector(`.ex1 .add`).addEventListener(`click`, e => {
  //   let 이름 = document.querySelector(`.ex1 .name`).value
  //   let 나이 = document.querySelector(`.ex1 .age`).value
  //   let 성별 = document.querySelector(`.ex1 .gender:checked`).value
  //   //변수의 이름과 객체의 키는 다른거야 확실히 알아두도록!!!
  //   //하지만 위에 변수 이름이랑 아래 키값은 같아.
  //   let 사람객체 = {
  //     이름, // 이름 : 이름, 변수명과 키값이 같으면 생략가능
  //     나이, // 나이 : 나이,
  //     성별, // 성별 : 성별,
  //   }
  //   명단배열.push(사람객체)

  //   console.log(명단배열, 사람객체);
  // })


  let 명단배열 = []
  document.querySelector(`.ex1 .add`).addEventListener(`click`, e => {
    let 이름 = document.querySelector(`.ex1 .name`).value
    let 나이 = document.querySelector(`.ex1 .age`).value
    let 성별 = document.querySelector(`.ex1 .gender:checked`).value
    let 사람객체 = {
      이름,
      나이,
      성별,
    }
    명단배열.push(사람객체)
    console.log(명단배열, 사람객체);
  })


  // document.querySelector(`.ex1 .print`).addEventListener(`click`, e=>{
  // document.querySelector(`.ex1 .output`).innerHTML=''
  // for(let i=1; i<=명단배열.length; i++)
  // document.querySelector(`.ex1 .output`).append(`
  // 인원수 ${명단배열.length},
  // `)
  // })

  // document.querySelector(`.ex1 .print`).addEventListener(`click`, e => {
  //   document.querySelector(`.ex1 .output`).innerHTML =
  //     `인원수 ${명단배열.length}명 <br>`
  //   //여기서는 이너에 넣는거니까 br을 그냥 넣어도 되고 아래에 어팬드에서는 붙여넣는거니까 createElement로 만들어서 넣어주는거지
  //   for (let i = 0; i < 명단배열.length; i++)
  //     document.querySelector(`.ex1 .output`).append(
  //       `이름 :${명단배열[i].이름}, `,
  //       `나이 :${명단배열[i].나이}, `,
  //       `성별 :${명단배열[i].성별}, `,
  //       document.createElement('br')
  //     )
  //   //삼항연산자를 사용하면 되는데 콤마를 넣는게 아니고 ${}이런걸넣은다음에 어레이랭뜨가 ~하면 ${}는 안나와 하고 삼항연산하면 되는거지  
  // })

  document.querySelector(`.ex1 .print`).addEventListener(`click`, e => {
    document.querySelector(`.ex1 .output`).innerHTML =  `인원수${명단배열.length}명<br>`
    for(let i = 0; i< 명단배열.length; i++)
    document.querySelector(`.ex1 .output`).append(
      `이름:${명단배열[i].이름},`,
      `나이:${명단배열[i].나이},`,
      `성별:${명단배열[i].성별},`,
      document.createElement('br')
    )
  })




}


// {
//   let obj = {
//     name: 'mimi', //만약에 mimi가 ''가 없으면 위에서 변수선언된걸 찾고 없으면 오류
//     //mimi라는 변수를 만들던가//대괄호가 들어가면 스크립트 문법을 작성할 수 있는거
//     //name에 백틱을 쓰고싶으면 [`name`]를 쓰면 됨. 
//     //[]만 써도 에러 이 의미는 []안에 있는 변수가 위에 있다는것.
//     //이름= name이라는 변수를 만들고 obj.이름 이렇게 찾아야함.
//     age: 44,
//     gender: 'male',
//     1: 'one'
//     'birth-day': '2023-1-1' //이런식일때 벌쓰데이를 불러올때는 ['birth-day']한다는것!
//   }
//   document.querySelector(`.ex2 button`).addEventListener(`click`, e => {

//     obj['name'] = 'jane' //obj.name='jane'
//     obj['1']//obj.1 이렇게는 찾을 수 없으니까 변수는 못온다. 키는 숫자를 쓸 수 있는데 키를 찾을 때는 문자열로 변환해서 찾아야 함
//     //숫자나 여백이 포함된 일반 변수형태로 찾을 수 없는 객체의 키값을 찾는 문법
//     console.log(obj.name);
//   })
// }

// 객체의 키랑 변수는 아무 상관이 없는데 그러고 싶으면 대괄호를 넣어주면 된다.
// 즉 객체의 키를 호출할때 대괄호는 변수형태로 찾을 수 없는 문자값을 호출시 사용
// let a = 'name'
// let obj = {
//  a :'michle',  //obj.a -> michle
// [a]: 'michle',  // obj.name -> michle
// }

{
  let todo = []
  document.querySelector(`.ex3 .add_todo`).addEventListener(`click`, e => {
    let date = document.querySelector(`.ex3 p input[type=date]`).value
    let time = document.querySelector(`.ex3 p input[type=time]`).value
    let name = document.querySelector(`.ex3 p input[type=text]`).value
    let todoList = {
      date,
      time,
      name,
    }
    todo.push(todoList)
    document.querySelector(`.ex3 .output`).append(
      // for(let i=)
      `날짜 : ${date}`,
      document.createElement('br'),
      `시간 : ${time}`,
      document.createElement('br'),
      `일정명 : ${name}`,
      document.createElement('br'),
      `일정이 추가되었습니다.`,
      document.createElement('hr'),
    )


    console.log(date, time, name, todoList);
  })


document.querySelector(`.ex3 .add_todo`).addEventListener(`click`, e=>{
  let date = document.querySelector(`.ex3 input[type=date]`).value
  let time = document.querySelector(`.ex3 input[type=time]`).value
  let name = document.querySelector(`.ex3 input[type=text]`).value
  let todoList ={
    date,
    time,
    name,
  }
})







  document.querySelector(`.ex3 .add_check`).addEventListener(`click`, e => {
    document.querySelector(`.ex3 .output`).innerHTML = '';
    // let br = document.createElement('br')
    for (let i = 0; i < todo.length; i++) {
      //여기서 랭쓰에서 1을 빼던지 아니면 <=에서 <만 쓰던지
      document.querySelector(`.ex3 .output`).append(
        `일정명 : ${todo[i].name}`,
        document.createElement('br'),

      )
    }
  })

  document.querySelector(`.ex3 .del`).addEventListener(`click`, e => {
    document.querySelector(`.ex3 .output`).innerHTML = '';
  })
}


// document.querySelector(`.ex3 .output`).innerHTML =
// `날짜 : ${date} <br>
// 시간 : ${time} <br>
//  일정명 : ${name} <br>
// 일정이 추가되었습니다.`

{
  let arr = [] //클릭할때마다 배열이 초기화되면 안되니 밖에서 만들어야함
  document.querySelector(`.ex4 .add`).addEventListener(`click`, e => {
    let date = document.querySelector(`.ex4 input[type=date]`).value
    let time = document.querySelector(`.ex4 input[type=time]`).value
    let title = document.querySelector(`.ex4 input[type=text]`).value
    let obj = {
      date,
      time,
      title,
    }
    arr.push(obj)
    document.querySelector(`.ex4 .output`).innerHTML = `
일정이 추가되었습니다 <br>
날짜 :${obj.date} <br>
시간 :${obj.time}<br>
일정명 :${obj.title}<br>
`
  })
  document.querySelector(`.ex4 .print`).addEventListener(`click`, e => {
    document.querySelector(`.ex4 .output`).innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
      /*     let br = document.createElement(`br`) //배열의 길이만큼 만든것. 그래서 상관없는데 배열의 밖에서 만들면 하나만 만든거라서 하나만 됨
          let hr = document.createElement(`hr`)  */
      document.querySelector(`.ex4 .output`).append(

        `날짜 :${arr[i].date}`, document.createElement('br'),
        `시간 :${arr[i].time}`, document.createElement('br'),
        `일정명 :${arr[i].title}`, document.createElement('br'),

      )
    }
  })
}

{
  let obj = { //객체에 n개가 들어있는데 그걸 알아낼 방법이 없을때 객체를 배열로 변환하면 몇개가 들어있는지 알수있다. api사용할때 유용.innerhtml로는 한개씩이니까불가능하고 
    1: 'one',
    2: 'two',
    3: 'three',
  }

  document.querySelector(`.ex5 button`).addEventListener('click', e => {
    let objToArray = Object.entries(obj)
    console.log(objToArray);
    //Math도 하나의 객체야 내장객체. 그 안에 배열이 여러개 들어있는것. 랜덤도 내장함수라고 하잖니. 내장함수와 메소드는 같은말임. 대표적으로 alert내장함수인데 메소드라고 함. 원래 window.alert. 
    //여기 오브젝트도 내장객체인데 여기안에 엔트리지라는 메소드가 있음
    for (let i = 0; i < objToArray.length; i++) {
      let br = document.createElement('br')
      document.querySelector(`.ex5 .output`).append(

        `${objToArray[i][0]} : ${objToArray[i][1]}`, br,
      )
    }
  })
}/* ex5 */