export const fnSetObj = (n) => {
  let obj = {}


  for (let i = 1; i <= 2; i++) {
    obj[i] = false
  }
  obj[n] = true //근데 무조건 1번이 되면 안됨. 그러니까 함수를 실행할때 나는 몇번을 바꾸고싶은지 넣는거임 너가 넣는 n번째를 내가 바꿀게

  return obj
}

//여기서는 100개라고 가정하는거야