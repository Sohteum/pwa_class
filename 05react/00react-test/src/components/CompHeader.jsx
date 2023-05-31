import { useContext } from 'react';
import { Appcontext } from '../App';
import React from 'react';
import { useState } from 'react';

const CompHeader = () => {

  const { navi, _isLogged, _setIsLogged } = useContext(Appcontext)

  const fnSignOutHandler = async () => {
    navi('/signin')
  }

  const fnSignInHandler = () => {

  }

  return (
    <header>
      <h2>로고</h2>

      {
        (_isLogged)
          ?
          <div><button onClick={fnSignOutHandler}>사용자로그아웃</button></div>

          :
          <div>
            <button onClick={fnSignInHandler}>로그인</button>
          </div>


      }

    </header>
  );
};

export default CompHeader;