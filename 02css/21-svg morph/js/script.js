$(function () {


  //
  var morph1 = new TimelineMax({ paused: false, repeat: -1 }); //false하면 시작하자마자 실행
  morph1
    .to(".ex1 .path1", 1, { morphSVG: ".ex1 .path2", ease: Linear.easeNone })
    .to(".ex1 .path1", 1, { morphSVG: ".ex1 .path3", ease: Linear.easeNone })
    .to(".ex1 .path1", 1, { morphSVG: ".ex1 .path4", ease: Linear.easeNone });

  //path1이1초에 걸쳐서 변한다. 1번이 혼자 다하는거
  //fill은 색도 변하게 할건지, 안할거면 지우면 됨.
  //이게 초기설정. 다음에는 명령어를 붙이기

  //명령어
  morph1.play();

  $(`.ex1`).mouseenter(function () {
    morph1.pause();
  }).mouseleave(function () {
    morph1.play();
  })


  var morph2 = new TimelineMax({ paused: false, repeat: -1 }); //false하면 시작하자마자 실행
  morph2
    .to(".ex2 .path1", 1, { morphSVG: ".ex2 .path2", ease: Linear.easeNone })
    .to(".ex2 .path1", 1, { morphSVG: ".ex2 .path3", ease: Linear.easeNone })
    .to(".ex2 .path1", 1, { morphSVG: ".ex2 .path4", ease: Linear.easeNone });

  morph2.play();


  $(`.ex3 button`).mouseenter(function () {
    var n = $(this).attr('data-n')

    TweenMax.to(".btn"+n+" .path1", 2, { morphSVG: ".btn"+n+" .path2", ease: Linear.easeNone })
  }).mouseleave(function () {

    var n = $(this).attr('data-n')
    TweenMax.to(".btn"+n+" .path1", 2, { morphSVG: ".btn"+n+" .path3", ease: Linear.easeNone })
  })//여기 중첩선택자가 안됨. 그래서 .ex3을 안썻다.


  //사용법1
  

})