
function fnGetDDay(dday, now) {
  let diff = dday - now
  let remainfSec = parseInt(diff / 1000)
  let date = Math.floor(remainfSec / (24 * 60 * 60))
  remainfSec = remainfSec % (24 * 60 * 60)
  let hour = Math.floor(remainfSec / (60 * 60))
  remainfSec = remainfSec % (60 * 60)
  let min = Math.floor(remainfSec / 60)
  let sec = remainfSec % 60

  return { date, hour, min, sec }
}

let timeStamp = Date.now()
const dDayTimeStamp = new Date(2023, 3, 26).getTime()
const { date, hour, min, sec } = fnGetDDay(dDayTimeStamp, timeStamp)


let intervalID

intervalID = setInterval(() => {
  timeStamp = Date.now()
  const { date, hour, min, sec } = fnGetDDay(dDayTimeStamp, timeStamp)
  document.querySelector(`.print`).innerHTML =
    `${date}일: ${hour}시간 : ${min}분 : ${sec}초`
}, 1000)

