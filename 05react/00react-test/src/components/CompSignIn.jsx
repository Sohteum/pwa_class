import React, { createContext, useContext, useState } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';



const CompSignIn = () => {

  const {_user, _setUser} = useContext(AppContext)

  const [_id, _setId] = useState('')
  const [_pw, _setPw] = useState('')

const navi = useNavigate()

  const fnSigninHandler = async (e) => {
    e.preventDefault()

    // fetch('https://raw.githubusercontent.com/kjhardcore76/json/main/member.json')
    // .then((jsonData)=>{
    //  return jsonData.json()
    // })
    // .then((jsData)=>{
    //   //처리...
    // }) 

    let jsonData = await fetch('https://raw.githubusercontent.com/kjhardcore76/json/main/member.json')
    let jsData = await jsonData.json()
    jsData.forEach(v => {
      if (v.id === _id && v.pw === _pw) {
        _setUser(v)
        localStorage.setItem('localStorageUser', JSON.stringify(v))
        navi('/')
      }
    })
  }//fnSigninHandler

  return (

    <form onSubmit={fnSigninHandler}>
      <h3>로그인</h3>
      <p>아이디  <input onChange={(e) => { _setId(e.target.value) }} type="text" /></p>
      <p>비밀번호  <input onChange={(e) => { _setPw(e.target.value) }} type="password" /></p>
      <p>
        <button>로그인</button>
      </p>

    </form>




  );
};

export default CompSignIn;