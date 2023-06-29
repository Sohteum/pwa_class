window.puzzle
window.cnt
window.point
window.puzzleArr = [puzzle1, puzzle2]


window.fnInit = (num = null) => {
  puzzle =
    (num !==null)
      ? puzzleArr[num]
      : puzzleArr[Math.floor(Math.random() * puzzleArr.length)]//숫자를 퍼즐어레이에 넣어줌
  point = 0
  fnCheckCnt()
  fnPrintKeys()
  fnSetGrid()
  fnInputHandler()//인풋이 만들어지고 일을 시킨다.위치가 중요
  fnSetMarks()//td, tr다 만들어지고 해야함
}

window.fnCheckCnt = () => {
  cnt = 0
  puzzle.tableArr.forEach(rowArr => {
    rowArr.forEach(char => {
      if (char) { cnt++ }
    })
  })
  console.log(cnt);
}

window.fnSetGrid = () => {
  document.querySelector('.board').innerHTML = '<table><tbody></tbody></table>'
  puzzle.tableArr.forEach((rowArr, rowIdx) => {
    document.querySelector('.board table tbody').insertAdjacentHTML('beforeend', `<tr></tr>`)
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
    `) //한번반복하는 간단한 형태에서는 어펜드보다 어드제이슨트html이편해
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
