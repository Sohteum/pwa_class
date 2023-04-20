import React, { useEffect, useState } from 'react';

const CompOutput = ({ _setShow, _setShowBtn }) => {
  const [_n, _setN] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(function () {
      _setN((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function fnRemoveBtnHandler() {
    _setShow(false);
    _setShowBtn(true);
  }

  return (
    <>
      <p>1씩 증가 :{_n}</p>
      <hr />
      <button onClick={fnRemoveBtnHandler}>중지</button>
    </>
  );
};

export default CompOutput;
