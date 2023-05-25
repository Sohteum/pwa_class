window.headerH; 
window.offT1; window.offT2; window.offT3; window.offT4; window.offT5; window.offT6; 
window.offsetArr; 
window.currentSection
//전역 변수로 변경

/* get section offset */
$(function(){
  
  var reqID
  function fn(){
    if(window.matchMedia('screen and (min-width:1000px').matches) headerH = 70
    else headerH = 60

    offT1 = $(`.section1`).offset().top
    offT2 = $(`.section2`).offset().top - headerH
    offT3 = $(`.section3`).offset().top - headerH
    offT4 = $(`.section4`).offset().top - headerH
    offT5 = $(`.section5`).offset().top - headerH
    offT6 = $(`.section6`).offset().top - headerH
    offsetArr = [offT1,offT2,offT3,offT4,offT5,offT6]
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
})

$(function(){
  var reqID
  function fn(){
    //header
    if(scrT > 200){
      $(`header`).addClass(`active`)
      TweenMax.to("header .line",1,{morphSVG:"header .zigzag",ease:Linear.easeNone})
    }else{
      $(`header`).removeClass(`active`)
      TweenMax.to("header .line",1,{morphSVG:"header .linecopy",ease:Linear.easeNone})
    }    
    
    if(window.matchMedia(`screen and (max-width:1000px)`).matches){
      $(`header`).addClass(`active`)
    } //모바일이라면

    var scrRange = docH - winH //scroll 가능 거리
    var scrRatio = scrT / scrRange 
    var dashOffset = -(1 - scrRatio)
    $(`header .line`).css({'stroke-dashoffset':dashOffset})
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
  
})

$(function(){
  /* menu */
  $(`.mbtn`).click(function(){
    $(this).toggleClass(`active`)
    $(`.gnb-sm`).stop().slideToggle()
  })

  $(`.gnb a`).click(function(e){
    e.preventDefault()
    $(`.gnb-sm`).stop().slideUp()
    $(`.mbtn`).removeClass(`active`)
    var n = parseInt($(this).attr('href'))
    $(`body,html`).stop().animate({'scrollTop':offsetArr[n - 1]}) //내부링크 이동하는거
    /* window.scrollTo({
      top: offsetArr[n-1], 
      behavior:'smooth',   
    }) // 바닐라로 사용할 때 내부링크 이동하는거 */
  })
})

$(function(){
  /* scroll spy */
  var reqID
  function fn(){
    if(scrT < offT2){
      currentSection = 1
    }else if(scrT >= offT2 - 1 && scrT < offT3 - 1){
      currentSection = 2
    }else if(scrT >= offT3 - 1 && scrT < offT4 - 1){
      currentSection = 3
    }else if(scrT >= offT4 - 1 && scrT < offT5 - 1){
      currentSection = 4
    }else if(scrT >= offT5 - 1 && scrT < offT6 - 1){
      currentSection = 5
    }else{
      currentSection = 6
    }
    
    $(`.gnb a`).removeClass(`active`)
    $(`.gnb .link${currentSection}`).addClass(`active`)
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
})

/* side scrollspy */
$(function(){
  var reqID
  function fn(){
    var scrollRange = docH - winH //scroll 가능 거리 범위 (문서전체 높이에서 브라우저 높이 빼는 거)
    var scrollRatio = scrT / scrollRange //scroll 비율 (0에서 1사이가 나온다)

    $(`.scrollspy .progress`).css({'stroke-dashoffset':1-scrollRatio})
    $(`.scrollspy .circle`).css({'offset-distance':`${scrollRatio*100}%`})

  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})