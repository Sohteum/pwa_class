import './css/style.css';
import img2 from './img/img2.jpg';

function App() {
  let a = 1
  return (
    <> {/* 리액트 프레그먼트 무조건 하나로 싸야됨. */}
   <h1>리액트</h1>
   <p>리액트 {a}시간</p>
   <img src={`${process.env.PUBLIC_URL}./img/img1.jpg`} alt="" /> <br />
   <img src={img2} alt="" /> <br />
   <img src={require("./img/img3.jpg")} alt="" /> <br />

    </>
  );
}

export default App;
