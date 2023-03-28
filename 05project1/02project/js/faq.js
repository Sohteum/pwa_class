$(function(){
  $(`.faq_list>li>button`).click(function(){
    $(`.faq_list>li>p`).stop().slideUp()
    $(this).siblings('p').stop().slideToggle()
    $(`.faq_list>li>button`).not($(this)).removeClass('active')
    $(this).addClass('active')
  })
})