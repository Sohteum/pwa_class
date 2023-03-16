$(function () {/* ex1 */
  $(`.ex1 button`).click(function () {
    var num1 = parseInt($(`.ex1 .num1`).val())
    var num2 = parseInt($(`.ex1 .num2`).val())
    var sum = num1 + num2
    $(`.ex1 .output`).text(sum)
  })
})/* ex1 end */

$(function () {/* ex2 */
  $(`.ex2 button`).click(function () {
    var num1 = parseInt($(`.ex2 .num1`).val())
    var result = (num1 >= 5 && num1 <= 10) ? '정답' : '오답'
    $(`.ex2 .output`).text(result)
  })
})/* ex2 end */


$(function () {/* ex3 */
  var num = 0
  $(`.ex3 button`).click(function () {
    ++num
    if (num > 5) { num = 5 }
    $(`.ex3 .output`).text(num)
  })
})/* ex3 end */


$(function () {/* ex4 */
  $(`.ex4 .box`).click(function () {
    $(`.ex4 .box`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
})/* ex4 end */


$(function () {/* ex5 */
  $(`.ex5 .btn1`).click(function () {
    $(`.ex5 div`).each(function () {
      var bg = $(this).text()
      $(this).css({ 'background': bg })
    })

    $(`.ex5 .btn2`).click(function () {
      $(`.ex5 div`).css({ 'background': `none` })
    })
  })

})/* ex5 end */