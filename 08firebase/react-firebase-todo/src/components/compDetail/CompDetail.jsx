import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { AppContext } from '../../App';
import CompDetailOutput from './CompDetailOutput';

const CompDetail = () => {

  const { _isLogged } = useContext(AppContext)


  return (
    <section className='section-detail'>
      {_isLogged ?
        <CompDetailOutput />
        : '로그인 전에는 사용불가'
      }
    </section>
  );
};

export default CompDetail;