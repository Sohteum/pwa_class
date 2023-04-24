import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const CompModal = () => {

  const { fnresetHandler, _setShowModal } = useContext(AppContext)

  function fnCloseModal() {
    fnresetHandler()
    let modal = document.querySelector('.modal')
    modal.classList.remove(`active`)
    modal.addEventListener('transitionend',()=>{
      _setShowModal(false)
    })
  }

  useEffect(() => {
    let modal = document.querySelector('.modal')
    let timeoutID
    timeoutID = setTimeout(() => {
      modal.classList.add(`active`)
    }, 10)
    return (() => {
      clearTimeout(timeoutID)
    })//죽을 때 할일
  }, [])//태어났을때 딱 한번(새로고침)

  return (
    <div className='modal'>
      <p>게임끝!</p>
      <button onClick={fnCloseModal}>초기화</button>

    </div>
  );
};

export default CompModal;