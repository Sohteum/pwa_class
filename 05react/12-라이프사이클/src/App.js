import { useEffect, useState } from "react";
import CompTitle from "./CompTitle";
import CompOutput from "./CompOutput";
import CompBtn from "./CompBtn";
import CompInterval from "./CompInterval";

console.log(`app outside`);//사이트 실행될때, 새로고침할때 실행

function App() {

  console.log(`app inside  업데이트 시작`);//업데이트시작되는순간 실행

  const [_n, _setN] = useState(0)//n이 변경이 되면 app은 여기서부터 새로 그리는것. 바깥쪽을 새로그리지는 않는다.그래서 로그를 찍어보면 처음에는 둘다나오는데 클릭하면 사용하는애인 앱인 inside만 나옴. 즉 스테잇이 변경되면 랜더링이 일어난다. 인사이드만, 아웃사이드는 안일어나
  //콘솔로그로 값을 알아보는건 좋은 방법은 아님
  // const [_num, _setNum] = useState(1) 여기서 이거 안씀
  const [_show, _setShow] = useState(true)


  useEffect(() => {
    console.log(`app inside  업데이트 완료`);// 가상돔이 만들어지는 순간 업데이트완료될때마다
    document.querySelector('.btn').addEventListener(`click`, e => {
      alert('tt') //업데이트 될때마다 alert를 하라는 의미. 그래서 버튼을 눌러서 숫자를 늘리면 그 숫자만큼 경고창이 계속 나옴
    })
  })//콘솔현재값알아볼때 사용하면 좋음. 콘솔확인시 한단계전단계가 나오니까


  useEffect(() => {  //디펜던시유즈이펙트:최초업데이트시 실행되는 코드
    document.querySelector('.btn').addEventListener(`click`, e => {
      // alert('tt')
    })
    // setInterval(function () { //여기서 이거 안씀
    //   _setNum(prev => prev + 1)
    // }, 1000)
  }, [])//셋인터벌 에드이벤트같은거 많이 쓰임

  return (
    <>
      <CompTitle />
      <button className="btn">useEffect event binding</button>
      <hr />
      <CompOutput _n={_n} />
      <CompBtn _setN={_setN} />
      <hr />
      {_show && <CompInterval />}
      <button onClick={e=>{_setShow(prev=>!prev)}}>인터벌토글</button>
      <hr />
    </>
  );
}

export default App;
