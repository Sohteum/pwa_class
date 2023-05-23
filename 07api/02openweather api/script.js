// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// 37.4898688 126.73024


const fnGetLatLng = () => { //현재 위치(위도, 경도)를 받아와서 리턴해주는 함수
  return new Promise((resolve) => {
    //기본적으로 제공되는 자바스크립트 내장객체
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location.coords.latitude, location.coords.longitude);
      resolve(//리졸브 안에 객체로 넣으면됨 //위경도를 받고나서 보내줘야함.쓸수있도록. 근데 객체나 배열로 만들어야함 하나로 만들어야하니까
        {
          lat: location.coords.latitude, //위도
          lng: location.coords.longitude, //경도


        }

      )
    })
  })
}

const fnInitMap = (lat, lng) => { //  지도를 만드는 함수
  let map = new window.google.maps.Map(document.getElementById('map'), {

    center: { lat: lat, lng: lng },
    zoom: 8
  })//map
  let center = { lat: lat, lng: lng }
  let marker = new google.maps.Marker({ position: center, map: map });


  map.addListener('click', async (e) => {
    let lat = e.latLng.lat()
    let lng = e.latLng.lng()
    let address = await fnGetAddress(lat, lng)
    fnOutputAddress(address)
  })//click
}//fn

//이것도 가져오는데 시간이 걸림. 비동기로 만들어야함
const fnGetAddress = function (lat, lng) {
  return new Promise((resolve) => {
    let geocoder = new window.google.maps.Geocoder;
    let latlng = { lat, lng };
    let address
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      // if (status === "OK") {
      //   address = results
      // } else {
      //   address = null
      // }
      try { //try catch구문. 에러가 발생이 되면 캐치문을 이용해서 에러를 내지 않고 아래 문구를 호출하게 됨
        address = results[3].formatted_address //status가 주소가 없으면 false가 나오는거얌 아니면 주소 리턴
      } catch {
        address = "해당위치의 주소가 존재하지 않습니다"
      }
      resolve(address)
    });
  })
}

const fnOutputAddress = (address) => { //받은 주소정보를 이ㅛㅇ해 주소를 출력하는 함수
  document.querySelector('.address').innerText = address
}




/* --------------- 날씨 -------------------- */

//https://api.openweathermap.org/data/3.0/onecall?lat=37.4898688&lon=126.73024&exclude={part}&appid=8031d24621d3a80ad232693f11f57a1f
//이 주소에서 데이터를 받아와야함
//에이작스 엑시오스 패치 이렇게 있음. 패치는 자스 내장함수.외부데이터 받을 때 슴
const fnGetweather = (lat, lng) => {
  return new Promise((resolve) => {
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}lon=${lng}&exclude={part}&appid=8031d24621d3a80ad232693f11f57a1f`
    fetch(url)
      .then((data) => {
        resolve(data.json())
        //이 데이터는 제이슨이라서 사용을 할수없음.프로미스덴은 따로 명령엉가있음 제이슨을 일반 파일로 바꾸는것
      })
      .catch(() => {
        alert('날씨 정보를 받아오던 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요!')
      })
  })//promise
}//fnGetweather

const fnWeatherHandler = async () => {//날씨 출력
  const { lat, lng } = await fnGetLatLng()
  const weatherData = await fnGetweather(lat, lng)
  console.log(weatherData.daily);
}//fnOutputWeather


const fnGoogleMapHandler = async () => {// 현재 위치를 받아서 지도를 그리는 함수
  // result  = await fnGetLatLng()//위경도를 객체로 리턴
  let { lat, lng } = await fnGetLatLng()//구조분해로 받아와도됨
  let address = await fnGetAddress(lat, lng)//주소를 리턴해주는 함수
  fnOutputAddress(address)
  fnInitMap(lat, lng)
}

fnGoogleMapHandler() //맵초기화
fnWeatherHandler() //초기위치를 이용하여 날씨정보리턴



