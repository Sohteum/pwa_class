{
  let arr = ['가', ' 나', '다', '라']
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    alert(arr.indexOf(2))
  })
}/* ex1 */

{
  let arr = [1, 2, 3, 4, 5]
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let idx = arr.findIndex(v => v % 2 === 0)
    alert(idx)
  })
}/* ex2 */

{
  let arr = [
    { 이름: '홍', 나이: '2', 성별: '여' },
    { 이름: '김', 나이: '4', 성별: '남' },
    { 이름: '이', 나이: '3', 성별: '여' },
    { 이름: '힝', 나이: '3', 성별: '남' },
  ]
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    Object.entries(arr.find(v => v.나이 === '3')).forEach((v) => {
      let br = document.createElement(`br`)
      document.querySelector(`.ex3 .output`).append(
        `${v[0]} : ${v[1]}`, br,
      )
    })
    //alert(arr.find(v => v.나이 === '3'))
    //v가 다 객체인데 나이가 3인게 있으면 전부 뱉어낸다
    //
  })
}/* ex3 */

/* review end------------------------------------------- */


{
  document.querySelector(`.ex4 button:nth-child(1)`).addEventListener(`click`, e => {
    e.target.parentElement.style.backgroundColor = 'red'
    //타겟까지가 디스랑 똑같은거
  })
  document.querySelector(`.ex4 button:nth-child(2)`).addEventListener(`click`, e => {
    e.target.nextElementSibling.style.backgroundColor = "red"
    //객체를 하나만 반환함. 배열의 색을 어떻게 바꿔. 객체가 리턴이 된다.
  })
  document.querySelector(`.ex4 button:nth-child(3)`).addEventListener(`click`, e => {
    e.target.previousElementSibling.style.backgroundColor = 'yellow'
  })
  document.querySelector(`.ex4 button:nth-child(4)`).addEventListener(`click`, e => {
    Array.from(e.target.parentElement.children).forEach(v => {
      //여기서 v는 네개의 버튼인데 , 클릭한애는 네번째.네번째에오면 동일한애가 됨. 동일한게 되면 폴스를 함. 그러면 내가 클릭한애만 빼고 나머지가 빨갛게됨.
      //
      if (e.target === v) return false
      v.style.backgroundColor = 'red'
    })
  })
}
//htmlcolection은 유사배열임. 그래서 얘는 from이라는 명령어를 이용하면 진자 배열로 바꿈
//콜백함수를 전달받는 함수=고차함수

{//여기부터가 배열. 유사배열이지만 노드리스트라고 나옴. 하지만 포이치는 사용가능 인덱스오브는 사용불가능

  document.querySelectorAll(`.ex5 button`).forEach((v) => {
    v.addEventListener(`click`, e => {
      Array.from(e.target.parentElement.children).forEach((v) => {
        v.style.backgroundColor = 'white'//여기는 전부다
      })

      Array.from(e.target.parentElement.children).forEach((v) => {
        if (v === e.target) return false
        v.style.backgroundColor = 'red'//여기는 자기만빼고
      })

      /* e.target.parentElement.children 
      이렇게 돌리면 유사배열로 나와서 못함 htmlcollection나옴*/


    })//event binding
  })// foreach 
}

//바닐라는 낫이 없음 그래서 전부다 불을 꺼줘야함
//ex6 el.classList.add('active') el.classList.remove('active') classList.toggle('active')
{
  document.querySelectorAll(`.ex6 button`).forEach(v => {
    v.addEventListener(`click`, e => {
      document.querySelectorAll(`.ex6 button`).forEach(v => {
        if (v === e.target) return false
        v.classList.remove(`active`)
      })
      e.target.classList.toggle(`active`)
      /* Array.from(e.target).((v)=>{
        v.classList.toggle(`active`) */
    })/* forEach */
  })/* click */
}

{
  // document.querySelector(`.ex7 button`).forEach(v => {

  // Array.from(e.target.parentElement.children).forEach(v=>{
  // if (e.target===v) return false
  // v.style.background=v.innerText
  // })

  // e.target.parentElement.querySelectorAll(`.box`).forEach(v=>{
  //   v.style.background=v.innerText
  // })

  // })/* click */
}
{
  document.querySelectorAll(`.ex8 button`).forEach(v => {
    v.addEventListener(`click`, e => {
      document.querySelectorAll(`.ex8 button`).forEach(v => {
        v.style.backgroundColor = `none`
      })
      e.target.parentElement.querySelectorAll(`.box`).forEach(v => {
        v.style.backgroundColor = v.innerText
        //클릭한 박스 옆에있는 버튼 세개
      })
    })
  })
}

{//prevAll(), nextAll()
  document.querySelector(`.ex9 button:nth-child(3)`).addEventListener(`click`, e => {
    let idx = Array.from(document.querySelectorAll(`.ex9 button`)).indexOf(e.target)
    //이건 배열. 노드리스트가 나옴. 이건 포이치는 사용가능한데 인덱스오브는 사용못해
    //z클릭한 버튼이 이 버튼중에 몇번째 있는지 찾은거야. 배열중에서.

    Array.from(e.target.parentElement.children).forEach((v, i) => {
      if (i < idx) {
        v.style.color = 'red'
      }
    })
  })
}
/* i는 돌아가는 숫자라고 생각하면 됨. 인덱스 넘버와 같아. 
두개를 인자로 받으면 v를 괄호로 싸줌.
클릭한 버튼의 인덱스랑 i랑 비교했을때 i가 더 작으면 앞쪽에있는 형제, 더크면 뒤쪽에 있는 형제 */

// {
//   document.querySelector(`.ex10 button:nth-child(2)`).addEventListener(`click`, e=> {
//     let idx = Array.from(document.querySelectorAll(`.ex10 button`)).indexOf(e.target)
//     Array.from(e.target.parentElement.children).forEach((v, i)=>{
//       if (i> idx) {
//         v.style.color = 'red'
//       }
//     })
//   })
// }
{
  document.querySelectorAll(`.ex10 button`).forEach(v => {
    v.addEventListener(`click`, e => {
      let idx = Array.from(e.target.parentElement.children).indexOf(e.target)
      document.querySelectorAll(`.ex10 button`).forEach((v, i) => {
        v.style.color = 'black'
      })
      document.querySelectorAll(`.ex10 button`).forEach((v, i) => {
        if (i > idx) { v.style.color = 'red' }

      })
    })
  })


}//다 찾고나서 v차례일때 idx보다 큰지 작은지 확인하는거. 그럼 넥스트.
//v는 배열의 값, i는 몇번째 v인지. 순서를 말하는거 

{
  let enArr = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
  let koArr = ['일', '월', '화', '수', '목', '금', '토']
  //3번 반복해서 배열에저장 겹쳐도됨 스플라이스하면안됨.
  //배열안에 몇번째에서 뽑아왔는지 알아놔야함 정답번호니까.
  //사용자가 입력한 문자열을 인풋에서 가져와서 쉼표기호로 분리 후 배열로 저장 split
  //유저어레이를 3회 반복하여 각 배열값이 한국 어레이의 몇번째에 들어있는지 확인
  //랜덤어레이의 번호와 일치하는지 비교하며 1씩 증감연산
  let randArr1 = (Math.floor(Math.random() * 7))
  let randArr2 = (Math.floor(Math.random() * 7))
  let randArr3 = (Math.floor(Math.random() * 7))

  /*   let randArr = (Math.floor(Math.random() * 7)).append(
      `${enArr[randArr]},`,
      `${enArr[randArr]},`,
      `${enArr[randArr]},`,
    ) */
  document.querySelector(`.ex11 .en`).append(
    `${enArr[randArr1]},`,
    ` ${enArr[randArr2]},`,
    ` ${enArr[randArr3]}`,
  )

  /*   document.querySelector(`.ex11 .en`).innerText = randArr */

  let userArr = document.querySelector(`.ex11 p input`).value
  userArr.split(',')





  userArr.forEach((v, i) => {
    if (i === koArr) { v++ }
    document.querySelector(`.ex11 .output`).innerText = result
  })




}