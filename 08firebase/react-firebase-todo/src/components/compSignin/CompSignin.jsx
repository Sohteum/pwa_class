import React, { useContext, useRef, useState } from 'react';
import { auth, fnSendPasswordResetEmail, fnSetPersistence, fnSignInWithPopup, fnSignin } from '../../fb/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AppContext } from '../../App';

const CompSignin = () => {

  const {
    _showLoader, _setShowLoader,
    _fadeOut, _setFadeOut,
  } = useContext(AppContext)

  const [_email, _setEmail] = useState('')
  const [_password, _setPassword] = useState('')
  const [_checked, _setChecked] = useState(false)
  const refInputEmail = useRef()



  const fnSigninHandler = async (e) => {
    e.preventDefault()
    // _setFadeOut(false)
    _setShowLoader(true)
    //클리어는 연타하는경우에 해주는거고 지금은 모달이 덮으니까 필요없음
    //setTimeout(()=>{_setFadeOut(true)},5000)


    await fnSetPersistence(_checked, _setFadeOut)
    await fnSignin(_email, _password, _setFadeOut)
 
    if (auth.currentUser.emailVerified || auth.currentUser.email === 'guest@mail.com') {
      alert(`${auth.currentUser.displayName}님 환영합니다\n일정페이지로 이동합니다`)
      //onauthState 이벤트에서 home으로 이동됨
    } else {
      alert('이메일 인증 후 다시 로그인을 시도해주세요')
      _setEmail('')
      _setPassword('')
    }
    _setFadeOut(true)
  }

  const fnSignInWithPopupHandler = async () => {
    await fnSignInWithPopup(_setFadeOut)
    alert("구글 계정으로 로그인 하셨습니다")
  }

  const fnSendPasswordResetEmailHandler = async () => {
    const result = window.confirm('이메일 입력창에 주소를 입력 후 사용하세요')
    if (result && _email) {
      await fnSendPasswordResetEmail(_email)
      alert('비밀번호 변경 메일이 발송되었습니다')
    } else {
      refInputEmail.current.focus()
    }
  }//fnSendPasswordResetEmailHandler

  return (
    <section className='section-signin'>
      <h2><img src={require('../../assets/img/login/title-sign-in.png')} alt="" /></h2>
      {/* <div className="list-wrap">
      </div> */}
      <form onSubmit={fnSigninHandler}>
        <p className='email-wrap'>
          <input onChange={(e) => { _setEmail(e.target.value) }} value={_email} ref={refInputEmail} type="email" placeholder='가입하신 이메일 주소를 입력하세요' />
        </p>
        <p className='password-wrap'>
          <input onChange={(e) => { _setPassword(e.target.value) }} value={_password} type="password" placeholder='가입하신 비밀번호를 입력하세요' />
        </p>

        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/login/btn-login.png')} alt="" /></button>
          <button onClick={fnSignInWithPopupHandler} type="button"><img src={require('../../assets/img/login/btn-google-login.png')} alt="" /></button>
        </p>
        <p className='remember-wrap'>
          <input onChange={e => { _setChecked(e.target.checked) }} id='remember' type="checkbox" className='hidden' />
          <label htmlFor="remember">
            <img src={require('../../assets/img/login/remember-check.png')} alt="" />
            <img src={require('../../assets/img/login/remember-checked.png')} alt="" />
          </label>
        </p>
        <p className='password-email-wrap' >
          <button onClick={fnSendPasswordResetEmailHandler} type="button"><img src={require('../../assets/img/login/password-email.png')} alt="" /></button>
        </p>

      </form>

    </section >
  );
};

export default CompSignin;