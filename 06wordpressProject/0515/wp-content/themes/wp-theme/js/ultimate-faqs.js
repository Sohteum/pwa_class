$(function(){
  /* 관리자 faq 페이지 본문에서 script주소를 절대경로를 사용해 추가할 것   */
  $('.ewd-ufaq-faq-title a').click(function(){
    $('.ewd-ufaq-faq-title a').not($(this)).parent().parent().removeClass('ewd-ufaq-post-active')    
    $(this).parent().parent().toggleClass('ewd-ufaq-post-active')
    $(this).parent().parent().not('.ewd-ufaq-post-active').find('span').text('a')//+
    $(this).parent().parent('.ewd-ufaq-post-active').find('span').text('A')//-
    $(this).parent().parent().siblings('div').find('span').text('a')//+
    $(this).parent().parent().siblings().children('.ewd-ufaq-faq-body').stop().slideUp()
    $(this).parent().siblings('.ewd-ufaq-faq-body').stop().slideToggle()
    return false
  })//click
})//ready