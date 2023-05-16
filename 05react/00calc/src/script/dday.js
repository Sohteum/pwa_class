// fnGetNow(new Date(2023,12,12,15,23)) 예를 들면 이런식으로 넣을예정

export const fnGetNow = function (dateObj) {
 /* new Date() */ //오늘 아니고 현재
  let dayArr = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
  let day = dayArr[dateObj.getDay()]
  let year = dateObj.getFullYear()
  let month = dateObj.getMonth() + 1
  month = (month<10)? '0'+month:month //이항연산자는 아님. 이게 아니면 폴스를 리턴하겠다는 뜻이기때문에. 조건문으로 적어도 된다
  let date = dateObj.getDate()
  date = (date<10)? '0'+date:date
  let ap = (dateObj.getHours() <= 12) ? 'am' : 'pm'
  let hour = (dateObj.getHours() <= 12) ? dateObj.getHours() : dateObj.getHours() - 12
  hour= (hour<10)? '0'+hour:hour
  let min = dateObj.getMinutes()
  min= (min<10)? '0'+min:min
  let sec = dateObj.getSeconds()
  sec= (sec<10)? '0'+sec:sec


  return { day, year, month, date, ap, hour, min, sec }
}