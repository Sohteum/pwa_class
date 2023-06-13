import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import CompHomeOutput from './CompHomeOutput';
import CompListLoader from '../compLoader/CompListLoader';



const CompHome = () => {

  const { _isPending } = useContext(AppContext)

  useEffect(() => {

  })


  return (

    <section className='section-home'>

      {
        _isPending
          ? <CompListLoader/> //대기중일때 스피너를 보여줘
          : <CompHomeOutput />
      }
    </section>
  );
};

export default CompHome;