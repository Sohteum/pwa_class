import React, { useContext, useState } from 'react';
import { auth, fnCheckEmailVerification, fnSignIn, fnSignOut } from '../fb/auth';
import { Appcontext } from '../App';
import { Navigate } from 'react-router-dom';

const CompSignIn = () => {
const {navi} = useContext(Appcontext)
  const [_email, _setEmail] = useState('')
  const [_password, _setPassword] = useState('')

  const fnSignInHandler = async(e) => {
    e.preventDefault()
    await fnSignIn(_email, _password)
    if(fnCheckEmailVerification()){
      alert(`${auth.currentUser.displayName}님 환영합니다`)
      navi('/')
    }else{
      await fnSignOut()
      _setEmail('')
      _setPassword('')
      alert('이메일 확인 후 다시 로그인해주세요')
    }
  }

  return (
    <section>
      <h3>로그인</h3>
      <form onSubmit={fnSignInHandler}>
        <p>이메일 : <input value={_email} onChange={(e) => { _setEmail(e.target.value) }} type="email" required /></p>
        <p>
          비밀번호 : <input value={_password} onChange={(e) => { _setPassword(e.target.value) }} type="password" required />
        </p>
        <button>로그인</button>

      </form>
    </section>
  );
};

export default CompSignIn;