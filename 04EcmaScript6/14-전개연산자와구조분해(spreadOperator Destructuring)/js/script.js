



{
  let a = 1
  let b = 1
  //여기서 변수가 같은지 확인하면 트루, 같다고 나온다.
  let arr1 = ['가', '나', '다']
  let arr2 = ['가', '나', '다']
  //여기서는 배열이 하나뿐인존재. 이뮤터블하기때문에 같은게 아님. 
  let arr3 = ['가', '나', '다']
  let arr4 = arr3
  //이렇게 하면 두개가 같은거야.
}





{
  let arr = ['가', '나', '다']

  //arrCopy = arr
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    // // arr.forEachc(v => {
    // //   arrCopy.push(v)
    // }) 이 방식이 너무 귀찮으니까 아래 방식으로 쓰는거야
    // arr.pop()
    let arrCopy = [...arr] //전개연산자
    arr.push('라')
    // console.log(...arr);//이건 배열이 아니고 세개의 값으로 분리가 된것.
    // console.log([...arr]);//다시 박스로 쌈
    console.log(arr, arrCopy);
  })
}

{
  let obj = {
    이름: '홍',
    나이: '33',
  }
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let objCopy = { ...obj }
    delete obj.나이
    console.log(obj, objCopy);//배열은 나오는데 객체는 중괄호를 해야만 나옴
  })
}
{
  let obj = {
    이름: '홍',
    나이: '33',
  }
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    //  let 이름 = obj.이름 
    //  let 나이 = obj.나이
    // 이게 예전방법이고 이렇게 하는것도 귀찮으니까 아래의 방법이 생김
    let { 이름, 나이 } = obj //원래 특수문자 못쓰는데 중괄호를 쓰면 구조분해문법 .객체의 키를 변수로 할당해준거라고 할수이따.
    console.log(이름, 나이);
  })
}/* ex3 */
{
  let arr = [1, 2, 3, 4]
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    let [a, b, c, d] = arr
    console.log(a);
    //배열 구조분해는 잘 안씀
  })
}/* ex4 */

