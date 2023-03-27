function fn1_1(param) {
  console.log(param);
}
function fn1_2(event) {
  console.log(event.target);
  //$(this) 온클릭이벤트에서 파라미터는 예약어임. 이벤트라기보다 이벤트리스너.  

}

document.addEventListener(`DOMContentLoaded`, function () {

  document.querySelector(`.ex2 button`).addEventListener(`click`, function () {
    alert();
  })
  document.getElementById(`ex2btn`).addEventListener(`click`, function () {
    alert();
  })
  document.querySelector(`.ex3btn`).addEventListener(`click`, function (e) {
    console.log(e.target);
    /* 여기서 이벤트불러올때는 e를 쓴느데 맘대로 하면되고 아까 온클릭방식에서는 꼭 이벤트를 써줘야함 */
  })

  //   document.getElementsByClassName(`.ex3btn`)->배열찾는거 
  //   document.getElementsByTagName(`.ex3btn`)->배열찾는거 

  //get방식:아이디써서 하나찾거나, 태그네임이나 클래스네임써서 여러개찾거나,
  //쿼리방식:.올이있고 그냥이있음. 그냥은 1번째, 올은 다. 배열을 통해 찾음

  // 쿼리는 문법. css문법으로 선택자를 잡겠다. 쿼리셀렉터 올은 다찾는거(배열, 반복문 알면 가능). 쿼리셀렉터는 첫번째거만 찾아줌
  // 배열, 객체, 반복문, 비동기문법 이 네가지는 꼭 알것클래스문법은 잘 몰라도 됨. 리액트가 예전에는 클래스가 ...지금은......

})

// 동영상이 있다면 파싱은 계속 하면서 동영상이나 이미지는 계속 받고있음 화면에서는 안나올수 잇음 아니면 깨지거나. 글자는 빨리 읽지만 동영상이나 이미지는 아니닌까. 그래서 위에거는 파싱이 끝나면이고. 안나오는 컨텐츠가 잇을수있음 


window.addEventListener(`load`, function () {

})
// 사이트에서 동글뱅이 나오면서 로딩중이라고 하잖아 그게 이런 이벤트때문에 사용하는것임. 다 다운받아지면 보여주려고 
//$(window).load(function(){})  이건 제이쿼리에서 화면출력이 완전히 끝났을때를 말함  