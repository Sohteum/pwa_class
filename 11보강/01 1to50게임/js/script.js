document.querySelector('.btn-start').addEventListener('click', ()=>{
  document.querySelector('.init').remove()//실제 엘리먼트 없앰 처음 나오고 안나올거니까(디스플레이는 보이기만 안보임)
  fnInit()
})
document.querySelector('.game-over .btn-again').addEventListener('click', ()=>{
  document.querySelector('.game-over').style.display = 'none'//계속 나와야되니까 리무브하면 안됨
  fnInit()
})
document.querySelector('.game-completed .btn-again').addEventListener('click', ()=>{
  document.querySelector('.game-completed').style.display = 'none'//계속 나와야되니까 리무브하면 안됨
  fnInit()//게임 처음부터 시작하는거
})
document.querySelector('section').addEventListener('animationed', (e)=>{
  e.currentTarget.classList.remove('active')
})

