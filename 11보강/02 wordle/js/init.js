window.wordArr //문제 단어를 배열로 바꾼거
window.desc
window.row = 0 //사용자가 문제를 틀리면 늘어나는 줄 개수
window.cnt = 0 //몇개 입력했는지 확인
window.point = 0

fnInitVar = () => {
  row = 0//로우는 한줄한줄체크
  cnt = 0
  point = 0
}

fnInit = () => {

  fnChoiceWord()
  fnInputSpawn()
}//fnInit


fnChoiceWord = (n = null) => {//사용자가 안넣으면 null이다.고를때는 고른것만뽑아와야함. 처음에는 아무것도 안고른상태에서 랜덤으로 뽑아야하니까, 사용자가 안골랐을때 랜덤으로 뽑으려고 null
  if (!n) {//사용자가 안고른경우
    const ranN = Math.floor(Math.random() * wordsArr.length)
    desc = wordsArr[ranN].desc
    wordArr = wordsArr[ranN].word.split('')
  } else {//
    desc = wordsArr[ranN].desc
    wordArr = wordsArr[n].word.split('')
    console.log(wordsArr);
  }
  document.querySelector('.desc').innerText = desc
}

fnInputSpawn = () => {
  row++
  const div = document.createElement('div')
  div.classList.add(`div${row}`)
  for (let i = 0; i <= 4; i++) {
    const span = document.createElement('span')
    span.innerHTML = `<input maxlength="1" data-idx="${i}" >`
    div.append(span)
  }
  document.querySelector('.board').append(div)
  fnInputHandler()
}

fnInputHandler = () => {
  document.querySelector(`.div${row} span:first-child input`).focus()
  document.querySelectorAll(`.div${row} input`).forEach(v => {
    v.addEventListener('input', (e) => {
      const char = e.target.value.toUpperCase()//소문자를 입력해도 대문자로 바꿔줌
      if (/[A-Z]/.test(char)) {//정규식(regExp)이고, 대문자 a~z, test 안의 문자가 대문자 안에 포함하느냐
        console.log('대문자임');
        fnCheckSpell(e.target, char)
      } else {
        e.target.value = ''
        alert('알파벳만 입력이 가능합니다')

      }//else
    })
  })
}//fnInputHandler

fnCheckSpell = (el, char) => {
  el.readOnly = true //입력을 한 다음에는 입력을 다시할 수 없게 함
  try {
    el.parentElement.nextElementSibling.children[0].focus()
  } catch { } //자식은 무조건 배열이 나옴 우리는 한명이니까 0번째
  console.log(parseInt(el.dataset['idx']));//이게 배열의 몇번째에 있느냐를 보는거니까 parseInt
/*   if () {//글자와 순서모두 맞는경우

  } else if () {//글자만 포함된경우

  } else {//완전틀림

  }
  char */
}

document.addEventListener('DOMContentLoaded', () => {
  fnInit()
})

