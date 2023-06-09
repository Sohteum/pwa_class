import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

const CompLoader = () => {

  const { _setShowLoader,
    _fadeOut, _setFadeOut } = useContext(AppContext)


  return (
    <div onTransitionEnd={() => {
      _setShowLoader(false);
      _setFadeOut(false);
    }} className={`loader ${_fadeOut && 'fade-out'}`}>
      <h6> <img src={require('../../assets/img/header/title-main.png')} alt="" />      </h6>
      <img className='main-bg' src={require('../../assets/img/common/main-bg.png')} alt="" />
      <figure>
        <img className='spinner' src={require('../../assets/img/icons/spinner.gif')} alt="" />
        <img className='pencil' src={require('../../assets/img/footer/pencil-animated.gif')} alt="" />
      </figure>
    </div>
  );
};

export default CompLoader;