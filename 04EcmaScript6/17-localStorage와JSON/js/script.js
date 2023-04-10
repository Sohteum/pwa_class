// {
//   localStorage.setItem('n',1)  //let n = 1을 이런식으로 쓴거야 문자형태로 저장됨 내가 저장해놨으니까 위에 이 문장을 지운다고 하더라도 하드에서 꺼내올 수 있음
//   let n = localStorage.getItem('n')
//   console.log(n); 
//   localStorage.removeItem('n')
//   //console.log(n,parseInt(n)); 
//   // 로컬스토리지에 들어가면 무조건 글자로 저장이됨. 그러니까 parseInt해준거
// }


{
  //일반변수를 설정하면 새로고침하면 1으로 세이브를 다시해 그래서 증감연산하려면 변수가 하나 필요한데 로컬에 없으면 0 으로 셋팅을 해줘야되고 로컬에 이미 있으면 거기서 꺼내와서 써야함
  // let n = (localStorage.getItem('n')===null)? 0 : parseInt(localStorage.getItem('n')) 이건 여기서 쓰면 안됨. 무튼 안됨 복잡해짐

  // localStorage.removeItem('n')
  // if (!localStorage.getItem('n')) {
  //   localStorage.setItem('n', 0)
  //   console.log('n을 0으로 초기화합니다.');
  // }
  // let n = parseInt(localStorage.getItem('n'))
  // document.querySelector(`.ex1 .output`).innerText=n
  // document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
  //   ++n
  //   localStorage.setItem('n', n)
  //   document.querySelector(`.ex1 .output`).innerText=n
  // })//클릭할때까지 증가 시킴. 증감연산
}

{
  /* // [
  //   { a: 1 },
  //   { a: 2 },
  // ]
  //여기서 빈배열을 그냥 만들어버리면 안되고 로컬스토리지가 있냐고물어본다음에 없으면 넣는거고 있으면 그거 가져오는거고
  
  if (!localStorage.getItem('arr')) { //로컬스토리지에 배열 없냐?
    let arr = [{ a: 0 }]
    localStorage.setItem('arr', JSON.stringify(arr)) //두번재 인자는 글자형태만 저장이 됨 , 배열의 데이터를 제이슨형태 즉 문자형태로 바꿔서 저장하라는 뜻
    //로컬스토리지는 모든 프로그램사용자가 다 써야하니까. 파이썬 자바 등 그래서 제이슨파일은 모든 프로그램에서 사용할 수 있기때문에 내가 만든 자스 어레이를 제이슨으로 바꾸는것
  }
  
  let arr = JSON.parse(localStorage.getItem('arr')) //위에 어레이랑은 다름. 위에서 제이슨으로 바꿨으니까 다시 자스로 
  let n = arr[arr.length - 1].a     //배열의 마지막번호인덱스

  arr.forEach(v=>{
    document.querySelector(`.ex2 .output`).append(`
      a : ${v.a},
      `)
  })//새로고침하자마자 얼마까지 나왔는지 보고싶으니까 여기에 포이치를 넣음9(출력)

  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex2 .output`).innerHTML=''
    let obj = { a: ++n }
    arr.push(obj)
    localStorage.setItem('arr', JSON.stringify(arr))
    console.log(arr);
    arr.forEach(v=>{
      document.querySelector(`.ex2 .output`).append(`
        a : ${v.a},
        `)
    })
  }) */
}

{
  /* 로컬스토리지와 배열 초기화 */
  if (!localStorage.getItem('todoArr')) {//하드에저장된거
    let emptyArr = []
    localStorage.setItem(`todoArr`, JSON.stringify(emptyArr))
  }

  let todoArr = JSON.parse(localStorage.getItem(`todoArr`))
  // console.log(todoArr);//스크립트에 사용하는거


  /* 앱 초기화시 일정목록 출력 */
  let outputList = (todoArrParam) => {

    /* todoArr출력 */
    document.querySelector(`.ex3 .output`).innerHTML = ''
    todoArrParam.forEach(v => {
      let li = document.createElement('li')
      let { id, todoName, date, time } = v //이렇게 구조분해를 하면 아래 v를 쓰지 않아도됨
      //let id = v.id 이걸 위에서 간략하게 구조분해!새로운 문법
      //let todoName = v.todoName 이걸 위에서 간략하게 구조분해!새로운 문법
      //let date = v.date 이걸 위에서 간략하게 구조분해!새로운 문법
      //let time = v.time 이걸 위에서 간략하게 구조분해!새로운 문법
      li.innerHTML =
        `
      ${todoName}<br>
      ${date}<br>
      ${time}<br>
      <button value=${id} class="delete">일정삭제</button>
      <a href="./detail.html?id=${id}" value=${id} class="detail">일정내용보기</button>
      `
      //세미콜론대신 엠파센드 주소뒤의 물음표:쿼리스트링
       document.querySelector(`.ex3 .output`).append(li)

      /* delete, detail버튼 기능 구현 */
      li.querySelector(`.delete`).addEventListener(`click`, e => {

        e.target.parentElement.remove()//이건 화면에서만 지우는거.만약 3개중에 2번을 클릭한다고 하면 2번을 뺀 나머지를 찾아서 교체 여기서는 반드시 원본이 지워져야함 그러니까 여기서는 원본을 받는게 맞아
        todoArr = todoArr.filter(v => { //필터로 내가 삭제한거가 아닌애를 필터로 골라주기
          return v.id !== parseInt(e.target.value) //클릭한 버튼id와 투두어레이의 v번째 id를 비교해서 다른것만 뽑아서 배열 여기서 이 어레이를 로컬스토리지에 저장해줘야함
        })
        localStorage.setItem('todoArr', JSON.stringify(todoArr))
        //여기 로컬스토리지도 똑같이 만들어줘야지
      })//일정제거

    });//일정추가
  }



  /* 유효성검사버튼 */
  document.querySelector(`.ex3`).addEventListener(`submit`, e => {
    e.preventDefault()//이거 안하면 submit됨
  })

  document.querySelector(`.ex3`).addEventListener(`input`, e => {
    document.querySelector(`.ex3 button`).disabled //=!true(false)
      = !e.currentTarget.checkValidity()
    // 폼이 유효성검사 통과했는지 보는거, 폼안에 자식이 많으니까 커렌트타겟으로. 이게 트루나오면 버튼죽이기가 폴스가 되어야함

    // if(e.currentTarget.checkValidity()) {
    //   document.querySelector(`.ex3 button`).disabled = false
    // }else {
    //  document.querySelector(`.ex3 button`).disabled = true
    // }
  }) //폼에 적용하면 아무거나 건들면 인풋이벤트 발생
  outputList(todoArr)//시작할때 바로 출력하겠다는 뜻



  /* 버튼 일정 추가 기능 */
  document.querySelector(`.ex3 .add`).addEventListener(`click`, e => {
    let id = Date.now() //현재 찍힌 타임스탬프
    let todoName = document.querySelector(`.ex3 input[type=text]`).value
    let date = document.querySelector(`.ex3 input[type=date]`).value
    let time = document.querySelector(`.ex3 input[type=time]`).value
    let desc = document.querySelector(`.ex3 textarea`).value
    let obj = {
      id,
      todoName,
      date,
      time,
      desc,
    }
    todoArr.push(obj)
    localStorage.setItem('todoArr', JSON.stringify(todoArr)) //받아온 정보를 제이슨형태로 바꿔서 로컬스토리지에 저장을 한다
    outputList(todoArr)
    // console.log(todoArr);
  })

  /* 정렬(소트) select 옵션(최신등록순) 구현 */

  document.querySelector(`.ex3 .sort`).addEventListener(`change`, e => {
    let todoArrCopy = [...todoArr]  //스프레드 연산자
    let sortOption = e.currentTarget.value
    if (sortOption === 'recent') {
      todoArrCopy.reverse()
    } else if (sortOption === 'name') {
      todoArrCopy.sort((a, b) => {
        if (a.todoName > b.todoName) return 1
        if (a.todoName < b.todoName) return -1
        if (a.todoName === b.todoName) return 0
      })//a,b 객체
    } else if (sortOption === 'Sdate') {
      todoArrCopy.sort((a, b) => {
        let time1 = a.date+'-'+a.time
        let time2 = b.date+'-'+b.time
        if (time1 > time2) return 1
        if (time1 < time2) return -1
        if (time1 === time2) return 0
      })
    }
    //여기서는 카피본 출력해야함. 위에서는 전부다 원본을 출력했음. 여기서 소트로 원본을 바꿔버리면 안되니까
    outputList(todoArrCopy)
  })

  //원본어레이를 건들면 안됨. 원본이 
  //우리는 푸시를 했으인까 
//페이지간의 변수를 주고받는것 = 쿼리스트링__-->어딘가 접속을 하면 앞에 프로덕트는 안바뀌는데 그 뒤에 주소만 바뀌는거
//주소창에 변수를 담아서 다른페이지로 전달해즈는것.
}