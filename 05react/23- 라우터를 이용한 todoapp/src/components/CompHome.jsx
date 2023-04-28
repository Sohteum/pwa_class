import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompLi from './CompLi';
import { useNavigate } from 'react-router-dom';

const CompHome = () => {

  const { _todoArr } = useContext(AppContext)


  const nav = useNavigate()
  return (
    <div >
      <h2>  home...</h2>
      <ul>
        {
          (_todoArr.length === 0)
            ?
            <li>'등록된 일정이 없습니다'</li>
            : _todoArr.map(v => <CompLi
              key={v.id} //반복해서 출력하려면 무조건 키에 다른 이름을 줘야함
              title={v.title}
              id={v.id}
               />)
              
          // 여기는 들어가는 목록이 많으니까 컴포넌트만듦 근데 배열이잖아. 그리고 같은 길이의 배열이니까 맵을 사용하는거지

        }
      </ul>
      <hr />
      <button onClick={() => { nav('/add') }}>목록추가</button>
    </div>
  );
};

export default CompHome;