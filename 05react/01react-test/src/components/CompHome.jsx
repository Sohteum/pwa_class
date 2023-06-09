import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const CompHome = () => {

  const {
    _user, _setUser,
    _list, _setList,
  } = useContext(AppContext)

  const fnGetList = async () => {//에이싱크할려고 만드는 함수. data.json을 받아와야함(패치)
    const jsondata = await fetch('https://raw.githubusercontent.com/kjhardcore76/json/main/member.json')
    const jsData = await jsondata.json()
    // jsData.user1 원래 이렇게 찾아야하는데 제이슨은 디비고 내가 원하는건 user1. 변수를 붇일수 없으니까
    _setList(jsData[_user.id]) /* 컴피티드스타일 : 변수에서 객체를 찾을 때 사용.  set할려고 찾은거야*/

  }

  useEffect(() => {//여기서는 에이싱크 못함.
    fnGetList()
  }, [])

  return (
    <div>
      {
        _list.length === 0
          ?
          '목록이 없습니다'
          :
          <ul>
            {_list.map(v=>{<li>li...</li>})}
          </ul>
      }
    </div>
  );
};

export default CompHome;