import React from 'react';
import { Link } from 'react-router-dom';

const CompItem = () => {
  return (
    <li>
      <Link to={`/detail`}>
        <img src={require('../../assets/img/list/no-image.jpg')} className='thumbnail' alt="" />
        <div className="metabox">
          <p>
            <time className='date'><img src={require('../../assets/img/list/icon-calendar.png')} alt="" />
              2022-04-01
            </time>
            <time className='time'><img src={require('../../assets/img/list/icon-clock.png')} alt="" />
              17:20
            </time>
          </p>
          <p>
            <em className='title'><img src={require('../../assets/img/list/icon-pencil.png')} alt="" />일정이름 dlfwjd\dkfslkdflksf</em>
          </p>
        </div>
        <img src={require('../../assets/img/list/more.png')} className='more' alt="" />
      </Link>
    </li>
  );
};

export default CompItem;