import React, { useContext, useState } from 'react';
import { auth, fnCreateUser, fnSignOut, fnUpdateRrofile, fnsendEmailVerification } from '../fb/auth';
import { Appcontext } from '../App';
import { fnUploadFile } from '../fb/storage';


const CompSignUp = () => {
  const {navi} = useContext(Appcontext)
  const [_email, _setEmail] = useState('')
  const [_password, _setPassword] = useState('')
  const [_nickName, _setNickName] = useState('')
  const [_file, _setFile] = useState('')

  const fnSignUpHandler = async (e) => {
    e.preventDefault()
    await fnCreateUser(_email, _password)
    let url
    if(_file){
      url = await fnUploadFile(auth.currentUser.uid,_file)
    }else{
      url="https://firebasestorage.googleapis.com/v0/b/test-add3b.appspot.com/o/I0M4KJkYJOddxB5exjKP8e4wXKV2%2F1685587869872-photo4.jpg?alt=media&token=8b0ffedc-2408-41c8-b541-1536dd82b5ec"
    }
    await fnUpdateRrofile(_nickName, url)
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
        <p>사진 : <input    onChange={(e) => {_setFile(e.target.files[0])}} type="file" accept="image/*"/></p>
        <button>회원가입</button>
      </form>

    </section>
  );
};

export default CompSignUp;