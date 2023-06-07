import React from 'react';
import { Link } from 'react-router-dom';
import CompItem from './CompItem';



const CompHome = () => {
  return (
    <section className='section-home'>
      <h2>
        <img src={require('../../assets/img/list/title-list.png')} alt="" />
      </h2>
      <div className="scroll-wrap">
        <ul>
          <CompItem />

        </ul>
      </div>
      <p className="add-btn-wrap">
        <Link to='/add'>
          <img src={require('../../assets/img/list/btn-add-new-list.png')} alt="" />
        </Link>
      </p>
    </section>
  );
};

export default CompHome;