import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompLoader from '../compLoader/CompLoader';
import CompCurrentOutput from './CompCurrentOutput';

const CompCurrent = () => {

  const { _weatherData } = useContext(AppContext)

  return (
    <section className='comp-current'>
      <div className="section-inner">
        {(_weatherData) ? /* 웨더데이터가 있다는건 주소도 나왔다는뜻 */
          <CompCurrentOutput/>
          :
          <CompLoader />
        }
      </div>
    </section>
  );
};

export default CompCurrent;