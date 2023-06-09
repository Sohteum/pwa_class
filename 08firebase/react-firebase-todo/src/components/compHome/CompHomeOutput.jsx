import React, { useContext } from 'react';
import CompItem from './CompItem';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const CompHomeOutput = () => {

  const {
    _docsCnt, _setDocsCnt,
    _docsArr, _setDocsArr,
    _docsOutputArr, _setDocsOutputArr,
    _nextDoc, _setNextDocs,
  } = useContext(AppContext)

  return (
    <>
      <h2>
        <img src={require('../../assets/img/list/title-list.png')} alt="" />
      </h2>
      <div className="scroll-wrap">

        {_docsArr.length
          ?
          <ul>
            <CompItem />
          </ul>
          :
          '등록된 일정이 없습니다'
        }
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