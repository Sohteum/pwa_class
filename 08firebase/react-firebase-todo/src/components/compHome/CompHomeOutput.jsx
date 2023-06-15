import React, { useContext, useEffect, useRef, useState, useTransition } from 'react';
import CompItem from './CompItem';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { fnGetDocs } from '../../fb/db';
import { auth } from '../../fb/auth';

const CompHomeOutput = () => {

  const [_isActive, _setIsActive] = useState(false)
  const [_keyword, _setKeyword] = useState('')
  const refScrollTrigger = useRef()
  const scrollWrap = useRef()
  const refInput = useRef()
  let isSearchRef = useRef(false)//변수가 변하는걸감지하는 목적으로 ref를 사용하기도 함 두가지의 목적임
  const [isWaiting, startTransition] = useTransition()//최적화 새로운기능 //우선순위를 최하위로 낮춘다(계산할게많으면 나중에함)급한일먼저 처리하고 나중에 처리

  const {
    _docsCnt, _setDocsCnt,
    _docsArr, _setDocsArr,
    _docsOutputArr, _setDocsOutputArr,
    _nextDoc, _setNextDocs,
    _loadedCnt, _setLoadedCnt,
    _scrollTop, _setScrollTop,
  } = useContext(AppContext)


  const fnScrollHandler = (e) => {
    //$(window).scrollTop()->window.scrollY(스크롤와이는 윈도우에만 쓸수있는거 브라우저우측에달린스크롤바말이야)
    _setScrollTop(e.target.scrollTop)

  }//fnScrollHandler

  const fnSearchHandler = (e) => {//이건 바로해줘야함
    _setKeyword(e.target.value);//내용바꿈
    startTransition(() => {
      _setDocsOutputArr(_docsArr.filter(v => v.data().title.includes(e.target.value)))//이건 시간이 많이걸림 글자내용을가지고 검색을 하니까 그래서 요 안에 넣어줌

    })
  }//fnSearchHandler

  const fnSubmitHandler = (e) => {
    e.preventDefault();
    isSearchRef.current = false //무한스크롤 활성화
    _setIsActive(false);
    _setKeyword('');
    _setDocsOutputArr([..._docsArr])

  }

  const fnSearchBtnClickHandler = () => {
    _setKeyword('')//검색 양식의 내용을 지운다
    isSearchRef.current = !isSearchRef.current //무한스크롤을 활성화 혹은 비활성화(토글)
    refInput.current.focus()//입력커서를 위치시킴
    _setDocsOutputArr([..._docsArr])//목록을 원래대로 돌림
    _setIsActive(c => !c)//검색창을 보여주거나 숨김
  }//fnSearchBtnClickHandler



  useEffect(() => {
    scrollWrap.current.scrollTo({ top: _scrollTop, behavior: 'smooth' })//스크롤할때마다 마지막 스크롤 위치를 기억하고 갱신

    let docsArrRef = [..._docsArr] //이게배열
    let nextDocRef = _nextDoc //이건문서
    let docCntRef = _docsCnt

    const observer = new IntersectionObserver(async ([entries]) => {//꼬리가 한개일때는 무조건 배열로 받는다. 아니면 무조건 포이치로 돌려야함
      if (entries.intersectionRatio > 0 && docCntRef > docsArrRef.length && !isSearchRef.current) { //useEffect내에서는 state값을 쓰면 안됨. 길이감지를 못함. 초기값만 기억하니까
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

        {/* isWaiting //기다리고있니? 이건 검색량이 많을때 기다리게되면 검색중이라고 나오게 하는것
          ?
          <p>검색중...</p>
          : */
           _docsOutputArr.length //맨첨엔 내가 5개만 꺼내옴 app에서, 그리고 내가 가진거 이상으로 나오면 안되니까 설정해줘야지
            ? <ul className='list-container'>
              {_docsOutputArr.map(v => <CompItem key={v.data().timestamp} data={v.data()} docid={v.id} />)}
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