
$(function(){

  // 카테고리를 만들어주는게 아이소토프. 위에 탭에서 클릭하면 그 클래스에 해당하는 애들만 좌르르 나오는것 
  //마찬가지로 패럴랙스나 그런거 안됨.

  $(window).load(function(){
		var $container = $('.isotope_container');
		var filterSelect ="*"
		fn_isotope()
		function fn_isotope(){
			$container.isotope({
				filter: filterSelect,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}//animationOptions
			})//isotope
		}//fn
		$('.btn_container button').click(function(){
      //모든 버튼
			filterSelect = $(this).val()
			fn_isotope()
		})//click	
		$(window).resize(function(){
			fn_isotope()
		})//resize
	})//load

  $(`.gallery5_section .btn_container button`).click(function(){
    $(`.gallery5_section .btn_container button`).removeClass('active')
    $(this).addClass('active')
  })


  })