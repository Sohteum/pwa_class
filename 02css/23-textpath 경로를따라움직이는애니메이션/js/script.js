$(function () {

  morph = new TimelineMax({ repeat: -1 }); //-1무한반복 
  morph.to("#ex2_path", 1, { morphSVG: ".path1", ease: Linear.easeNone })
    .to("#ex2_path", 1, { morphSVG: ".path2", ease: Linear.easeNone });
})