$(function(){
  // location.pathname.split('/')//이렇게 하면 배열로 나오는데 나는 지금 1번째 배열이 필요함['','about','어쩌구']
  // console.log(location.href); //주소를 가져오는 것 pathname은 도메인 뜯어버리고 가져오는것
  // $(`.sub-visual .${menuCategory}`).fadeIn().show() //display none인 상태에서 바로 보여주면서 효과를 주면 안되고 잠시 기다린 후에 settimetoue같은거를 쓰거나 제이쿼리는 fadein을 함
  
  var menuCategory = location.pathname.split('/')[1] //pathname은 호스트주소 빼고 나머지를 얘기하는것.
  $(`.sub-visual .${menuCategory}`).fadeIn().addClass('active') 

  var type1 = new Type_effect(`.sub-visual .${menuCategory} h6`, 100) //제이쿼리용. 객체가 2개 이상이면 안됨 유일한 객체여야 함 예를 들면 서브비주얼의h6이런식으로 하나만
  type1.play()
  var type2 = new Type_effect(`.sub-visual .${menuCategory} p`, 30) 
  type2.play()

  $(`.theme-guide button`).click(function(){
    $(`.theme-guide`).slideUp()
  })
})