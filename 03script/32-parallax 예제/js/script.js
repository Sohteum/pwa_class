$(function () {

  $(`section`).each(function () {
    var w = $(this).children('div').innerWidth()
    var winW = $(this).innerWidth()
/*     var offL = $(this).offset().left */
    var offT = $(this).offset().top
    var meta = 0 - Math.abs(scrT -( offT - winW*0.5)) * 0.1
    if (meta < 0) { meta = 0 }
    $(this).css({'transform':`translateX(${meta})`})
  })


})