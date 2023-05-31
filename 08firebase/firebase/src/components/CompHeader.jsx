import React, { useContext } from 'react';
import { Appcontext } from '../App';

const CompHeader = () => {
  const { _isLogged, _setIsLogged } = useContext(Appcontext)
  return (
    <header>
      <h2>firebase</h2>
      {
        (_isLogged)
          ?
          <div>
            로그인후
          </div>
          :
          <div>
            로그인전
          </div>
      }
      <hr />
    </header>
  );
};

export default CompHeader;