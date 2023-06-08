import React from 'react';
import { fnSignOut } from '../../fb/auth';

const CompLoggedAfter = () => {

const  fnSignoutHandler=async()=>{
await fnSignOut()
alert('로그아웃하였습니다\n로그인페이지로 이동합니다')

}
  return (
    <div className='logged-after'>
      <p className='user'>
        <img src={require('../../assets/img/photo/photo1.jpg')} alt="" />
        <em>닉네임</em>
      </p>
      <p className='btns'>
        <button onClick={fnSignoutHandler}><img src={require('../../assets/img/header/btn-sign-out.png')} alt="" /></button>
        <button><img src={require('../../assets/img/header/btn-deresgister.png')} alt="" /></button>
      </p>
    </div>
  );
};

export default CompLoggedAfter;