import React, { useContext } from 'react';
import { AppContext } from '../App';


const CompCurrentDate = () => {
  const { time} = useContext(AppContext)
  let day = time.getDay()
  switch (day) {
    case 0:
      day = "일";
      break;
    case 1:
      day = "월";
      break;
    case 2:
      day = "화";
      break;
    case 3:
      day = "수";
      break;
    case 4:
      day = "목";
      break;
    case 5:
      day = "금";
      break;
    case 6:
      day = "토";
  }

  let year = String(time.getFullYear())
  let month = String(time.getMonth() + 1).padStart(2, '0')
  let date = String(time.getDate()).padStart(2, '0')
  let dateString = `${year}-${month}-${date} (${day})`

  return (
    <div className='current_date'>
      <p>{dateString}</p>
    </div>
  );
};

export default CompCurrentDate;

// const min = String(time.getMinutes()).padStart(2,'0')
