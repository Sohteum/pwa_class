import { codeEnArr, codeKrArr } from "./conditionCode";

export const fnGetWeatherData = (latlngObj) => {
  return new Promise((resolve) => {
    const { lat, lng } = latlngObj
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    //.enb파일을 만드는데 환경변수라고 해서 숨겨야 할 파일을 두는것. api정보 숨기기가능 이거 한다음에 npm껐다가 다시 켜면 됨.
    console.log(process.env.REACT_APP_OPEN_WEATHER_KEY);
    fetch(url) //외부파일을 읽어들인다. then이 나오면 비동기라는거자나
      .then((data) => {//여기는 스트링이 들어오고
        resolve(data.json())//여기서 스트링을 스크립트로 바꿈
      })
      .catch(() => {
        alert('날씨 정보를 받아오던 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요!')//여기 안에 throw error가 들어있어서 따로 안적어도됨
      })
  })
}

export const fnSetWeatherInfo = (weatherDataObj) => {//날씨 정보를 가공해서 리턴하는 함수
  let temp = (weatherDataObj.temp - 273.15).toFixed(1)
  let sunriseHours = new Date(weatherDataObj.sunrise * 1000).getHours() //밀리세컨드에 뉴데잇하면 
  let sunriseApm
  sunriseApm = (sunriseHours <= 12) ? 'am' : 'pm'
  sunriseHours = (sunriseHours > 12) ? sunriseHours - 12 : sunriseHours
  sunriseHours = (sunriseHours < 10) ? '0' + sunriseHours : sunriseHours
  let sunriseMinutes = new Date(weatherDataObj.sunrise * 1000).getMinutes()
  sunriseMinutes = (sunriseMinutes < 10) ? '0' + sunriseMinutes : sunriseMinutes

  let sunsetApm
  let sunsetHours = new Date(weatherDataObj.sunset * 1000).getHours() //am, pm은 먼저 구해줘야함 안그러면 에러빵방
  sunsetApm = (sunsetHours <= 12) ? 'am' : 'pm'
  sunsetHours = (sunsetHours > 12) ? sunsetHours - 12 : sunsetHours
  sunsetHours = (sunsetHours < 10) ? '0' + sunsetHours : sunsetHours
  let sunsetMinutes = new Date(weatherDataObj.sunrise * 1000).getMinutes()
  sunsetMinutes = (sunsetMinutes < 10) ? '0' + sunsetMinutes : sunsetMinutes

  let icon = weatherDataObj.weather[0].icon
  let bg = weatherDataObj.weather[0].main
  let desc = weatherDataObj.weather[0].description
  desc = codeKrArr[codeEnArr.indexOf(desc)]
  let windDeg = weatherDataObj.wind_deg
  let windSpeed = weatherDataObj.wind_speed
  let humidity = weatherDataObj.humidity
  let rain = (weatherDataObj.rain) ? weatherDataObj.rain['1h'] : 0
  let uvi = weatherDataObj.uvi
  let uviDesc
  if (uvi < 3) uviDesc = '낮음'
  else if (uvi >= 3 && uvi < 6) uviDesc = '보통'
  else if (uvi >= 6 && uvi < 8) uviDesc = '높음'
  else if (uvi >= 8 && uvi < 11) uviDesc = '매우높음'
  else uviDesc = '위험'

  let dtDate = new Date(weatherDataObj.dt * 1000)
  let hour = dtDate.getHours()
  let apm = (hour <= 12) ? '오전' : '오후' //아워를 받고난다음에 해애돼
  hour = (hour >= 12) ? hour - 12 : hour
  hour = (hour < 10) ? '0' + hour : hour
  let min = dtDate.getMinutes()
  min = (min < 10) ? '0' + min : min
  let year = dtDate.getFullYear()
  let month = dtDate.getMonth() + 1
  let date = dtDate.getDate()
  let dayArr = ['일', '월', '화', '수', '목', '금', '토']
  let day = dayArr[dtDate.getDay()]

  

  return { temp, sunriseHours, sunriseApm, sunriseMinutes, sunsetHours, sunsetApm, sunsetMinutes, icon, bg, desc, windDeg, windSpeed, humidity, rain, uvi, uviDesc, hour,apm,min,year,month,date,day }
}//fnSetWeatherInfo
