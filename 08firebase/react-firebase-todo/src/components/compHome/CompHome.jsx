import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import CompHomeOutput from './CompHomeOutput';
import CompListLoader from '../compLoader/CompListLoader';



const CompHome = () => {

  const { _docsArr } = useContext(AppContext)

  useEffect(() => {

  })


  return (

    <section className='section-home'>

      {
        _docsArr
          ? <CompHomeOutput />
          : <CompListLoader/>
      }
    </section>
  );
};

export default CompHome;