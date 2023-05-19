$(function(){
  $(window).load(function(){
    $(`.category-gallery-section ul `).masonry({items:'.category-gallery-section ul li'}) //로드이벤트 안에서 해야함. 왜냐면 이미지 사이즈 인식할 시간이 필요함


  })
})