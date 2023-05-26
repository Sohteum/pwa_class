import { createContext, useLayoutEffect, useState } from "react";
import moment from "moment-timezone"; //이렇게 위에서 해줘야함  export뒤에서 하면 에러
import CompCurrent from "./components/compCurrent/CompCurrent";
import CompDaily from "./components/compDaily/CompDaily";
import CompHourly from "./components/compHourly/CompHourly";
import CompMap from "./components/compMap/CompMap";
import { fnGetAddress, fnGetLatLng   } from "./js/map";
import { fnGetWeatherData } from "./js/weather";

export const AppContext = createContext()


function App() {

  const [_latLng, _setLatLng] = useState(null)//위경도상태
  const [_weatherData, _setWeatherData] = useState(null)//날씨데이터
  const [_address, _setAddress] = useState(null)
  const [_timezone, _setTimezone] = useState(null)
 

  const fnAppInit = async () => {//위경도,주소, 날씨정보초기화(받아오는거)세팅
    let latlngObj = await fnGetLatLng() //위도와 경도를 객체로 반환
    _setLatLng(latlngObj)

    // let { timeZoneId } = await fnGetTimezone(latlngObj)//타임존반환
    // _setTimezone(timeZoneId)
//이게 밑에 다 들어있어서 받을 필요가 없다
  
    //타입존 상태설정
   
    let address = await fnGetAddress(latlngObj) //주소를 리턴하는 함수
    _setAddress(address)

    const weatherData = await fnGetWeatherData(latlngObj)//api비동기 통신으로 날씨정보 리턴(이걸로 스테잇을 바꿔야하니 만들어야지)
    _setWeatherData(weatherData)
  }
  // console.log(_weatherData);

  //가상돔이 리얼돔으로 바뀌는 시점. 렌더링이 되기전. 화면이 잠시 끊기는 현상을 제어//유즈이펙트보다 한단계빠름 가상돔이 리얼돔으로 바꾸고 렌더링이 된 시점//비동기일때는 의미없음.비동기자체가 시간이 걸리니까
  useLayoutEffect(() => {
    fnAppInit()//비동기로 위경도를 받아옴
  }, [])

  moment


  return (
    <AppContext.Provider value={{
      fnAppInit,
      _latLng, _setLatLng,
      _weatherData, _setWeatherData,
      _address, _setAddress,
    
    }}>
      <h1><img src={`${process.env.PUBLIC_URL}/img/main/title.png`} alt="" /></h1>

      <div className="app-inner">
        <CompCurrent />
        <CompMap />
        <CompHourly />
        <CompDaily />
      </div>
    </AppContext.Provider>
  );
}

export default App;
