import React, { useContext, useState } from 'react';
import { auth, fnCreateUser, fnSignOut, fnUpdateRrofile, fnsendEmailVerification } from '../fb/auth';
import { Appcontext } from '../App';


const CompSignUp = () => {
  const {navi} = useContext(Appcontext)
  const [_email, _setEmail] = useState('')
  const [_password, _setPassword] = useState('')
  const [_nickName, _setNickName] = useState('')

  const fnSignUpHandler = async (e) => {
    e.preventDefault()
    await fnCreateUser(_email, _password)
    await fnUpdateRrofile(_nickName)
    await fnsendEmailVerification()
    await fnSignOut()
    navi('/signin')
  }


  
  return (
    <section>
      <h3>회원가입</h3>

      <form onSubmit={fnSignUpHandler}>
        <p>이메일 : <input value={_email} onChange={(e) => { _setEmail(e.target.value) }} type="email" required /></p>
        <p>비밀번호 : <input value={_password} onChange={(e) => { _setPassword(e.target.value) }} type="password" required /></p>
        <p>닉네임 : <input value={_nickName} onChange={(e) => { _setNickName(e.target.value) }} type="text" required /></p>
        <button>회원가입</button>
      </form>

    </section>
  );
};

export default CompSignUp;