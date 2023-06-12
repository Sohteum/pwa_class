import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { auth } from '../../fb/auth';
import { fnGetDoc } from '../../fb/db';

const CompDetailOutput = () => {

  const { id } = useParams()

  const [_docData, _setDocData] = useState('')
  const [_date, _setDate] = useState('')
  const [_desc, _setDesc] = useState('')
  const [_time, _setTime] = useState('')
  const [_title, _setTitle] = useState('')
  const [_file, _setFile] = useState('')
  const [_fileLabel, _setFileLabel] = useState('이미지를 업로드하세요')
  const [_orgUrl, _setOrgUrl] = useState('')
  const [_outputUrl, _setOutputUrl] = useState('')
  const [_storageUrl, _setStorageUrl] = useState('')


  const fnGetDocHandler = async () => {
    const docData = await fnGetDoc(auth.currentUser.uid, id)
    const { date, time, title, desc, orgUrl, storageUrl, outputUrl } = docData
    _setDate(date); _setDesc(desc); _setTime(time); _setTitle(title); _setOrgUrl(orgUrl);
    _setOutputUrl(outputUrl); _setStorageUrl(storageUrl);
  }

useEffect(()=>{
  fnGetDocHandler()
},[])

  return (
    < >
      <h2><img src={require('../../assets/img/detail/title-detail.png')} alt="" /></h2>
      <form className='scroll-wrap'>
        {_outputUrl&&<img className='thumbnail' src={_outputUrl} alt="" />}
        <p className="date-wrap">
          <input onChange={e => { _setDate(e.target.value) }} type='date' value={_date} />
        </p>
        <p className="time-wrap">
          <input onChange={e => { _setTime(e.target.value) }} type='time' value={_time} />
        </p>
        <p className="title-wrap">
          <input onChange={e => { _setTitle(e.target.value) }} type='text' value={_title} />
        </p>
        <p className="desc-wrap">
          <textarea onChange={e => { _setDesc(e.target.value) }}  value={_desc}></textarea>
        </p>
        {
          (_orgUrl) &&
          <p className='check-wrap'>
            <input id="check" type="checkbox" className='hidden' />
            <label htmlFor="check">
              <img className='img-check' src={require('../../assets/img/detail/check.png')} alt="" />
              <img className='img-checked' src={require('../../assets/img/detail/checked.png')} alt="" />
              {_orgUrl}삭제하기
            </label>
          </p>
        }
        <p className='photo-wrap'>
          <input onChange={e => {
            _setFile(e.target.files[0]);
            (e.target.files[0]) && _setFileLabel(e.target.files[0].name)
          }} type="file" id='file' className='hidden' accept='image/*' />
          <label htmlFor="file">{_fileLabel}</label>
        </p>
        <p className='btn-wrap'>
          <button><img src={require('../../assets/img/detail/btn-update-list.png')} alt="" /></button>
          <button><img src={require('../../assets/img/detail/btn-delete-list.png')} alt="" /></button>
          <Link to='/'><img src={require('../../assets/img/detail/btn-goto-list.png')} alt="" /></Link></p>
      </form>
    </ >
  );
};

export default CompDetailOutput;