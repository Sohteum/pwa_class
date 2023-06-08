import React, { useContext } from 'react';
import CompLoggedBefore from './CompLoggedBefore';
import CompLoggedAfter from './CompLoggedAfter';
import { AppContext } from '../../App';

const CompHeader = () => {
  const { _isLogged, _setIsLogged } = useContext(AppContext)

  return (
    <header>
      <img className="pin" src={require('../../assets/img/common/pin.png')} alt="" />
      {
        (_isLogged === false) && <CompLoggedBefore />
      }
      {
        (_isLogged === true) && <CompLoggedAfter />
      }
    </header>
  );
};

export default CompHeader;