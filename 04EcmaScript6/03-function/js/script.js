{
/*   let fn = function () {
    console.log(1);
  }
  fn() */
}
{
/*   document.querySelector(`.ex1 button`).addEventListener('click', function () {
    fn()
  })
  let fn = function () {
    console.log(2);
  }
  fn() */
  /* let이 블럭레벨스코프니까 블러레벨을 따로 해서 만들면 같은 이름이라도 여러번 선언할 수 있음
  함수는 중복이름을 선언해버리면 호이스팅이 일어나거나 앞서 선언한게 중복선언한게 되어버려서 안됨.  */
  /* (defer사용했을때)만약에 클릭이벤트가 펑션보다 먼저와도 실행이 됨.왜냐면 시작하고 바로 펑션이 실행이 됐고, 그 후에 나는 클릭을 했기때문에 에러가 안남 */
}

/*  {
  let fn = function () {
    console.log(2);
  }
  let fn = () => {
    console.log(2);
  }
} */ 

/* {

  let fn = () => {
    console.log('fn');
  }
  document.querySelector(`.ex1 button`).addEventListener(`click`,function(){
  })
  document.querySelector(`.ex1 button`).addEventListener(`click`,()=> {
    fn()
  })
} */

{
  let fn = (param) => {
    console.log(param);
  }
  document.querySelector(`.ex1 button`).addEventListener(`click`,(e)=> {
   let n = parseInt(e.target.value)//$(this).val()
    fn(n)
  })
} 

{
  let fn = (param) => {
    return ++param
  }
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=> {
   let n = parseInt(e.target.value)//$(this).val()
    console.log(fn(n))
  })
} 

{
  let fn = param => ++param
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=> {
   let n = parseInt(e.target.value)//$(this).val()
    console.log(fn(n))
  })
} 

{
  let fn = param => ++param
document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
  fn(e.target.value)
})
}


