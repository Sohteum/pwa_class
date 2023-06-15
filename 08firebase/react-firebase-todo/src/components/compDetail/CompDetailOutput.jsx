import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fnDeleteObject, fnUploadFile } from '../../fb/storage';
import { fnDeleteDoc, fnGetDoc, fnUpdateDoc } from '../../fb/db';
import { auth } from '../../fb/auth';
import App, { AppContext } from '../../App';


const CompDetailOutput = ({ docData, docid }) => {

  const { _setShowLoader, _setFadeOut, fnGetDocsHandler, _loadedCnt } = useContext(AppContext)

  let { date, time, desc, title, orgUrl, outputUrl, storageUrl } = docData

  const [_date, _setDate] = useState(date)
  const [_desc, _setDesc] = useState(desc)
  const [_time, _setTime] = useState(time)
  const [_title, _setTitle] = useState(title)
  const [_file, _setFile] = useState('')//스토리지에 업로드할때 쓰는거 지금 없는거라서 꺼내쓰는거 아님
  const [_fileLabel, _setFileLabel] = useState('이미지를 업로드하세요')
  const [_orgUrl, _setOrgUrl] = useState(orgUrl)
  const [_checked, _setChecked] = useState(false)

  const navi = useNavigate()



  const fnUpdateHandler = async () => {
    if (auth.currentUser.email === 'guest@mail.com') {
      alert('게스트 회원님은 수정 권한이 부여되지 않았습니다')
      return false
    }
    if (_checked) {
      await fnDeleteObject(storageUrl)
      orgUrl = ''; outputUrl = ''; storageUrl = '';//다 지워줫으니까 빈데이터 설정
    }

    if (_file) {//파일을 등록했을경우
      if (orgUrl) {//이전파일이 남아있다면...
        await fnDeleteObject(storageUrl)
      }
      const urls = await fnUploadFile(auth.currentUser.uid, _file)
      orgUrl = urls.orgUrl
      outputUrl = urls.outputUrl
      storageUrl = urls.storageUrl
    }

    const data = { date: _date, desc: _desc, time: _time, title: _title, orgUrl, outputUrl, storageUrl, }
    await fnUpdateDoc(auth.currentUser.uid, docid, data)
    fnGetDocsHandler(_loadedCnt)
    alert('일정이 수정되었습니다\n일정목록으로 이동합니다')
    navi('/')
  }//fnUpdateHandler

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
            <input id="check" onChange={(e) => { _setChecked(e.target.checked) }} checked={_checked} type="checkbox" className='hidden' />
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
            (e.target.files[0]) ? _setFileLabel(e.target.files[0].name) : _setFileLabel('일정 이미지를 업로드 해주세요')
          }} type="file" id='file' className='hidden' accept='image/*' />
          <label htmlFor="file">{_fileLabel}</label>
        </p>

      </form>
      <p className='btn-wrap'>
        <button onClick={fnUpdateHandler}><img src={require('../../assets/img/detail/btn-edit-list.png')} alt="" /></button>
        <Link to='/'><img src={require('../../assets/img/detail/btn-backto-list.png')} alt="" /></Link>
      </p>
    </ >
  );
};

export default CompDetailOutput;