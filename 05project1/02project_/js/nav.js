$(function () {
  $(`.nav_bar.sm>ul>li>a`).click(function (e) {
    e.preventDefault()
    $(`.nav_bar.sm>ul>li>ul`).slideUp(300)
    $(this).siblings(`ul`).stop().slideToggle(300)

    $(`.nav_bar.sm>ul>li>a`).not($(this)).removeClass(`active`)
    $(this).toggleClass(`active`)
  })



  $(`.btn`).click(function () {
    $(`.nav_bar.sm`).stop().fadeToggle().toggleClass('active')
    $(`.nav_bar.sm>ul>li>ul`).stop().slideUp()
    $(`.nav_bar.sm>ul>li>a`).removeClass(`active`)
    $(this).toggleClass(`active`)
  })



  $(`.nav_bar.lg>ul>li`).mouseenter(function () {
    $(this).children(`ul`).stop().slideDown()
  })
  $(`.nav_bar.lg>ul>li`).mouseleave(function () {
    $(`.nav_bar.lg>ul>li>ul`).stop().slideUp()
  })

})