export const fnGetWeatherData = (latlngObj) => {
  return new Promise((resolve) => {
    const {lat, lng} = latlngObj
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

export const fnSetWeatherInfo = (weatherDataObj)=>{//날씨 정보를 가공해서 리턴하는 함수
  let temp = (weatherDataObj.temp -273.15).toFixed(1)
  return {temp}
}//fnSetWeatherInfo