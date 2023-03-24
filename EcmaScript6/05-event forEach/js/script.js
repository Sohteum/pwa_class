
{
  document.querySelectorAll(`.ex1 button`).forEach((btn) => {
    btn.addEventListener(`click`, e => {

      console.log(e.target.innerText);
    })
  })
}
//제이쿼리이치는 이벤트인데 여기서 포이치는 그냥 반복문일 뿐. 
//btn는 차례에 해당하는 그 애를 말함 한개를 네번반복한거 포이치가 네번하는거라는거지 btn 자체는 하나임 하나한테는 이벤트추가가 가능

//클릭한애가 이쩜타겟. 그래서 걔한테서 안에 글자를 받아옴. 
{
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let sum = 0;
    document.querySelectorAll(`.ex2 input`).forEach((e) =>{
      sum += parseInt(e.value);
    })
    document.querySelector(`.ex2 .output`).innerText = sum
  })
}

//값을 세번 가져오는것보다 증감연산을 사용하는것이 편함. 초기화를 해야하는데 초기화를 버튼을 누를때마다 하니까 안에서 0을 만든다.