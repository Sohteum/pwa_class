import React from 'react';

const CompSignin = () => {
  return (
    <section className='section-signin'>
      <h2><img src={require('../../assets/img/login/title-sign-in.png')} alt="" /></h2>
      {/* <div className="list-wrap">
      </div> */}
      <form action="">
        <p className='input-wrap'><input type="text" placeholder='가나다' /></p>
        <p className='input-wrap'><textarea ></textarea></p>
        <p className='input-wrap'><input type="date"  /></p>
        <p className='input-wrap'><button><img src={require('../../assets/img/add/btn-add-list.png')} alt="" /></button></p>
      </form>

    </section>
  );
};

export default CompSignin;