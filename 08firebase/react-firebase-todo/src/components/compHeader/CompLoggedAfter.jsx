import React, { useContext } from 'react';
import { auth, fnDeleteUser, fnSignOut } from '../../fb/auth';
import { AppContext } from '../../App';
import { fnDeleteCollection } from '../../fb/db';
import { fnDeleteFolder } from '../../fb/storage';

const CompLoggedAfter = () => {
  const { _setShowLoader, _setFadeOut } = useContext(AppContext)


  const fnSignoutHandler = async () => {
    _setShowLoader(true)
    await fnSignOut()
    alert('로그아웃하였습니다\n로그인페이지로 이동합니다')
    _setFadeOut(true)
  }

  const fbDeleteUserHandler = async () => {
    const result = window.confirm('회원님과 관련된 모든 정보가 삭제됩니다\n정말 탈퇴하시겠습니까?')
    if (!result) return false

    await fnDeleteFolder(auth.currentUser.uid)
    await fnDeleteUser(auth.currentUser.uid)
    await fnDeleteCollection(_setFadeOut)
    alert('회원에서 탈퇴하셨습니다\n로그인 페이지로 이동합니다')
    _setFadeOut(true)
  }

  return (
    <div className='logged-after'>
      <p className='user'>
        <img src={auth.currentUser.photoURL} alt="" />
        <span>
          <em>{auth.currentUser.displayName}</em>
          <em>{auth.currentUser.email}</em>
        </span>
      </p>
      <p className='btns'>
        <button onClick={fnSignoutHandler}><img src={require('../../assets/img/header/btn-sign-out.png')} alt="" /></button>
        <button onClick={fbDeleteUserHandler}><img src={require('../../assets/img/header/btn-deresgister.png')} alt="" /></button>
      </p>
    </div>
  );
};

export default CompLoggedAfter;