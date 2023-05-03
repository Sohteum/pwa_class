import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CompMenu = () => {
  const [_theme, _setTheme] = useState({ 1: true, 2: false, 3: false })
  return (
    <section className='menu'>
      <h1>Neumorphi Calculator</h1>
      <form className="theme">
        <fieldset>
          <legend> <i className="fa-solid fa-palette"></i>choice app Theme</legend>
          <div>
            <input checked={_theme['1']} id="radio1" type="radio" name="theme" />
            <label htmlFor="radio1"></label>
            <input checked={_theme['2']} id="radio2" type="radio" name='theme' />
            <label htmlFor="radio2"></label>
            <input checked={_theme['3']} id="radio3" type="radio" name='theme' />
            <label htmlFor="radio3"></label>
          </div>
        </fieldset>
      </form>
      <nav>
        <Link to='/calc'>calculator</Link>
        <Link to='/bmi'>bmi</Link>
        <Link to='/dday'>dday</Link>
      </nav>
    </section>
  );
};

export default CompMenu;