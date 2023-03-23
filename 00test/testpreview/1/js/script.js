$(function () {
  /* 3번버튼의 클릭이벤트가 발생했을때 콘솔의 결과는? */
  /* alert('가나다'+1) */
  function fn(param) {
    return param + 1
  }

  $(`.ex1 button`).click(function () {
    var result = fn($(this).text())
    console.log(result);


  })/* ex1 string */ 
})

$(function () {
/* 2번버튼의 클릭이벤트가 발생했을때 콘솔의 결과는? */
function fn1(param) {
  return param.next('button').attr(`data-n`) + 1
}
function fn2(param) {
  return parseInt(param)
}
function fn3(param) {
  if (param < 10) return false
   return (param > 10) ? param++ : ++param
}
$(`.ex2 button`).click(function () {
  var result = fn1($(this))
  result = fn2(result)
  console.log(fn3(result));
  
})/* ex1 */

})





