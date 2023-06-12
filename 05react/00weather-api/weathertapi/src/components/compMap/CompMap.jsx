import React, { useContext, useLayoutEffect, useState } from 'react';
import { AppContext } from '../../App';
import { fnGetAddress, fnInitMap } from '../../js/map';
import CompLoader from '../compLoader/CompLoader';
import { fnGetWeatherData } from '../../js/weather';

const CompMap = () => {
  const [_isActive, _setIsActive] = useState(false)

  const {
    _latLng, _setLatLng,
    _weatherData, _setWeatherData,
    _address, _setAddress,
    _setAddressEn, _setAddressKo,
  } = useContext(AppContext)




  //fnIntiMap()의 파라미터로 전달되어서 클릭이벤트내에서 호출될 함수
  const fnMapClickHandler = async (latlngObj) => {
    let addressEn = await fnGetAddress(latlngObj) //주소를 리턴하는 함수
    _setAddressEn(addressEn)
    let addressKo = await fnGetAddress(latlngObj) //주소를 리턴하는 함수
    _setAddressKo(addressKo)
    const weatherData = await fnGetWeatherData(latlngObj)//api비동기 통신으로 날씨정보 리턴(이걸로 스테잇을 바꿔야하니 만들어야지)
    _setWeatherData(weatherData)
    _setIsActive(false)
    document.querySelector('.app-inner').scrollTo({ top: 0, behavior: 'smooth' })
    document.querySelectorAll('.section-inner').forEach((el) => {
      el.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
    document.querySelectorAll(`.comp-daily li .detail`).forEach((e) => {
      e.style.display = 'none'
      e.previousElementSibling.classList.remove('active')
    })
  }
  //함수끼리 꼬여있는거 컬링펌. 이게 싫으면 간단하게 만드는게 컴포넌트에 넣어버리면 됨. 컴포넌트에서 useState를 쓰면 되니까
  //콘솔에서 없는것 호출하면 에러뜨니 콘솔도 주의하자!


  useLayoutEffect(() => {
    (_latLng) && fnInitMap(_latLng, fnMapClickHandler)

  }, [_latLng])

  return (
    <section className={`comp-map ${_isActive && 'active'}`}>
      <div className='btns'>
        <button onClick={() => { _setIsActive(true) }}><i className="fa-solid fa-map-location-dot"></i></button>
        <button onClick={() => {
          _setIsActive(false)

        }}><i className="fa-solid fa-xmark"></i></button>

      </div>
      <div className="section-inner">
        {
          (_latLng) ?
            <div id="map"></div>
            :
            <CompLoader />
        }
      </div>
    </section>
  );
};

export default CompMap;


/* 
컴포넌트가 만들어지는(실행되는) 순서[부모->자식]
-부모에서 자식으로 가니까. 만들기를 시작하는건 부모부터 읽는거지. 그럼 
컴포넌트가 완료되는 시점(화면에 출력되는 시점)레이아웃이펙트나 유즈이펙트 시점이라고 함[부모->자식]
컴포넌트가 완료되는시점(useEffect): 자식(위경도를 호출)
*/