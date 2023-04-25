{

  document.querySelector('button').addEventListener(`click`, e => {
    if (document.querySelector('input').checked) {
      // document.querySelector('.popup').classList.remove('active')
      document.querySelector('div').style.display = 'none'
      localStorage.setItem('expires', Date.now() + (5000))
    }
  })

  if (localStorage.getItem('expires')) {
    if (Date.now() < parseInt(localStorage.getItem('expires'))) {
      document.querySelector('div').style.display = 'none'
    } else {
      document.querySelector('div').style.display = 'flex'
      localStorage.removeItem('expires')
    }
  }
}

// {
//   localStorage.setItem('n',1)  //let n = 1을 이런식으로 쓴거야 문자형태로 저장됨 내가 저장해놨으니까 위에 이 문장을 지운다고 하더라도 하드에서 꺼내올 수 있음
//   let n = localStorage.getItem('n')
//   console.log(n);
//   localStorage.removeItem('n')
//   //console.log(n,parseInt(n));
//   // 로컬스토리지에 들어가면 무조건 글자로 저장이됨. 그러니까 parseInt해준거
// }

// {
//   let chk = true

//   // window.localStorage.removeItem('expires')
//   console.log(window.localStorage.getItem('expires'));

//   function popup(chk) {
//     if (chk) {
//       document.querySelector(`.popup`).classList.remove('active')
//     } else {
//       document.querySelector(`.popup`).classList.add('active')
//     }
//   }


//   if (window.localStorage.getItem('expires')) {
//     if (Date.now() < parseInt(window.localStorage.getItem('expires'))) {
//       chk = false//팝업 숨기기
//     } else {
//       chk = true
//       window.localStorage.removeItem('expires')
//     }
//     popup(chk)
//   }



//   document.querySelector(`.change`).addEventListener('change', e => {
//     chk = e.target.checked
//   })

//   document.querySelector(`.btn`).addEventListener('click', e => {
//     if (chk) {
//       window.localStorage.setItem('expires', Date.now() + 5000)
//     }
//     chk = false
//     popup(chk)
//   })
// }