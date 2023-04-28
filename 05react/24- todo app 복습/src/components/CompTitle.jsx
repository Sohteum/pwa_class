import React from 'react';

const CompTitle = () => {
  return (
    <h1>
      TodoApp
    </h1>
  );
};

export default React.memo(CompTitle);

// 타이틀은 받아올게 없음. 그러니까 생성이 되면 안됨. 바뀌면 문제야. 내가 영상이랑 이런거 넣었을수 있잖아.
//그러니까 리렌더링 되지말라고 메모