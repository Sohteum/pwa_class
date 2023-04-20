 

const CompBtn = ({ _setShow, _setShowBtn}) => {

  function showBtnHandler(){
    _setShow(true)
    _setShowBtn(false)
  }

  
  return (
    <button onClick={showBtnHandler} >시작</button>
  );
};

export default CompBtn;