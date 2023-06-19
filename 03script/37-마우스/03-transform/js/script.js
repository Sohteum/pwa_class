/* 마우스의 좌표에서 각 엘리먼트 요소의 좌표를 빼줄예정
클라이언트 - 겟바운드클라이언트렉트
마우스의 x좌표를 사용예정

*/

const fn = (clientX) => {
  document.querySelectorAll(`.ex1 figure img`).forEach(img => {
    img.classList.remove('deactive')
    let diffX = clientX - (img.getBoundingClientRect().x + img.clientWidth * 0.5)
    img.style.transform = `rotateY(${diffX * 0.2}deg)`
  })//forEach
}


document.querySelector(`.ex1`).addEventListener('mousemove', (e) => {
  fn(e.clientX)
})
document.querySelector(`.ex1`).addEventListener('touchmove', (e) => {
  fn(e.changeTouches[0].clientX)
})


const fnInit = () => {
  document.querySelectorAll(`.ex1 figure img`).forEach(img => {
img.classList.add('deactive')
    img.style.transform = `rotateY(0deg)`
  })//forEach
}
document.querySelector(`.ex1`).addEventListener('mouseleave', (e) => {
  fnInit()
})
document.querySelector(`.ex1`).addEventListener('touched', (e) => {
  fnInit()
})


/* ------------------------------------------------------ */

function fn(pageX) {
  $(`.ex1 figure img`).each(function(){
    $(`.ex1 figure img`).removeClass('deactive')
    let diffX = clientX - (img.getBoundingClientRect().x + img.clientWidth * 0.5)
    img.style.transform = `rotateY(${diffX * 0.2}deg)`
  })
}

const fn = (pageX) => {
  document.querySelectorAll(`.ex1 figure img`).forEach(img => {
    img.classList.remove('deactive')
    let diffX = clientX - (img.getBoundingClientRect().x + img.clientWidth * 0.5)
    img.style.transform = `rotateY(${diffX * 0.2}deg)`
  })//forEach
}