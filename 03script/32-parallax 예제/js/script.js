$(function () {




/*     var offL = $(this).offset().left */
    var offT = $(`section`).offset().top
    var meta = 0 + Math.abs(scrT -(offT)) * 0.1
    if (meta > 50) { meta = 50 }
    $(`section`).css({'width': `${meta}`})



})

/* 초기값 + 절대값(스크롤위치 - (스크롤목적지)) * 양수 */