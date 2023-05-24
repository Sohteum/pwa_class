window.porfolioArr =
  [
    {
      title: 'JAM Music Website Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb1',
      detail: 'big1',
      class: 'app etc',
    },
    {
      title: 'Idol Master GUI Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb2',
      detail: 'big2',
      class: 'web etc',
    },
    {
      title: 'soul linker GUI Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb3',
      detail: 'big1',
      class: 'app',
    },
    {
      title: 'NICE NPAY GUI Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb4',
      detail: 'big4',
      class: 'app etc',
    },
    {
      title: 'Hongil-Kim',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb5',
      detail: 'big5',
      class: 'app web',
    },
    {
      title: 'LEEWAY',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb6',
      detail: 'big6',
      class: 'web etc',
    },
    {
      title: 'HEAL DENTAL CLINIC Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb7',
      detail: 'big7',
      class: 'web etc app',
    },
    {
      title: 'EBS bandi Application GUI Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb8',
      detail: 'big8',
      class: 'web app',
    },
    {
      title: 'SHINHAN INVISTA',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam excepturi magni',
      thumb: 'thumb9',
      detail: 'big9',
      class: 'web etc',
    },
  ]

//여기서 만들지않고 레디펑션 안에 만들면 php에서 선언한게 여기에서 선언한걸 찾다가 오류가 남

$(function () {
  hover_box('.portfolio figure', 'figcaption')

  var reqID
  function fn() {
    $(`.portfolio li`).each(function () {
      var elT = $(this).offset().top
      var elH = $(this).innerHeight()
      var meta = 0 + (scrT - (elT - winH * 0.5 + elH * 0.5)) * -0.1
      $(this).find('img').css({ 'tansform': `scale(1.2) translateY(${meta}px)` })
    })
  }
  fn()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fn)
  }).resize(function () {
    reqID = requestAnimationFrame(fn)
  })

  $(window).load(function () {
    var $container = $('.portfolio');
    var filterSelect = "*"
    fn_isotope()
    function fn_isotope() {
      $container.isotope({
        filter: filterSelect,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }//animationOptions
      })//isotope
    }//fn
    $('.section4 .btns button').click(function () {
      filterSelect = $(this).val()
      $(`.section4 .btns button`).removeClass('active')
      $(this).addClass('active')
      fn_isotope()
    })//click	
    $(window).resize(function () {
      fn_isotope()
    })//resize
  })//load

  $(`.portfolio li a `).click(function (e) {
    e.preventDefault()
    $(`.modal`).fadeIn() //여긴 스탑 할필요없음 이미 모달이 나와서 ...큐스택이 쌓일일이 없어서 
    $(`body`).css({ 'overflow': `hidden` })
    $(`.modal .loader`).show()
    $(`.modal`).append(`
    <img src="${$(this).attr('href')}" alt/>
    `)
    $(`.modal img`).load(function(){
      $(this).fadeIn()
      $(`.modal .loader`).fadeOut()
    })
    $(`.modal img`).click(function(e){
      e.stopPropagation()//이미지 클릭하면 안닫히고 부모 클릭해야 닫히게
    })
    //  클릭한 앵커의 하이퍼레퍼런스.이미지를 만들어서 모달에 어팬드한다.
  })

  $(`.modal`).bind('mousewheel', function (e) {
    e.stopPropagation() //자식(모달)이 부모의 행동을 막는다(부모한테 마우스 휠 이벤트를 못하게 막음. 부모에 마우스휠 안되게 막아놔서) //이벤트버블링
  })

  $(`.modal`).click(function(){
    $(this).fadeOut() //보통여백을 클릭하면 닫히고 이미지를 클릭할때는 안닫히게 만들어야함
    $(`.modal img`).remove()
    $(`body`).css({ 'overflow': `auto` })
  })

})

//원래 스피너를 달아야함. 이미지를 로드하는데 시간이 걸리니까. 로딩이 끝날때 이미지가 딱 나와야함.csss로 