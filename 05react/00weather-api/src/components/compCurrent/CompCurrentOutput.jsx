import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { fnGetWeatherData, fnSetWeatherInfo } from '../../js/weather';

const CompCurrentOutput = () => {

  const {
    _weatherData,
    _address, _setAddress,
  } = useContext(AppContext)

const {temp} = fnSetWeatherInfo(_weatherData.current)

  //console.log(_weatherData);//바로 찾을 수 있는 이유: 웨더데이터가 유효해야 출력이 되므로 _weatherData데이터를 바로 사용할 수 있음

  // useEffect(()=>{ //업데이트 되었을때 함수를 다시 그려내기 복잡하니까 그런건데..일단 나중에 다시 쓰던가합시당
  // },[])

  return (
    <div className='current-output' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/weather/Drizzle.jpg)` }}>{/* 퍼블릭폴더 dksdp dlTsmsrj ckwdmfEo */}

      <address>{_address}</address>
      <div className="circle-container">
        <div className="circle-inner">
          {temp} {/* temp는 변수. 변수를 여기 넣을 수 있는 이유는 스테잇이 바뀌면 변수도 바뀌니까.리렌더링된다는건 전부다 바뀐다는것 */}
        </div>

      </div>


    </div>
  );
};

export default CompCurrentOutput;