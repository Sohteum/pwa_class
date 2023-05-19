$(function(){
  $(window).load(function(){
    $(`.category-webzin-section ul `).masonry({items:'.category-webzin-section ul li'}) //로드이벤트 안에서 해야함. 왜냐면 이미지 사이즈 인식할 시간이 필요함
  })
})