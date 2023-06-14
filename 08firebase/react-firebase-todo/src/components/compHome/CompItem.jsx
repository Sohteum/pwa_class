import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth } from '../../fb/auth';
import { AppContext } from '../../App';
import { fnDeleteObject } from '../../fb/storage';
import { fnDeleteDoc, fnUpdateDoc } from '../../fb/db';

const CompItem = ({ data, docid }) => {

  const
    { _setShowLoader, _setFadeOut,
      _docsArr, _setDocsArr,
      _docsOutputArr, _setDocsOutputArr,
      fnGetDocsHandler, _loadedCnt
    } = useContext(AppContext)

  let { timestamp, date, outputUrl, time, title, storageUrl, completed } = data
  
  const navi = useNavigate()

  outputUrl = outputUrl ? outputUrl : 'https://firebasestorage.googleapis.com/v0/b/todoapp-7c8a2.appspot.com/o/common%2Fno-image.jpg?alt=media&token=76820abd-b1c2-442b-8dae-f2dd9c982910'

  const fnDeleteHandler = async () => {//v파일을 먼저 지우고 문서를 지워야함 문서 먼저지우면 파일의정보를 찾을수없음
    if (auth.currentUser.email === 'guest@mail.com') {
      alert('게스트 회원님은 삭제 권한이 부여되지 않았습니다')
      return false
    }
    if (!window.confirm(' 일정을 삭제하시겠습니까?')) return false
    _setShowLoader(true)
    storageUrl && await fnDeleteObject(storageUrl)
    await fnDeleteDoc(auth.currentUser.uid, docid)
    alert('일정을 삭제했습니다\n일정목록으로 이동합니다')
    navi('/')
    _setFadeOut(true)
  }//fnDeleteHandler

  const fnCompletedHandler = async () => {
    if (auth.currentUser.email === 'guest@mail.com') {
      alert('게스트 회원님은 수정 권한이 부여되지 않았습니다')
      return false
    }
    
    let question
    if (!completed) {//해당 일정이 미완료상태일때
      question = '일정을 완료처리하시겠습니까?'
      completed = true //완료로 변경
    } else {
      //일정이 완료상태일때
      question = '일정을 복원 하시겠습니까?'
      completed = false //미완료로 변경
    }
    if (!window.confirm(question)) return false
    //해당문서 업데이트
    await fnUpdateDoc(auth.currentUser.uid, docid, {completed})
    fnGetDocsHandler(_loadedCnt)
  }

  return (
    <li className={completed ? 'completed':''}>
      <Link to={`/detail/${docid}`}>
        <img src={`${outputUrl}`} className='thumbnail' alt="" />
        <div className="metabox">
          <p>
            <time className='date'><img src={require('../../assets/img/list/icon-calendar.png')} alt="" />
              {date}
            </time>
            <time className='time'><img src={require('../../assets/img/list/icon-clock.png')} alt="" />
              {time}
            </time>
          </p>
          <p>
            <em className='title'><img src={require('../../assets/img/list/icon-pencil.png')} alt="" />{title}</em>
          </p>
        </div>
        <img src={require('../../assets/img/list/more.png')} className='more' alt="" />
      </Link>
      <div className="btns">
        <button onClick={fnCompletedHandler}>
          <img src={require('../../assets/img/list/check.png')} alt="" />
        </button>
        <button>
          <img onClick={fnDeleteHandler} src={require('../../assets/img/list/delte.png')} alt="" />

        </button>
      </div>
    </li>

  );
};

export default CompItem;