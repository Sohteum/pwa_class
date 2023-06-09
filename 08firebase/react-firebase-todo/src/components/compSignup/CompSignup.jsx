import React, { useContext, useState } from 'react';
import { auth, fnCreateUser, fnSendEmailVerification, fnSignOut, fnUpdateProfile } from '../../fb/auth';
import { fnUploadFile } from '../../fb/storage';
import { AppContext } from '../../App';

const CompSignup = () => {

  const {  _showLoader, _setShowLoader,
    _fadeOut, _setFadeOut,}=useContext(AppContext)

  const [_email, _setEmail] = useState('')
  const [_password, _setPassword] = useState('')
  const [_nickname, _setNickname] = useState('')
  const [_file, _setFile] = useState('')
  const [_fileLabel, _setFileLabel] = useState('프로필사진을 업로드해주세요')


  const fnSignupHandler = async (e) => {
    e.preventDefault()
    _setShowLoader(true)
    _setEmail('');_setPassword('');_setFile('');_setNickname('');_setFileLabel('프로필사진을 업로드해주세요');
    await fnCreateUser(_email, _password, _setFadeOut)
    // let outputUrl
    // if(_file){
    //  let urls = await fnUploadFile(auth.currentUser.uid)
    //  outputUrl = urls.outputUrl
    // } //객체를 쪼개서 변수로 사용
    // else{
    //  outputUrl = 'https://firebasestorage.googleapis.com/v0/b/todoapp-7c8a2.appspot.com/o/common%2Fno-img.png?alt=media&token=09d91a2d-d76d-41af-9166-9f6ba46a3739'
    // } 
    const { outputUrl } = (_file)
      ? await fnUploadFile(auth.currentUser.uid, _file)
      : { outputUrl: 'https://firebasestorage.googleapis.com/v0/b/todoapp-7c8a2.appspot.com/o/common%2Fno-img.png?alt=media&token=09d91a2d-d76d-41af-9166-9f6ba46a3739' }

    await fnUpdateProfile(_nickname, outputUrl)
    await fnSendEmailVerification()
    await fnSignOut()
    alert('가입하신 이메일 주소로 인증메일을 전송했습니다\n인증 후 다시 로그인 해주세요')
    _setFadeOut(true)
    //onAuthState 이벤트에 의해 로그인 주소로 이동할것
  }//fnSignupHandler

  return (
    <section className='section-signup'>
      <h2><img src={require('../../assets/img/register/title-register.png')} alt="" /></h2>
      <form onSubmit={fnSignupHandler}>
        <p className='email'>
          <input onChange={(e) => { _setEmail(e.target.value) }} value={_email} type="text" placeholder='가입하실 이메일 주소를 입력하세요' required />
        </p>
        <p className='password'>
          <input onChange={(e) => { _setPassword(e.target.value) }} value={_password} type="password" placeholder='가입하실 비밀번호를 입력하세요' required />
        </p>
        <p className='nickname'>
          <input onChange={(e) => { _setNickname(e.target.value) }} value={_nickname} type="text" placeholder='사용하실 닉네임을 입력하세요' required />
        </p>
        <p className='photo-wrap'>
          <input onChange={(e) => {
            _setFile(e.target.files[0]);
            (e.target.files[0])&&_setFileLabel(e.target.files[0].name)
          }} type="file" id='file' className='hidden' />
          <label htmlFor="file">{_fileLabel}</label>
        </p>
        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/register/btn-register.png')} alt="" /></button>
        </p>
      </form>
    </section>
  );
};

export default CompSignup;