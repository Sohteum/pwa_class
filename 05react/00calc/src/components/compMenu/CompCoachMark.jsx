import React, { useState } from 'react';

const CompCoachMark = ({ _setShowCoatch }) => {
  const [_isActive, _setIsActive]=useState('')

  const fnSetLocalCoatch = function (e) {
    if (e.target.checked) {
      window.localStorage.setItem('localCoatch', ' ') //배열이나 객체일때만 스트링기파이 스트링은 할필요없음
    }else{
      window.localStorage.removeItem('localCoatch')
    }
  }

  return (
    <figure onTransitionEnd={()=>{_setShowCoatch(false)}} className={`coatch-mark ${_isActive}`}>
      <img src={require('../../assets/img/coachmark.png')} alt="" />
      <figcaption>
        <p>
          <input onChange={fnSetLocalCoatch} type="checkbox" /> 코치마크 비활성화
        </p>
        <button onTransitionEnd={(e)=>{e.stopPropagation()}} onClick={()=>{_setIsActive('active')}} >skip</button>
      </figcaption>
    </figure>
  );
};

export default CompCoachMark;