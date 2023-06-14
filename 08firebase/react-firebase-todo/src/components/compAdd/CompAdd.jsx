import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { auth } from '../../fb/auth';
import { fnUploadFile } from '../../fb/storage';
import { fnAddDoc } from '../../fb/db';
import { AppContext } from '../../App';

const CompAdd = () => {

  const { _setShowLoader, _setFadeOut } = useContext(AppContext)

  const [_date, _setDate] = useState('')
  const [_time, _setTime] = useState('')
  const [_title, _setTitle] = useState('')
  const [_desc, _setDesc] = useState('')
  const [_file, _setFile] = useState('')
  const [_fileLabel, _setFileLabel] = useState('일정 이미지를 업로드 하세요')
  const [_validity, _setValidity] = useState(false)
  const navi = useNavigate()

  const fnAddDocHandler = async () => {
    if (auth.currentUser.email === 'guest@mail.com') {
      alert('게스트 회원님은 쓰기 권한이 부여되지 않았습니다')
      return false
    }

    if (!_validity) {
      alert('시간,날짜,일정명은 필수 입력항목입니다')
      return false
    }
    _setShowLoader(true)
    const { outputUrl, storageUrl, orgUrl } = _file
      ? await fnUploadFile(auth.currentUser.uid, _file) //아래 주석한거 세개가 객체로 나옴. 
      : { outputUrl: '', storageUrl: '', orgUrl: '' }

    const data = {
      timestamp: Date.now(),
      uid: auth.currentUser.uid,
      date: _date,
      title: _title,
      time: _time,
      desc: _desc,
      outputUrl,
      storageUrl,//지울때 사용
      orgUrl //사용자에게 보여줄 이름
    }

    await fnAddDoc(auth.currentUser.uid, data)
    alert('일정이 등록되었습니다\n목록페이지로 이동합니다')
    _setFadeOut(true)//사라져야하니까 트루
    navi('/')
  }


  return (
    <section className='section-add'>
      <h2><img src={require('../../assets/img/add/title-add.png')} alt="" /></h2>
      <form onChange={e => { { _setValidity(e.currentTarget.checkValidity()) } }} onSubmit={(e) => { e.preventDefault() }} className='scroll-wrap'>
        <p className="date-wrap">
          <input onChange={(e) => { _setDate(e.target.value) }} value={_date} type="date" required />
        </p>
        <p className="time-wrap">
          <input onChange={(e) => { _setTime(e.target.value) }} value={_time} type="time" required />
        </p>
        <p className="title-wrap">
          <input onChange={(e) => { _setTitle(e.target.value) }} value={_title} type="text" placeholder='일정명을 입력하세요' required />
        </p>
        <p className="desc-wrap">
          <textarea onChange={(e) => { _setDesc(e.target.value) }} value={_desc} placeholder='일정상세내용을 입력하세요'></textarea>
        </p>
        <p className='photo-wrap'>
          <input onChange={(e) => {
            _setFile(e.target.files[0]);
            e.target.files[0] && _setFileLabel(e.target.files[0].name)
          }} type="file" id='file' className='hidden' />
          <label htmlFor="file">{_fileLabel}</label>
        </p>
      </form>
      <p className='btn-wrap'>
        <button onClick={fnAddDocHandler}>
          <img src={require('../../assets/img/add/btn-add-list.png')} alt="" />
        </button>
        <Link to='/'><img src={require('../../assets/img/add/btn-backto-list.png')} alt="" />
        </Link>
      </p>
    </section>

  );
};

export default CompAdd;