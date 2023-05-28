import React, { useContext } from 'react';

const CompMoreBtn = ({ _filterActive, _setFilterActive, _searchText, _setSearchText }) => {
  const fnFilterHandelr = function (e) {
    e.currentTarget.classList.toggle('active'); //버튼이 자식이 둘이나 있어서 커런트로 써야됨
    _setFilterActive((c) => (c !== 'active' ? 'active' : '')); //현재값이 액티브가 아니라면 액티브를 달아주겠당
    _setSearchText('');
  };

  return (
    <button
      onClick={fnFilterHandelr}
      className='filter-btn'
    >
      <i className='fa-solid fa-magnifying-glass-plus'></i>
      <i className='fa-solid fa-magnifying-glass-minus'></i>
    </button>
  );
};

export default CompMoreBtn;
