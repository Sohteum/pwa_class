import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CompItem = ({ data, docid }) => {

  let { timestamp,  date, outputUrl, time, title } = data
  outputUrl = outputUrl ? outputUrl : 'https://firebasestorage.googleapis.com/v0/b/todoapp-7c8a2.appspot.com/o/common%2Fno-image.jpg?alt=media&token=76820abd-b1c2-442b-8dae-f2dd9c982910'


  return (
    <li>
      <Link to={`/detail/${docid}`}>
        <img src={`${outputUrl}`} className='thumbnail' alt="" />
        <div className="metabox">
          <p>
            <time className='date'><img src={require('../../assets/img/list/icon-calendar.png')} alt="" />
             {date}
            </time>
            <time className='time'><img src={require('../../assets/img/list/icon-clock.png')} alt="" />
             {time}
            </time>
          </p>
          <p>
            <em className='title'><img src={require('../../assets/img/list/icon-pencil.png')} alt="" />{title}</em>
          </p>
        </div>
        <img src={require('../../assets/img/list/more.png')} className='more' alt="" />
      </Link>
    </li>
  );
};

export default CompItem;