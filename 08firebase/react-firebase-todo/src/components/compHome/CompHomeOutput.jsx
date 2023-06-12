import React, { useContext, useEffect, useRef } from 'react';
import CompItem from './CompItem';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { fnGetDocs } from '../../fb/db';
import { auth } from '../../fb/auth';

const CompHomeOutput = () => {

  const {
    _docsCnt, _setDocsCnt,
    _docsArr, _setDocsArr,
    _docsOutputArr, _setDocsOutputArr,
    _nextDoc, _setNextDocs,
  } = useContext(AppContext)

  const refScrollTrigger = useRef()

  useEffect(() => {

    let docsArrRef = [..._docsArr] //이게배열
    let nextDocRef = _nextDoc //이건문서
    const observer = new IntersectionObserver(async ([entries]) => {//꼬리가 한개일때는 무조건 배열로 받는다. 아니면 무조건 포이치로 돌려야함
      if (entries.intersectionRatio > 0 && _docsCnt > docsArrRef.length) { //useEffect내에서는 state값을 쓰면 안됨. 길이감지를 못함. 초기값만 기억하니까
        // document.querySelector('.list-container').insertAdjacentHTML('beforeend',`<li>추가된 li <br></br></li>`) //꼬리가 바닥에 닿는순간 li를 추가하뎄다는
        //파이어베이스에서 현재가져온목록의 다음걸 가져와야되는거. 원본어레이에 출력용어레이갖다붙이기. 문서를 다 가져왔으면 더이상붙이면 안됨(docCouter가중요)
        const { docsArr, nextDoc } = await fnGetDocs(auth.currentUser.uid, 3, nextDocRef)
        docsArrRef = [...docsArrRef, ...docsArr]
        _setDocsArr([...docsArrRef])
        _setDocsOutputArr([...docsArrRef])
        _setNextDocs(nextDoc)
        nextDocRef = nextDoc
      }
    })//observer
    observer.observe(refScrollTrigger.current)
  }, [])


  return (
    <>
      <h2>
        <img src={require('../../assets/img/list/title-list.png')} alt="" />
      </h2>
      <div className="scroll-wrap">

        {
          _docsOutputArr.length //맨첨엔 내가 5개만 꺼내옴 app에서, 그리고 내가 가진거 이상으로 나오면 안되니까 설정해줘야지
            ?
            <ul className='list-container'>
              {
                _docsOutputArr.map(v => <CompItem key={v.data().timestamp} data={v.data() } docid={v.id}/>)
              }
            </ul>
            :
            <img className='no-list' src={require('../../assets/img/list/alert-no-list.png')} alt="" />
        }
        <div ref={refScrollTrigger} className="scroll-trigger"></div>
      </div>

      <p className="add-btn-wrap">
        <Link to='/add'>
          <img src={require('../../assets/img/list/btn-add-new-list.png')} alt="" />
        </Link>
      </p>
    </>
  );
};

export default CompHomeOutput;