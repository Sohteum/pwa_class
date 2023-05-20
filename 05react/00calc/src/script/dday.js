// fnGetNow(new Date(2023,12,12,15,23)) 예를 들면 이런식으로 넣을예정

export const fnGetDateInfo = function (dateObj) {
  /* new Date() */ //오늘 아니고 현재
  let dayArr = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
  let day = dayArr[dateObj.getDay()]
  let year = dateObj.getFullYear()
  let month = dateObj.getMonth() + 1
  month = (month < 10) ? '0' + month : month //이항연산자는 아님. 이게 아니면 폴스를 리턴하겠다는 뜻이기때문에. 조건문으로 적어도 된다
  let date = dateObj.getDate()
  date = (date < 10) ? '0' + date : date
  let ap = (dateObj.getHours() <= 12) ? 'am' : 'pm'
  let hour = (dateObj.getHours() <= 12) ? dateObj.getHours() : dateObj.getHours() - 12
  hour = (hour < 10) ? '0' + hour : hour
  let min = dateObj.getMinutes()
  min = (min < 10) ? '0' + min : min
  let sec = dateObj.getSeconds()
  sec = (sec < 10) ? '0' + sec : sec
  let timeStamp = dateObj.getTime()//70년대부터 이 날짜까지의 시간을 밀리세컨으로 구함


  return { day, year, month, date, ap, hour, min, sec, timeStamp }
}

export const fnDdayArrInit = function () {
  let ddayArrStorage = localStorage.getItem('ddayArrStorage')
  let ddayArr = //
    (ddayArrStorage) ? //사용자 dday목록이 로컬스토리지에 존재하면
      JSON.parse(ddayArrStorage) //로컬스토리지 배열을 parse해서 가져옴
      :
      [
        {
          id: Date.now(), //date.now는 한번만 써줘야함. 두개 같이 넣으면 컴 연산속도가 빠르니까 같은 값을 찍어버림. 
          title: '새해(sample data)',
          dday: new Date(new Date().getFullYear() + 1, 0, 1) //안쪽부터 오늘에 1을 더해서 내년으로 만들고 0월 1일  
         // dday: new Date(2023,4,18) //안쪽부터 오늘에 1을 더해서 내년으로 만들고 0월 1일  
        },
      ] // 없으면 사용자가 볼수있도록 예시 하나 출력
  return ddayArr
}//fnDdayArrInit //배열이없을때 초기화, 사용자가 처음 들어왔을때

export const fnTimer = function (ddayTimeStamp) {//현재타임스탬프와 디데이타임스템프의 차이를 구하는것. 그 차이가 1000을 곱한 상태로 나옴
  let diffTimeStamp = ddayTimeStamp - Date.now()
  let diffSec = parseInt(diffTimeStamp / 1000) //밀리세컨으로 나오니까 초를 구하기 위해 1000을 나눔.
  let remain
  let remainDays = parseInt(diffSec / (24 * 60 * 60))//24시간 60분 60초
  remain = parseInt(diffSec % (24 * 60 * 60))
  let remainHours = parseInt(remain / (60 * 60)) //3600초가 한시간이니까
  remain = parseInt(remain % (60 * 60))
  let remainMinutes = parseInt(remain / 60)
  let remainSecs = parseInt(remain % 60)
  if(diffTimeStamp<0){
     remainDays=0; remainHours=0; remainMinutes=0; remainSecs=0; 
  }

  return { diffSec, remainDays, remainHours, remainMinutes, remainSecs }

}

//초를 하루로 나누고 계속 나눠가지는거지. 그게[ ]