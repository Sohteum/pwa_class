import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const CompHeader = () => {

  const { _user, _setUser } = useContext(AppContext)
  const navi = useNavigate()
  
  return (
    <header>
      {
        _user ?
          <div>(로그인후)
            <p>{_user.name}님 환영합니다</p>
            <button onClick={() => {
              _setUser(null)
              localStorage.removeItem('localStorageUser')
              navi('/signin')
            }}>로그아웃</button>
          </div>
          :
          <div>
            (로그인전) <br />
            <Link to='signin'>로그인</Link>
          </div>
      }
      <hr />
    </header>
  );
};

export default CompHeader;