export const fnSetObj = (n) => {
  let obj = {}


  for (let i = 1; i <= 2; i++) {
    obj[i] = false
  }
  obj[n] = true  

  return obj
}
