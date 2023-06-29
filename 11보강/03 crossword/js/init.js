window.puzzle
window.cnt
window.point
window.puzzleArr = [puzzle1, puzzle2]


window.fnInit = (num = null) => {
  puzzle =
    (num !==null)//퍼즐이 넘버이면서 null이 아닐때.이부분 이해가 잘 안감 질문?????????
      ? puzzleArr[num]//퍼즐이 넘버라면 해당넘버에 해당하는 퍼즐을 출력, 그렇지 않다면 랜덤한 퍼즐을 출력
      : puzzleArr[Math.floor(Math.random() * puzzleArr.length)]//숫자를 퍼즐어레이에 넣어줌
  point = 0//새로 시작하면 포인트를 0으로 바꿔줌
  fnCheckCnt()//카운트를 0으로 바꾸고, 함수의 내용을 실행한다.
  fnPrintKeys()
  fnSetGrid()
  fnInputHandler()//인풋이 만들어지고 일을 시킨다.위치가 중요
  fnSetMarks()//td, tr다 만들어지고 해야함
}

window.fnCheckCnt = () => {//카운트를 0으로 바꾸고 퍼즐에 사용자가 입력한 캐릭터 즉 값이 있다면 카운트를 올려준다
  cnt = 0
  puzzle.tableArr.forEach(rowArr => {//여기서 왜 rowArr??????질문?????
    rowArr.forEach(char => {
      if (char) { cnt++ }
    })
  })
  console.log(cnt);//총 20개나온다.
}

window.fnSetGrid = () => {
  document.querySelector('.board').innerHTML = '<table><tbody></tbody></table>'//tbody를 넣지않으면 아래의 tr이 아니라 tbody가 들어가므로 여기서 tbody를 넣어준다.
  puzzle.tableArr.forEach((rowArr, rowIdx) => {//배열은 무조건 포이치!!파라미터 두개 받으면 무조건 괄호!! rowArr를 rowIdx만큼 돌린다??질문!!!
    document.querySelector('.board table tbody').insertAdjacentHTML('beforeend', `<tr></tr>`)//insetAdjacentHTML은 append와 유사한데 어펜드를 하나만 하는경우에 사용하면 편하다.
    rowArr.forEach((char, colIdx) => {
      let template
      if (char) {
        template = `
        <td><input maxlength="1" data-row="${rowIdx}" data-col="${colIdx}"></input>
        
        </td>` //row는 전체 배열//col은 글자들

      } else {
        template = `<td></td>`
      }
      document.querySelector('.board table tbody tr:last-child').insertAdjacentHTML('beforeend', template)
    })
  })
}//fnSetGrid

window.fnInputHandler = () => {
  document.querySelectorAll('.board input').forEach(input => {
    input.addEventListener('input', e => {
      const row = parseInt(e.target.dataset['row'])
      const col = parseInt(e.target.dataset['col'])
      if (e.target.value === puzzle.tableArr[row][col]) {
        fnSetPositive(e.target)
      }
    })
  })
}//fnInputHandler

window.fnSetPositive = (input) => {
  input.readOnly = true
  input.blur() //포커싱 밑줄 없앰
  point++
  if (cnt === point) {
    alert('게임끝!!!')
  }
}


window.fnPrintKeys = () => {
  document.querySelector('.desc-col').innerHTML = '';
  puzzle.colKeys.forEach(v => {
    document.querySelector('.desc-col').insertAdjacentHTML('beforeend', `
    <p>${v.num}) ${v.hint}</p>
    `) //한번반복하는 간단한 형태에서는 어펜드보다 어드제이슨트html이편해
  })
  document.querySelector('.desc-row').innerHTML = '';
  puzzle.rowKeys.forEach(v => {
    document.querySelector('.desc-row').insertAdjacentHTML('beforeend', `
    <p>${v.num}) ${v.hint}</p>
    `) 
  })
}

window.fnSetMarks = () => {
  puzzle.markArr.forEach(mark => {
    document.querySelector(`.board tr:nth-child(${mark.row + 1}) td:nth-child(${mark.col + 1})`)
    .insertAdjacentHTML('beforeend', `<span class="mark">${mark.num}</span>`)
  })
}//fnSetMarks


window.fnChoicePuzzle=()=>{
  document.querySelector('.choice').innerHTML='';
  puzzleArr.forEach((puzzle, idx)=>{
    document.querySelector('.choice').insertAdjacentHTML('beforeend', `
    <button value=${idx}>${puzzle.title}</button>
    `)
  })

  document.querySelectorAll('.choice button').forEach(button =>{
    button.addEventListener('click', (e)=>{
      let result = confirm('해당 문제로 변경하시겠어요?')
      result ? fnInit(parseInt(e.target.value)) : e.stopPropagation()//부모의 이벤트를 막는다
      
  })//click
})//forEach
  document.querySelector('.choice').style.display = 'flex'
}
