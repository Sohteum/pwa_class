import React, { useContext, useEffect, useRef, useState } from 'react';
import CompItem from './CompItem';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { fnGetDocs } from '../../fb/db';
import { auth } from '../../fb/auth';

const CompHomeOutput = () => {

  const [_isActive, _setIsActive] = useState(false)
  const [_keyword, _setKeyword] = useState('')

  const {
    _docsCnt, _setDocsCnt,
    _docsArr, _setDocsArr,
    _docsOutputArr, _setDocsOutputArr,
    _nextDoc, _setNextDocs,
    _loadedCnt, _setLoadedCnt,
    _scrollTop, _setScrollTop,
  } = useContext(AppContext)

  const refScrollTrigger = useRef()
  const scrollWrap = useRef()
  const refInput = useRef()

  const fnScrollHandler = (e) => {
    //$(window).scrollTop()->window.scrollY(스크롤와이는 윈도우에만 쓸수있는거 브라우저우측에달린스크롤바말이야)
    _setScrollTop(e.target.scrollTop)

  }//fnScrollHandler

  const fnSearchHandler = (e) => {
    _setKeyword(e.target.value);//내용바꿈
    _setDocsOutputArr(_docsArr.filter(v => v.data().title.includes(e.target.value)))
  }//fnSearchHandler

  const fnSubmitHandler = (e) => {
    e.preventDefault();
    _setIsActive(false);
    _setKeyword('');
    _setDocsOutputArr([..._docsArr])

  }

  const fnSearchBtnClickHandler = () => {
    _setKeyword('')
    refInput.current.focus()
    _setDocsOutputArr([..._docsArr])
    _setIsActive(c => !c)
  }//fnSearchBtnClickHandler

  useEffect(() => {
    scrollWrap.current.scrollTo({ top: _scrollTop, behavior: 'smooth' })//스크롤할때마다 마지막 스크롤 위치를 기억하고 갱신

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
        _setLoadedCnt(c => c + 2)
      }
    })//observer
    observer.observe(refScrollTrigger.current)
    return (() => {
      observer.disconnect()
    })
  }, [])




  return (
    <>
      <h2>
        <img src={require('../../assets/img/list/title-list.png')} alt="" />
      </h2>
      <div ref={scrollWrap} onScroll={fnScrollHandler} className="scroll-wrap">

        {
          _docsOutputArr.length //맨첨엔 내가 5개만 꺼내옴 app에서, 그리고 내가 가진거 이상으로 나오면 안되니까 설정해줘야지
            ? <ul className='list-container'>
              {
                _docsOutputArr.map(v => <CompItem key={v.data().timestamp} data={v.data()} docid={v.id} />)
              }
            </ul>
            : <img className='no-list' src={require('../../assets/img/list/alert-no-list.png')} alt="" />
        }
        <div ref={refScrollTrigger} className="scroll-trigger"></div>

      </div>

      <form onSubmit={fnSubmitHandler} className={`search-form ${_isActive ? 'active' : ''}`}>
        <input ref={refInput} onChange={fnSearchHandler} value={_keyword} type="text" placeholder='검색어를 입력하세요' />
      </form>

      <p className="btn-wrap">
        <Link to='/add'>
          <img src={require('../../assets/img/list/btn-add-list.png')} alt="" />
        </Link>
        <button onClick={fnSearchBtnClickHandler}>
          <img src={require('../../assets/img/list/search.png')} alt="" />
        </button>
      </p >
    </>
  );
};

export default CompHomeOutput;