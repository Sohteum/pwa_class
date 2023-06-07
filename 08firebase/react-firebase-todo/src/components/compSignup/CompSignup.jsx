import React from 'react';

const CompSignup = () => {
  return (
    <section className='section-signup'>
      <h2><img src={require('../../assets/img/register/title-register.png')} alt="" /></h2>
      <form action="">
      <p className='email'>
          <input type="text" placeholder='가입하실 이메일 주소를 입력하세요' />
        </p>
        <p className='password'>
          <input type="password" placeholder='가입하실 비밀번호를 입력하세요' />
        </p>
        <p className='photo-wrap'>
          <input type="file" id='file' className='hidden' />
          <label htmlFor="file">프로필 사진을 업로드 해주세요</label>
        </p>
        <p className='nickname'>
        <input type="text" placeholder='사용하실 닉네임을 입력하세요' />
        </p>
        <p className='btn'>

          <button><img src={require('../../assets/img/register/btn-register.png')} alt="" /></button>
   
        </p>
      </form>
    </section>
  );
};

export default CompSignup;