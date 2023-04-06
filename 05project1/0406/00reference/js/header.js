$(function(){
var reqID
function fnHeaderMotion() {
  if (scrT>35) {
    $(`header`).addClass(`active`)
  } else $(`header`).removeClass(`active`)
}
fnHeaderMotion()
$(window).scroll(function(){
  reqID = requestAnimationFrame(fnHeaderMotion)
}).resize(function(){
  reqID = requestAnimationFrame(fnHeaderMotion)
})
})