$(document).ready(function(){
/* sm------------------------------------- */
$( `.gnb.sm>ul>li>a`).click(function(e){
  e.preventDefault()  //링크를 타고 가는걸 막아줌
  $( `.gnb.sm>ul>li>ul`).slideUp(300) //여러개 클릭하면 지금 클릭한거 빼고 다 접히게하기
  $(this).siblings(`ul`).stop().slideToggle(300) //스탑을 달아서 스택쌓이는걸 막음

  $( `.gnb.sm>ul>li>a`).not($(this)).removeClass(`active`)
  $(this).toggleClass(`active`)
})

$(`.mBtn`).click(function(){
  $( `.gnb.sm`).stop().fadeToggle().toggleClass('active')
 /*  $( `.gnb.sm`).toggleClass('active') 체인문법이라고 해서 제이쿼리에서는 위처럼 쓸수있음 페이드토글이랑 토글클래스 두개 다 넣는거.*/
  $( `.gnb.sm>ul>li>ul`).stop().slideUp()/* 메뉴끄고 다시 켰을때 아코디언 메뉴 접기 */
  $( `.gnb.sm>ul>li>a`).removeClass(`active`)/* 메뉴끄고 다시 켰을때 색상 없애기 */
  $(this).toggleClass(`active`)
})
/* lg----------------------------------------- */
$(`.gnb.lg>ul>li`).mouseenter(function(){
  $(this).children(`ul`).stop().slideDown()
})
$(`.gnb.lg>ul>li`).mouseleave(function(){
  $(`.gnb.lg>ul>li>ul`).stop().slideUp()
})
  

})