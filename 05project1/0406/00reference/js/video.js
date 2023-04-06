// 임베드 이후가 비디오 아이디

$(function(){
$(`.videos_list button`).click(function() {
 var prevSrc = $(`youtube_wrap iframe`).attr(`scr`)
 var videoId = $(this).val() 
var nextSrc =  `https://www.youtube.com/embed/${videoId}`
if(prevSrc===nextSrc) return false
//원래있던주소랑 내가 바꾸고 싶은 소스가 동일하면 바꿀필요가 없다는걸 넣어주는것
$(`.youtube_wrap iframe`).attr(`src`,nextSrc)
/* 소스만 넣으면 그 값을 집어넣겠다는거고 ,쉼표한다음에 다른걸 넣으면 그걸 넣겠다는거. 지금은 클릭한 버튼의 밸류값을 가져와서 주소에 그부분만 계속 바뀌게 하겠다는거 */
  $(`.videos_list button`).removeClass(`active`)
  $(this).addClass(`active`)
})
})