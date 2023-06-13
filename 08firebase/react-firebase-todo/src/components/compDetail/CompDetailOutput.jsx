import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fnDeleteObject } from '../../fb/storage';
import { fnDeleteDoc } from '../../fb/db';
import { auth } from '../../fb/auth';
import App, { AppContext } from '../../App';


const CompDetailOutput = ({ docData, docid }) => {

  const { _setShowLoader, _setFadeOut } = useContext(AppContext)

  let { date, time, desc, title, orgUrl, outputUrl, storageUrl } = docData

  const [_date, _setDate] = useState(date)
  const [_desc, _setDesc] = useState(desc)
  const [_time, _setTime] = useState(time)
  const [_title, _setTitle] = useState(title)
  const [_file, _setFile] = useState('')//스토리지에 업로드할때 쓰는거 지금 없는거라서 꺼내쓰는거 아님
  const [_fileLabel, _setFileLabel] = useState('이미지를 업로드하세요')
  const [_orgUrl, _setOrgUrl] = useState(orgUrl)
  //const [_outputUrl, _setOutputUrl] = useState(outputUrl) //이 두개는 지금 값이 계속 변하는게 아니여서 스테이트관리는 필요없음. 초기에 한번만 찍어내면 됨. 스테이트는 값이 변경될때마다 화면을 변경하는게 목적이잖슴. 
  // const [_storageUrl, _setStorageUrl] = useState(storageUrl) 
  const navi = useNavigate()

  const fnDeleteHandler = async () => {//v파일을 먼저 지우고 문서를 지워야함 문서 먼저지우면 파일의정보를 찾을수없음
    _setShowLoader(true)
    storageUrl && await fnDeleteObject(storageUrl)
    await fnDeleteDoc(auth.currentUser.uid, docid)
    alert('일정을 삭제했습니다\n일정목록으로 이동합니다')
    navi('/')
    _setFadeOut(true)
  }//fnDeleteHandler

  return (
    < >
      <h2><img src={require('../../assets/img/detail/title-detail.png')} alt="" /></h2>
      <form className='scroll-wrap'>
        {outputUrl && <img className='thumbnail' src={outputUrl} alt="" />}
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
          <textarea onChange={e => { _setDesc(e.target.value) }} value={_desc}></textarea>
        </p>
        {
          (orgUrl) &&
          <p className='check-wrap'>
            <input id="check" type="checkbox" className='hidden' />
            <label htmlFor="check">
              <img className='img-check' src={require('../../assets/img/detail/check.png')} alt="" />
              <img className='img-checked' src={require('../../assets/img/detail/checked.png')} alt="" />
              {orgUrl}삭제하기
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

      </form>
      <p className='btn-wrap'>
        <button><img src={require('../../assets/img/detail/btn-update-list.png')} alt="" /></button>
        <button onClick={fnDeleteHandler}><img src={require('../../assets/img/detail/btn-delete-list.png')} alt="" /></button>
        <Link to='/'><img src={require('../../assets/img/detail/btn-goto-list.png')} alt="" /></Link>
      </p>
    </ >
  );
};

export default CompDetailOutput;