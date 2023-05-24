import React, { useContext, useLayoutEffect } from 'react';
import { AppContext } from '../../App';
import { fnInitMap } from '../../js/map';
import CompLoader from '../compLoader/CompLoader';

const CompMap = () => {

  const {
    _latLng, _setLatLng
  } = useContext(AppContext)

  //fnIntiMap()의 파라미터로 전달되어서 클릭이벤트내에서 호출될 함수
  const fnMapClickHandler = function (n) {//클릭햇는데 왜 안뜸얼러트...
    alert(n)
  }
  //함수끼리 꼬여있는거 컬링펌. 이게 싫으면 간단하게 만드는게 컴포넌트에 넣어버리면 됨. 컴포넌트에서 useState를 쓰면 되니까


  useLayoutEffect(() => {
    (_latLng) && fnInitMap(_latLng, fnMapClickHandler)

  }, [_latLng])

  return (
    <section className='comp-map'>
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