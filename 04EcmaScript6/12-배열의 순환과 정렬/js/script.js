{
  let arr = ['가', '나', '다']
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    let idx = arr.indexOf('나')
    //인덱스가 나오면 항상 몇번째인지를 묻는것 배열의 몇번째에 있는지 찾음
    document.querySelector(`.ex1 .output`).innerText = idx;

  })
}

// {
//   let arr =
//     [
//       { '이름': '홍길동', '나이': '35' },
//       { '이름': '아무개', '나이': '22' },
//       { '이름': '무명씨', '나이': '24' },
//     ]
//   document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
//       let idx =  arr.findIndex((v) => { //인덱스를 차례대로 검사한다는것. 이치문과 비슷함 여기서의 idx가 디스인거지
//       return v.이름 === '아무개'  //가장처음 인덱스의 이름은 홍길동. 근데 아무개니까 패스 그리고 두번째로 가서 보니 맞아 그럼 뱉음 그걸 받아먹어야함.
//     })
//     document.querySelector(`.ex2 .output`).innerText = idx;

//   })
// }
{
  let arr =
    [
      { '이름': '홍길동', '나이': '35' },
      { '이름': '아무개', '나이': '22' },
      { '이름': '무명씨', '나이': '24' },
    ]
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let idx = arr.findIndex(v => v.이름 === '아무개')
    //let idx =  arr.findIndex((v) =>{return v.이름 === '아무개' })
    document.querySelector(`.ex2 .output`).innerText = idx;

  })
}
// {
//   let arr =
//     [
//       { '이름': '홍길동', '나이': '35' },
//       { '이름': '아무개', '나이': '22' },
//       { '이름': '무명씨', '나이': '24' },
//     ]
//   document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
//     let name = document.querySelector(`.ex3 input`).value
//     // let idx = arr.findIndex(v =>  v.이름 === name)
//     let idx = arr.findIndex((v) => {
//       return v.이름 === name
//     })
//     let result
//     if (idx === -1) {
//       result = '해당하는 사람이 존재하지 않음'
//     } else {
//       result = arr[idx].나이
//     }
//     document.querySelector(`.ex3 .output`).innerText = result;

//   })
// }
{
  let arr =
    [
      { '이름': '홍길동', '나이': '35' },
      { '이름': '아무개', '나이': '22' },
      { '이름': '무명씨', '나이': '24' },
    ]
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    let name = document.querySelector(`.ex3 input`).value
    // let idx = arr.findIndex(v =>  v.이름 === `${name}`)
    let idx = arr.findIndex((v) => {
      return v.이름 === name
    })
    let result = (idx === -1) ? '해당하는 사람이 존재하지않음' : arr[idx].나이
    document.querySelector(`.ex3 .output`).innerText = result;

  })
}

{
  let arr =
    [
      { '이름': '홍길동', '나이': '35', '성별': '남' },
      { '이름': '아무개', '나이': '22', '성별': '여' },
      { '이름': '무명씨', '나이': '24', '성별': '남' },
      { '이름': '영이씨', '나이': '24', '성별': '여' },
    ]

  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    let cnt = 0
    let gen = document.querySelector(`.ex4 input`).value
    arr.forEach((v) => {
      if (v.성별 === gen) cnt++
    })
    document.querySelector(`.ex4 .output`).innerText = cnt
  })
}

{ //배열을 리턴함. 위에거랑 달라. 정확히 말하면 유사배열.그래서 배열이라서 이벤트리스너 추가 못함. 포이치를 알기전까지는 포문으로 버튼베열 길이보다 작을때까지 이벤트를 줬었음.근데 이제는 이 문법을 안쓰고 포이치, 맵, 필터를 사용함.  
  let btnArr = document.querySelectorAll(`.ex5 button`)
  btnArr.forEach((v) => {
    v.addEventListener(`click`, e => {
      alert(e.target.innerText)
    })
  })
}

{
  let engArr = ['sun', 'mon', 'tue', 'wen', 'thr', 'fri', 'sat']
  let korArr = ['일', '월', '화', '수', '목', '금', '토']
  let rand = (Math.floor(Math.random() * 8))
  document.querySelector(`.ex6 .eng`).innerText = engArr[rand]

  document.querySelector(`.ex6 button`).addEventListener(`click`, e => {
    let kor = document.querySelector(`.ex6 .kor`).value
    let idx = korArr.indexOf(kor)
    let result = (rand === idx) ? '정답' : '오답'
    document.querySelector(`.ex6 .output`).innerText = result
  })
}
//문제요일이 몇번째인지 먼저 알아야함. 몇번째 요일이 출제되었는지 기록해야함