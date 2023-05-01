{
  let arr = [3, 1, 2, 5, 4]
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    let arrCopy = [...arr]
    arrCopy.sort()
    console.log(arrCopy);
  })

}
{
  let arr = [3, 1, 2, 5, 11, 30]
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let arrCopy = [...arr]
    arrCopy.sort((a, b) => a - b)//숫자기준이 아니고 글자기준으로 나옴. ㄱ ㅡ래서 이렇게 공식처럼 사용함
    console.log(arrCopy);
  })

}
{
  let arr = ['b', 'c', 'A', 'd']
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    let arrCopy = [...arr]
    arrCopy.sort((a, b) => {
      a = a.toLocaleLowerCase()    //대소문자를 한가지로 통일
      b = b.toLocaleLowerCase()    //대소문자를 한가지로 통일
      if (a < b) return -1
      if (a > b) return 1
      if (a === b) return 0
    })
    console.log(arrCopy);
  })

}
{
  // let arr = [
  //   { 이름: '이', 나이: 22 },
  //   { 이름: '박', 나이: 60 },
  //   { 이름: '김', 나이: 11 },
  // ]
  // let fn = (arrParam) => {
  //   document.querySelector(`.ex4 .output`).innerHTML = ''
  //   arrParam.forEach(v => {
  //     let br = document.createElement(`br`)
  //     document.querySelector(`.ex4 .output`).append(
  //       `${v.이름},`,
  //       `${v.나이},`, br
  //     )
  //   })
  // }
  //   //호이스팅이 발생하지 않도록 let fn = function(){} <= function fn()
  //   document.querySelector(`.ex4 .btn1`).addEventListener(`click`, e => {

  //     let arrCopy = [...arr]
  //     arrCopy.sort((a, b) => {
  //       if (a.이름 > b.이름) return 1
  //       if (a.이름 < b.이름) return -1
  //       if (a.이름 === b.이름) return 0
  //       //여기는 이름순정렬
  //     })
  //     fn(arrCopy)
  // 
  //     document.querySelector(`.ex4 .output`).innerHTML = ''
  //     arrCopy.forEach(v => {

  //       let br = document.createElement(`br`)
  //       document.querySelector(`.ex4 .output`).append(
  //         `${v.이름},`,
  //         `${v.나이},`, br
  //       )

  //     })
  //   })
  // document.querySelector(`.ex4 .btn2`).addEventListener(`click`, e => {
  //   let arrCopy = [...arr]
  //   arrCopy.sort((a, b) => a.나이 - b.나이)
  //   //아까는 그냥 숫자였으니까 된거고 여기는 객체니까 a.나이 
  //  
  // })
  // fn(arrCopy)


}

{
  let arr = [
    /* 
    {id:1  , name : '식사', date:2023-12-12, time : am-08-30},
    {id:1  , name : '식사', date:2023-12-12, time : am-08-30},
    {id:1  , name : '공부', date:2023-12-12, time : pm-08-30},
    */
  ]
  document.querySelector(`.ex5 .btnAdd`).addEventListener(`click`, e => {
    let id = Date.now() //time stamp
    let name = document.querySelector(`.ex5 input[type=text]`).value
    let date = document.querySelector(`.ex5 input[type=date]`).value
    let time = document.querySelector(`.ex5 input[type=time]`).value
    let obj = {
      id,
      name,
      date,
      time,
    }
    arr.push(obj)
    console.log(arr);
  })/* click */
  //날짜, 시간, 일정은 겹칠수있음. 근데 지울려면 유일해야하고 그건 id. 증감연산은 안됨. 마지막 아이디를 찾아서 거기서부터 다시 아이디를 부여함. 그래서 확실한 방법으로 현재의 숫자를 생성함.
  document.querySelector(`.ex5 .btnName`).addEventListener(`click`, e => {
    /* 정렬 */
    let arrCopy = [...arr] //    html에서 받아오는 문자와 숫자 모두 글자임.
    arrCopy.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      if (a.name === b.name) return 0
    })
    /* 출력 */

    let output = document.querySelector(`.ex5 .output`)
    output.innerHTML = ''
    arrCopy.forEach(v => {
      let li = document.createElement(`li`)
      li.innerHTML =
        `
      일정명 : ${v.name}, <br>
      날짜 : ${v.date}, <br>
      시간 : ${v.time},<br>
      <button value=${v.id}>삭제</button>
      `
      li.querySelector('button').addEventListener(`click`, e => {
        let liID = e.target.value
        e.target.parentElement.remove()   //이건 화면에 나오는거 지우는거고 원본어레이를 지우지 않으면 계속 나옴 그래서 filter를 사용해서 바꿔줌. 
        arr = arr.filter(v => {
          return v.id !== parseInt(liID)
        }) //새로운 배열이 나옴
      })
    })
    output.append(li)
  })
  document.querySelector(`.ex5 .btnDate`).addEventListener(`click`, e => {
    let arrCopy = [...arr] //    html에서 받아오는 문자와 숫자 모두 글자임.
    // let arrCopy.slice(0, 2) //이걸 모든 배열에 다 지워야되는데
    arrCopy.sort((a, b) => {
      if (a.date.time > b.date.time) return 1
      if (a.date.time < b.date.time) return -1
      if (a.date.time === b.date.time) return 0
    })
// a-b 오름차순 정렬
// b-a 내림차순 정렬


    /* 출력 */

    let output = document.querySelector(`.ex5 .output`)
    output.innerHTML = ''
    arrCopy.forEach(v => {
      let li = document.createElement(`li`)
      li.innerHTML =
        `
        일정명 : ${v.name}, <br>
        날짜 : ${v.date}, <br>
        시간 : ${v.time},<br>
        <button value=${v.id}>삭제</button>
        `
    })

  })




}//시간 순 만들때 데잇이랑 타임이랑 이어붙여야함. 

// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }
//   sum = 0
//   document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
//     let nArr = arr.map(v => sum += v)
//     nArr.forEach(v => {
//       document.querySelector(`.ex4 .output`).append(`${nArr}`)
//     })
//   })
// }

// map < U > (callbackfn: (value: T, index: number, array: T[]) => U, thisArg ?: any): U[];
// /**
//  * Returns the elements of an array that meet the condition specified in a callback function.
//  * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
//  * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
//  */