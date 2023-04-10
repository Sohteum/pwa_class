let queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get(`id`)
console.log(id);

let todoArr = JSON.parse(localStorage.getItem(`todoArr`))
let obj = todoArr.find(v => parseInt(id) === v.id)
//주소에 찍힌애랑 내가 뽑아온애랑...
let { todoName, date, time, desc } = obj
//구조분해

console.log(todoName, date, time, desc);

document.querySelector(`.detail input[type=text]`).value = todoName
document.querySelector(`.detail input[type=date]`).value = date
document.querySelector(`.detail input[type=time]`).value = time
document.querySelector(`.detail textarea`).value = desc


document.querySelector(`.detail`).addEventListener(`submit`, e => {
  e.preventDefault()
})

document.querySelector(`.detail .delete`).addEventListener(`click`, e => {
  todoArr = todoArr.filter(v => parseInt(id) !== v.id)
  localStorage.setItem('todoArr', JSON.stringify(todoArr))
  location.href = './index.html'
  //리다이렉팅 주소를 강제로 바꿔버림
})
document.querySelector(`.detail .edit`).addEventListener(`click`, e => {
  let idx = todoArr.findIndex(v => parseInt(id) === v.id)
  let todoName = document.querySelector(`.detail input[type=text]`).value
  let date = document.querySelector(`.detail input[type=date]`).value
  let time = document.querySelector(`.detail input[type=time]`).value
  let desc = document.querySelector(`.detail textarea`).value
  todoArr[idx].todoName = todoName
  todoArr[idx].date = date
  todoArr[idx].time = time
  todoArr[idx].desc = desc
  localStorage.setItem('todoArr', JSON.stringify(todoArr))
  location.href = "./index.html"
})






//로컬스토리지 하드디스크
//물음표에 실어보내는 방법: 쿼리 스트링
//변수는 다른페이지끼리 공유를 못하니까 아이디를 이용해서 꺼내오기
//배열에서 아이디가 같은애를
//배열에서 특정 값을 찾을때 find
//인ㄱ뎃스오브는 객체는 못찾아서 파인드인덱스
