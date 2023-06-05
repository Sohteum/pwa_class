
$(function(){
$(`.videos_list button`).click(function() {
 var prevSrc = $(`youtube_wrap iframe`).attr(`scr`)
 var videoId = $(this).val() 
var nextSrc =  `https://www.youtube.com/embed/${videoId}`
if(prevSrc===nextSrc) return false
$(`.youtube_wrap iframe`).attr(`src`,nextSrc)
  $(`.videos_list button`).removeClass(`active`)
  $(this).addClass(`active`)
})
})