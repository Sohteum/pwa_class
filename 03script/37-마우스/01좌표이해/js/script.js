{
  document.addEventListener('DOMContentLoaded', () => {
    {/* 
      const fnMouseHandler=()=>{
        // console.log('mouse move');
      }
      window.addEventListener('mousemove', (e) => {
        console.log(e.clientX); 
        fnMouseHandler()
      })//이 방법은 모바일에서는 사용불가, 두가지 이벤트를 같이 사용해야함
      window.addEventListener('touchmove', (e) => {
        console.log(e.changedTouches[0].pageX); 
        fnMouseHandler()
      }) */
      const fnMouseHandler = (clientX, clientY, pageX, pageY, offsetX, offsetY) => {
        document.querySelector('.page-x').innerText = pageX
        document.querySelector('.page-y').innerText = pageY
        document.querySelector('.client-x').innerText = clientX
        document.querySelector('.client-y').innerText = clientY
        document.querySelector('.offset-x').innerText = offsetX //이건 객체기준. 브라우저와는 상관없음
        document.querySelector('.offset-y').innerText = offsetY //이건 객체기준. 브라우저와는 상관없음
      }
      window.addEventListener('mousemove', (e) => {//네개의 값을 넣어야하니까 

        fnMouseHandler(e.clientX, e.clientY, e.pageX, e.pageY, e.offsetX, e.offsetY)
      })
      window.addEventListener('touchmove', (e) => {
        fnMouseHandler(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY,
          e.changedTouches[0].pageX,
          e.changedTouches[0].pageY,
          e.changedTouches[0].offsetX,//지원안함
          e.changedTouches[0].offsetY,
        )
      })
    }


    //https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
    //https://developer.mozilla.org/ko/docs/Web/CSS/cursor
    {//ex2
      const fnGetMouseOffset = (clientX, clientY, x, y) => {
        let offsetX = clientX - x
        let offsetY = clientY - y
        document.querySelector('.ex2 .offset-x').innerText = offsetX
        document.querySelector('.ex2 .offset-y').innerText = offsetY
      }
      document.querySelector('.ex2').addEventListener('mousemove', (e) => {
        fnGetMouseOffset(
          e.clientX,
          e.clientY,
          e.currentTarget.getBoundingClientRect().x,
          e.currentTarget.getBoundingClientRect().y,
        )
      })//mousemove
      document.querySelector(`.ex2`).addEventListener('touchmove', (e) => {
        fnGetMouseOffset(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY,
          e.currentTarget.getBoundingClientRect().x,
          e.currentTarget.getBoundingClientRect().y,
        )
      })//touchmove
    }
  })}





//     {//cursor
//       window.addEventListener('mousemove', (e) => {
//         document.querySelector('.cur').style.opacity = 1
//         document.querySelector('.cur').style.left = `${e.clientX}px`
//         document.querySelector('.cur').style.top = `${e.clientY}px`
//       })
//     }

//     document.querySelectorAll('button, a').forEach(el => {
//       el.addEventListener('mouseenter', () => {
//         document.querySelector('.cur').classList.add('active')
//       })
//       el.addEventListener('mouseleave', () => {
//         document.querySelector('.cur').classList.remove('active')

//       })
//     })
//   })
// }

// $(function () {
//   // $(window).mousemove(function(){
//   // })

//   // $(window).bind('mousemove', function (e) {
//   //   console.log('제이쿼리mousemove');
//   // })//addeventlistner와 같은게 bind. 이걸 써주는걸 권장

//   // $(window).bind('touchmove', function (e) {
//   //   console.log('제이쿼리터치'+e.originalEvent.changedTouches[0].clientX); 
//   // })


// })


// $(function(){

//   $(`.cur`).bind('mousemove', function(e){
//     $(`.cur`).css({
//     'opacity': `1`,
//     'left': `${e.clientX}px`,
//     'top': `${e.clientY}px`
//   })

//   $(`button, a`).bind('mouseenter', function(){
//     $(`.cur`).addClass('active')

//   }).mouseleave(function(){
//     $(`.cur`).removeClass('active')
//   })

// })

