document.addEventListener('DOMContentLoaded', () => {
  fnInit()
})

document.querySelector('.btn-again').addEventListener('click', () => {
  fnInit()
  document.querySelector('.over').style.display = "none"
})

document.querySelector('.btn-choice').addEventListener('click', () => {
  fnPrintWordsBtns()
  fnChoiceBtnHandler()
  document.querySelector('.words').style.display = "flex"
})

document.querySelector('.btn-cancel').addEventListener('click', () => {
  document.querySelector('.words').style.display = "none"
})

