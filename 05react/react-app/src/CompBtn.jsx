import React, { useContext } from 'react';
import { AppContext } from './App';



const CompBtn = () => {

  const { _listArr, _setListArr } = useContext(AppContext)

  const fnAddListHandler = function () {
    /*     
    const listArr = [..._listArr]
    listArr.push('') 
    //  _setListArr([..._listArr, ''])  현재배열을 풀어서 ''이걸 추가하겠다라는 의미
    //유즈이펙트안에서 뭘 하던가 하면 이건 안먹힘....그래서 선생님은 아래처럼 사용함 왜냐면 리스트어레이를 사용하잖아
    //_setListArr((c)=>{return[...c,'']})
    */
    const obj = {}
    obj.key = Date.now() //이때 키값으로 타임스탬프를 밀어넣어
    _setListArr(c => [...c, obj])


  }


  return (
    <button onClick={fnAddListHandler} >
      추가하기
    </button>
  );
};

export default CompBtn;