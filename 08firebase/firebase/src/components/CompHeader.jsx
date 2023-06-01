import React, { useContext } from 'react';
import { Appcontext } from '../App';
import { auth, fnDeleteUser, fnSignOut } from '../fb/auth';
import { Link } from 'react-router-dom';

const CompHeader = () => {
  const { navi, _isLogged, } = useContext(Appcontext)

  const fnSignOutHandler = async () => {
    await fnSignOut()
    navi('/signin')
  }

  const fnDeleteUserHandeler = async () => {
    const result = window.confirm('회원을 탈퇴하시겠습니까?')
    if (result) {
      await fnDeleteUser()
      alert('회원탈퇴가 되었습니다')
      navi('/signin')
    }
  }

  return (
    <header>
      <h2>firebase</h2>
      {
        (_isLogged)
          ?
          <div>
            <img style={{width:'50px',height:'50px',objectFit:"cover",objectPosition:"center"}} src={auth.currentUser.photoURL} alt="" />
            <b>{auth.currentUser.displayName}</b>
            <button onClick={fnSignOutHandler}>로그아웃</button>
            <button onClick={fnDeleteUserHandeler}>회원탈퇴</button>
          </div>
          :
          <div>
            <Link to='/signin'>로그인</Link>
            <Link to='/signup'>회원가입</Link>
          </div>
      }
      <hr />
    </header>
  );
};

export default CompHeader;