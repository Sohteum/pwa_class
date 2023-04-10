document.querySelector(`form`).addEventListener('submit', e => {
  e.preventDefault()
})
document.querySelector(`form`).addEventListener('submit', e => {
  // e.currentTarget.checkValidity()
  //required없으면 검사를 안함
  document.querySelector(`.btn_add`).disabled = !e.currentTarget.checkValidity()
})


// let arr = [] 세브파일이 있으면 가져오고, 없으면 만들어준ㄷ다.
//여기서 이렇게 안하는 이유는 계속 초기화될테니까. 
if (!localStorage.getItem(`arr`)) {
  localStorage.setItem(`arr`, JSON.stringify(arr)) //무조건 문자열로 들어간다. 배열은 들어갈 수 없음. 그래서 제이슨형테로   집어넣음 이때는 무조건 스트링기파이
}
//출력함수
let fnPrintList = () => {
document.querySelector(`.output`).innerHTML='';
  arr.forEach(v => {
    let {아이디, 번호, 이름} = v
    let li = document.createElement('li')
    // let button = document.createElement('button')
    li.innerHTML = `
 
   ${번호}번 ${이름} <br>
   <button>삭제</button>
  `
    document.querySelector('.output').append(li)
    li.querySelector(`button`).addEventListener(`click`, e=>{
      e.target.parentElement.remove()
      //새로운 배열 만들기 필터랑 맵인데 맵은 길이가 같은게 나와야되고 필터는 길이가 다른애가 나옴
      arr.filter(v=>
        아이디 !== v.아이디
        //그냥 아이디만 있는 아이디. v.id가 오브젝트아이디
      )
      localStorage.setItem('arr', JSON.stringify(arr))
    })
  });
}
fnPrintList()//명단출력




let arr = JSON.parse(localStorage.getItem(`arr`))//꺼내올때는 무조건 팔스
console.log(arr);
document.querySelector(`.btn_add`).addEventListener(`click`, e => {
  let 이름 = document.querySelector(`.user_name`).value
  let 아이디 = Date.now()
  let obj = { 아이디, 이름 } //obj = {이름 : 이름}
  //클릭할때마다 객체가 만들어지는데 초기화하고 번호적고 이름적고 해야하니까
  arr.push(obj)
  // console.log(arr);
  arr = arr.map((v, i) => {
    v.번호 = i  //객체 안에 번호를 만든다 그리고 리턴에서 그 번호를 리턴한다.
    return v
    //map배열의 길이만큼 똑같은 새 배열을 만든다. 번호 심어놓으려구 그리고 원래 이름만 있던 배열을 대체한다.
  })
  let arr = localStorage.setItem(`arr`, JSON.stringify(arr))
  fnPrintList()//명단출력
})
