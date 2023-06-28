window.wordArr //문제 단어를 배열로 바꾼거
window.desc //배열
window.row = 0 //사용자가 문제를 틀리면 늘어나는 줄 개수
window.cnt = 0 //몇개 입력했는지 확인
window.point = 0

fnInitVar = () => {
  row = 0//로우는 한줄한줄체크
  cnt = 0
  point = 0
  document.querySelector('.board').innerHTML = '';
}

fnInit = (n = null) => {//안넣으면 null
  fnInitVar()//변수초기화
  fnChoiceWord(n)//랜덤하게 단어뽑아오기//파람에 값을 넣으면 그게 나옴
  fnInputSpawn()//한줄이 추가됨.그리고 알을깜.....
  fnInputHandler()//입력했을때 할일

}//fnInit


fnChoiceWord = (n = null) => {//사용자가 안넣으면 null이다.고를때는 고른것만뽑아와야함. 처음에는 아무것도 안고른상태에서 랜덤으로 뽑아야하니까, 사용자가 안골랐을때 랜덤으로 뽑으려고 null
  if (!n && n !==0) {//사용자가 안고른경우&& n이0이아닌경우
    const ranN = Math.floor(Math.random() * wordsArr.length)
    desc = wordsArr[ranN].desc
    wordArr = wordsArr[ranN].word.toUpperCase().split('')//이렇게 안하면 내가 다 배열로 만들어야하니까 개발상 사용성이 떨어지지.문제 출제시 대문자로 들어옴
  } else {//
    desc = wordsArr[n].desc
    wordArr = wordsArr[n].word.toUpperCase().split('')
    console.log(wordsArr);
  }
  document.querySelector('.desc').innerText = desc
}

fnInputSpawn = () => {
  row++; point = 0; cnt = 0;
  const div = document.createElement('div')
  div.classList.add(`div${row}`)
  for (let i = 0; i <= 4; i++) {
    const span = document.createElement('span')//스판은 정사각형 만들려고 사용
    span.innerHTML = `<input maxlength="1" data-idx="${i}" >`//데이터 속성으로 해당 칸이 몇번째인지. 그래야 비교가능하니까
    div.append(span)
  }
  document.querySelector('.board').append(div)
}

fnInputHandler = () => {
  document.querySelector(`.div${row} span:first-child input`).focus()
  document.querySelectorAll(`.div${row} input`).forEach(v => {
    v.addEventListener('input', (e) => {
      const char = e.target.value.toUpperCase()//소문자를 입력해도 대문자로 바꿔줌
      if (/[A-Z]/.test(char)) {//정규식(regExp)이고, 대문자 a~z, test 안의 문자가 대문자 안에 포함하느냐.유효성검사
        //console.log('대문자임');
        fnCheckSpell(e.target, char)//함수에서 이벤트리스너를 찾게할려고 e.target써주는거지, char는 사용자가 입력한 문자
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
    el.parentElement.nextElementSibling.children[0].focus()//이렇게 하면 오류가 나와도 넘어가니까.
  } catch { } //자식은 무조건 배열이 나옴 우리는 한명이니까 0번째
  const idx = parseInt(el.dataset['idx']);//이게 배열의 몇번째에 있느냐를 보는거니까 parseInt
  /* 
  문제(wordArr)가 ['','','','','']
  0번째 입력양식에 a입력한경우->입력한 글자가 
  0번째 입력양식에 d입력한경우-> 
  0번째 입력양식에 z입력한경우-> 
  */
  //사용자가 입력한 알파벳 === wordArr[입력한글자번째]
  if (char === wordArr[idx]) {//글자와 순서모두 맞는경우// 사용자가 입력하고있는 번호의 워드와 사용자가 입력한 글자가 맞는경우//이렇게 써도됨. wordArr.indexof(char)===idx //사용자가 입력양식에 d를 입력한경우 0 이나온다는 소리 근데 이렇게 하면 문제가 apple같은거 쓰면 안됨 indexof가 처음 걸리면 끝나버리니까
    el.classList.add('green')
    point++
  } else if (wordArr[idx].includes(char)) {//글자만 포함된경우//더 정확하게 하려면 
    el.classList.add('orange')
  } else {//완전틀림
    el.classList.add('grey')
  }
  cnt++
  if (point === 5) {
    console.log('성공입니다!');
    document.querySelector('.over').style.display = 'flex'
    document.querySelector('.over em').innerText = `시도횟수 : ${row}번`
  } else if (cnt === 5) {
    fnInputSpawn()
    fnInputHandler()
  }
}

fnPrintWordsBtns = () => {
  document.querySelector('.words .output').innerHTML = '';
  wordsArr.forEach((v, i) => {
    document.querySelector('.words .output').insertAdjacentHTML('beforeend', `
  <p><button value="${i}">${v.desc}</button></p>
  `)//어펜드의 위치
  })
}

fnChoiceBtnHandler = () => {
  document.querySelectorAll('.words .output button').forEach(v => {
    v.addEventListener('click', e => {
      fnInit(parseInt(e.target.value))
      document.querySelector('.words').style.display = "none"
    })
  })
}



