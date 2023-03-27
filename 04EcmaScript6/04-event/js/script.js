{
  let foo = 1;

document.querySelector(`.ex1`).addEventListener(`click`, e => {
  e.preventDefault()
  console.log(e.currentTarget.innerHTML);
  // 이 안은 읽기만해. 즉시실행아니고. 읽은건 맞는데 클릭까지 해야 실행이 됨.
})
document.querySelector(`.ex1 a`).addEventListener(`click`, e => {
  e.preventDefault()
  e.stopPropagation()
  console.log(e.target.innerHTML);
})
}

//innerHtml, innerText
//값을 가져와서 리턴하겠다. 갑을 바꾸겠다(괄호안에 뭐가 있으면)

// e.target은 자식이 있을때, 없을때로 나눠지는데 자식이 있으면 가장 안쪽에 있는애를 말하고 자식이 없으면 부모를 말함
//그래서 중첩구조. 자식이 있을때는 커런트타겟(제이쿼리디스)을 사용해야함 

//사용자가 요청을 하면 중간관리자가 직원에게 시킴. 이걸 캡쳐링이라고 함 그러니까 부모가 먼저 듣는다는소리임. 위에서 부터 짜증이 남. 일을 제일먼저하는건 직원임. 그리고 사장한테 보고, 그리고 사용자에게보고 일을 아래에서 시작하는건 버블링이라고 함. 
//버블링은 일을 하는 순서=이벤트를 실행하는 순서(자식부터)
//캡쳐링은 짜증을 내는 순서=이벤트를 감지하는 순서(부모부터)

//프로퍼게이션stopPropagation 자식이 먼저 일을 하고 부모가 그후에 하잖아 그러니까 ㅏ부모가 하는일을 못하게 막는거(자식이 일을 하고 그다음 부모가 일을 하는데 부모의 버블링을 중지)