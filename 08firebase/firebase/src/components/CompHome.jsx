import React, { useContext } from 'react';
import { Appcontext } from '../App';
import { Link } from 'react-router-dom';

const CompHome = () => {
  const { _todoArr, _setTodoArr, } = useContext(Appcontext)
  return (
    <section>
      {
        (!_todoArr)
          ?
          '데이터를 불러오는중'
          : (_todoArr.length === 0)

            ?
            '일정목록이 없습니다'
            :
            '일정출력'
      }
      <hr />
      <Link to="/add">일정등록하기</Link>
    </section>
  );
};

export default CompHome;