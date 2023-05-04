import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fnGetTheme } from '../../script/CompMenu';


const CompMenu = () => {
  const [_theme, _setTheme] = useState({ 1: false, 2: false, 3: false }) //처음에는 아무도 체크를 안한다
const [_key, _setKey] = useState(1)

  const fnChangeHandler = function (e) {
    let theme
    let n = e.target.value //객체의 키값은 문자나 숫자나 별차이가 없음
    let obj = { 1: false, 2: false, 3: false }
    obj[n] = true //변수로 키값을 대체한다
    _setKey(prev=>prev+3)
    _setTheme(obj)
    localStorage.setItem('themeStorage', JSON.stringify(obj))

    if (n === '1') {
      theme = 'gray'
    } else if (n === '2') {
      theme = 'skyblue'
    } else {
      theme = 'beige'
    }
    document.body.setAttribute('class', theme) //app 은 root안에있으니가 강제로 바디를 찾아서 적어준것.

  }
  useEffect(() => { //화면에 나타나는 순간 어떤애로 시작할지 결정이 됨
    _setKey(prev=>prev+3)
    _setTheme(fnGetTheme())
  }, [])


  return (
    <section className='menu'>
      <h1>Neumorphi Calculator</h1>
      <form className="theme" >
        <fieldset>
          <legend> <i className="fa-solid fa-palette"></i>choice app Theme</legend>
          <div>
            <input key={_key} onChange={fnChangeHandler} defaultValue="1" defaultChecked={_theme['1']} id="radio1" type="radio" name="theme" />
            <label htmlFor="radio1"></label>
            <input key={_key+1} onChange={fnChangeHandler} defaultValue="2" defaultChecked={_theme['2']} id="radio2" type="radio" name='theme' />
            <label htmlFor="radio2"></label>
            <input key={_key+2} onChange={fnChangeHandler} defaultValue="3" defaultChecked={_theme['3']} id="radio3" type="radio" name='theme' />
            <label htmlFor="radio3"></label>
          </div>
        </fieldset>
      </form>
      <nav>
        <Link to='/calc'><i className="fa-solid fa-calculator"></i> calculator</Link>
        <Link to='/bmi'><i class="fa-solid fa-weight-scale"></i> bmi</Link>
        <Link to='/dday'><i class="fa-solid fa-calendar-days"></i> dday</Link>
      </nav>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />000
    </section>
  );
};

export default CompMenu;