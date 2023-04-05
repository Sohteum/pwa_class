{
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }
  console.log(arr);
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    // let arr2x = []
    // for(let i=0; i <= arr.length; i++) {
    //   arr2x.push(arr[i]*2)
    // } 예전방법
    let arr2x = arr.map(v => v * 2)//리턴을 안하면 널이 나옴 중괄호랑 리턴빼고 리팩토링
    console.log(arr2x);
  })
}/* ex1 */

{
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    arr.filter(v => {
      return v % 2 === 0 //리턴뒤에 조건식이 항상 나옴
    })
    console.log(arr);
  })
}/* ex2 */

{
  let arr = ['월', '화', '수', '목', '금', '토', '일']
  let arrCopy = [...arr]
  for (let i = 1; i <= 3; i++) {
    let r = Math.floor(Math.random() * arrCopy.length)
    let combine = (i < 3) ? ',' : ''
    document.querySelector(`.ex3 .day`).append(
      `${arrCopy[r]}${combine}`
    )
    arrCopy.splice(r, 1)
  }
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    //일,토,금->[6,5,4]
    let dayIdxArr = document.querySelector(`.ex3 .day`).innerText.split(',').map(v => {
      return arr.indexOf(v)//일,토,금을 한번씩 돌린다고 생각하면 됨.
    })//글자를 가져와서 쪼개놓음
    dayIdxArr.forEach(v => {
      document.querySelector(`.ex3 .output`).append(`${v},`)
    });
  })
}

//arr = [1,2,3,4,5]
// let sum = 0
// sum += arr[0] //1
// sum += arr[1] //3
// sum += arr[2] //6
//arrSum = [1,3,5,10,15]
// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }
//   sum = 0
//   document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
//     let mapArr = arr.map(v => sum += v)
//     mapArr.forEach(v => {
//       document.querySelector(`.ex4 .output`).append(
//         `${v},`
//       )
//     })
//   })
//   console.log(sum);
// }

{
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }
  sum = 0
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    let nArr = arr.map(v => sum += v)
    nArr.forEach(v => {
      document.querySelector(`.ex4 .output`).append(`${nArr}`)
    })
  })
}


// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }//for
//   let sum = 0
//   document.querySelector(`.ex4 button`).addEventListener('click', e => {
//     let mapArr = arr.map(v => sum += v)
//     mapArr.forEach(v => {
//       document.querySelector(`.ex4 .output`).append(`${v}, `)
//     });
//   })
// }