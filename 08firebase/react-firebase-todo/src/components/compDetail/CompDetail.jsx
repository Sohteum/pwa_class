import React from 'react';

const CompDetail = () => {
  return (
    <section className='section-detail'>
      <h2><img src={require('../../assets/img/detail/title-detail.png')} alt="" /></h2>
      <form className='scroll-wrap'>
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
        <p className='check-wrap'>
          <input id="check" type="checkbox" className='hidden' />
          <label htmlFor="check">
            <img className='img-check' src={require('../../assets/img/detail/check.png')} alt="" />
            <img className='img-checked' src={require('../../assets/img/detail/checked.png')} alt="" />
            </label>
        </p>
        <p className='photo-wrap'>
          <input type="file" id='file' className='hidden' />
          <label htmlFor="file">일정관련 사진을 업로드해주세요</label>
        </p>
        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/detail/btn-update-list.png')} alt="" /></button>
          <button><img src={require('../../assets/img/detail/btn-delete-list.png')} alt="" /></button></p>
      </form>
    </section>
  );
};

export default CompDetail;