import React, { useEffect } from 'react';

const CompTitle = () => {

  useEffect(() => {
    console.log('--title update');
  })

  return (
    <h1>
      Memo 최적화
    </h1>
  );
};

export default React.memo(CompTitle);