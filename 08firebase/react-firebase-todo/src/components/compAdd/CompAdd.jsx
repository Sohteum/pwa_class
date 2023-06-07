import React from 'react';

const CompAdd = () => {
  return (
    <section className='section-add'>
      <h2><img src={require('../../assets/img/add/title-add.png')} alt="" /></h2>
      <form>
        <p className="date-wrap">
          <input type="date" />
        </p>
        <p className="time-wrap">
          <input type="time" />
        </p>
        <p className="title-wrap">
          <input type="text" />
        </p>
        <p className="desc-wrap">
          <textarea></textarea>
        </p>
        <p className='photo-wrap'>
          <input type="file" id='file' className='hidden'/>
          <label htmlFor="file">일정관련 사진을 업로드해주세요</label>
        </p>
        <p className='btn-wrap'><button><img src={require('../../assets/img/add/btn-add-list.png')} alt="" /></button>
          <button><img src={require('../../assets/img/add/btn-backto-list.png')} alt="" /></button></p>
      </form>
    </section>

  );
};

export default CompAdd;