$(function(){




$(`.nav_bar.lg>ul>li`).mouseenter(function(){

  $(this).children(`ul`).stop().slideDown()
})

})