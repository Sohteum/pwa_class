document.addEventListener('DOMContentLoaded', ()=>{
  fnInit()

  document.querySelector('.btn-choice').addEventListener('click', e=>{
    fnChoicePuzzle()
  })

  document.querySelector('.choice').addEventListener('click', e=>{
    e.currentTarget.style.display='none'
  })
})

//문제를 다 풀면 문제 선택창이 열리게 해준다 녹색으로 글자가 전부 바뀌면 문제가 다시 나와야합니다!