//  $(function () {
//     var reqID
//     function fnGetWinInfo() {

//         var offT = $(`section`).offset().top
//         var meta = 0 + Math.abs(scrT - (offT)) * 0.1

//         if (meta > 50) { meta = 50 }
//         $(`section`).children(`div`).css({ 'width': `${meta}%` })
//         //px단위로 하면 안되는데 %로 하면 됨
//         console.log(meta);
//     }
//     fnGetWinInfo()
//     $(window).scroll(function () {
//         reqID = requestAnimationFrame(fnGetWinInfo)
//     }).resize(function () {
//         reqID = requestAnimationFrame(fnGetWinInfo)
//     })
// }) 

/* 초기값 + 절대값(스크롤위치 - (스크롤목적지)) * 양수 */


$(function () {
    var reqID
    function fnHeaderMotion() {
        var offT = $(`section`).offset().top
        var meta = 0 + Math.abs(scrT - offT) * 0.1
        if (meta > 50) { meta = 50 }

        if (window.matchMedia(`screen and (min-width:700px)`).matches) {
            $(`div`).css({
                'width': `${meta}%`,
                'height': `100%`,
            })
        } else {
            $(`div`).css({
                'width': `100%`,
                'height': `${meta}%`,
            })
        }
        // $(`div`).css({
        //             'width':`${meta}%`,
        //             'height':`${meta}%`,
        //         }) 
    }
    fnHeaderMotion()
    $(window).scroll(function () {
        reqID = requestAnimationFrame(fnHeaderMotion)
    }).resize(function () {
        reqID = requestAnimationFrame(fnHeaderMotion)
    })
})

/* 미디어쿼리는 가로너비가 스크롤바까지 포함되어있고 윈도우는 딱 윈도우라서 둘이다름 */


/*     window.matchMedia(`screen and (min-width:700px)`).matches */

// $(function () {
//     var reqID
//     function fnHeaderMotion() {
//         var offT = $(`section`).offset().top
//         var meta = 0 + Math.abs(scrT - offT) * 0.1
//         if (mata > 50) { meta = 50 }
//     }

//     if (window.matchMedia(`screen and (min-width:700ox)`).matches) {
//         $(`div`).css({
//             'width': `${meta}%`,
//             'height': `100%`
//         })
//     } else {
//         $(`div`).css({
//             'width':``
//         })
//     }

// })