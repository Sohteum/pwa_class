import React, { useState } from 'react';
import { auth, fnCreateUser, fnUpdateProfile } from '../../fb/auth';
import { fnUploadFile } from '../../fb/storage';

const CompSignup = () => {

const [_email, _setEmail] = useState('')
const [_password, _setPassword] = useState('')
const [_nickname, _setNickname] = useState('')
const [_file, _setFile] = useState('')


const fnSignupHandler =async()=>{
await fnCreateUser(_email, _password)
let outputUrl
if(_file){
 let urls = await fnUploadFile(auth.currentUser.uid)
 outputUrl = urls.outputUrl
} //객체를 쪼개서 변수로 사용
else{
 outputUrl = 'https://firebasestorage.googleapis.com/v0/b/todoapp-7c8a2.appspot.com/o/common%2Fno-img.png?alt=media&token=09d91a2d-d76d-41af-9166-9f6ba46a3739'
}  
fnUpdateProfile()
}//fnSignupHandler

  return (
    <section className='section-signup'>
      <h2><img src={require('../../assets/img/register/title-register.png')} alt="" /></h2>
      <form onSubmit={fnSignupHandler}>
        <p className='email'>
          <input onChange={(e)=>{_setEmail(e.target.value)}} value={_email} type="text" placeholder='가입하실 이메일 주소를 입력하세요' required/>
        </p>
        <p className='password'>
          <input onChange={(e)=>{_setPassword(e.target.value)}} value={_password} type="password" placeholder='가입하실 비밀번호를 입력하세요'required />
        </p>
        <p className='nickname'>
          <input onChange={(e)=>{_setNickname(e.target.value)}} value={_nickname} type="text" placeholder='사용하실 닉네임을 입력하세요'required />
        </p>
        <p className='photo-wrap'>
          <input onChange={(e)=>{_setFile(e.target.files[0])}} value={_file} type="file" id='file' className='hidden' />
          <label htmlFor="file">프로필 사진을 업로드 해주세요</label>
        </p>
        <p className='btn'>
          <button><img src={require('../../assets/img/register/btn-register.png')} alt="" /></button>
        </p>
      </form>
    </section>
  );
};

export default CompSignup;