import React, { useContext } from 'react';
import CompLi from './CompLi';
import { AppContext } from '../App';

const CompUl = () => {
  const {_reset,_listCnt} = useContext(AppContext)
  

  let listArr = []
  for(let i=1;i<=_listCnt;i++){
    listArr.push(i)
  }

  return (

    <ul key={_reset}>
      {
        //[<CompLi key={'key1'}/>,<CompLi key={'key2'}/>,<CompLi key={'key3'}/>]
        listArr.map((v, i)=>{
          return <CompLi key={v} i={i} />
        })
      }
    </ul>
  );
};

export default CompUl;