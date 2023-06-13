import { auth } from '../../fb/auth';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import CompDetailOutput from './CompDetailOutput';
import CompDetailLoader from './CompDetailLoader';
import { useParams } from 'react-router-dom';
import { fnGetDoc } from '../../fb/db';

const CompDetail = ({ }) => {

  const { _isLogged, _docsArr } = useContext(AppContext)
  const [_docData, _setDocData] = useState(null)
  const { docid } = useParams()

  const fnGetDocHandler = async () => {
    const docData = await fnGetDoc(auth.currentUser.uid, docid)
    _setDocData(docData)
  }

  useEffect(() => {
    let timeoutID
    let id
    if (!_isLogged && !_docsArr) {//비정상적인 접속
      clearTimeout(id)
      id = setTimeout(() => {
        alert('데이터 수신 중 오류가 발생했습니다\n정상적인 경로로 접속해주세요')
      }, 500)
    } else {//정상접속
      fnGetDocHandler()
    }

  }, [])

  return (
    <section className='section-detail'>
      {
        _docData ?
          <CompDetailOutput docData={_docData} docid={docid} />
          : <CompDetailLoader />
      }
    </section>
  );
};

export default CompDetail;