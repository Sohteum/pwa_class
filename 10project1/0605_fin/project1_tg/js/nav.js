$(document).ready(function(){
/* sm------------------------------------- */
$( `.gnb.sm>ul>li>a`).click(function(e){
  e.preventDefault()   
  $( `.gnb.sm>ul>li>ul`).slideUp(300)  
  $(this).siblings(`ul`).stop().slideToggle(300)  

  $( `.gnb.sm>ul>li>a`).not($(this)).removeClass(`active`)
  $(this).toggleClass(`active`)
})

$(`.mBtn`).click(function(){
  $( `.gnb.sm`).stop().fadeToggle().toggleClass('active')
  $( `.gnb.sm>ul>li>ul`).stop().slideUp() 
  $( `.gnb.sm>ul>li>a`).removeClass(`active`)
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