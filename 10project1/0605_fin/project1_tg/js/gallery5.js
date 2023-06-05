
$(function(){


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