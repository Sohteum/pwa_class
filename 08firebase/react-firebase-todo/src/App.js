import { useState } from "react";
import CompHeader from "./components/compHeader/CompHeader";
import fb from "./fb/config";
import CompSignin from "./components/compSignin/CompSignin";



function App() {

  const [_isLogged, _setIsLogged] = useState(null)

  return (
    <main>
      <img className="main-bg" src={require('./assets/img/common/main-bg.png')} alt="" />
      <h1>
        <img src={require('./assets/img/header/title-main.png')} alt="" />
      </h1>
      <article>
        <CompHeader />
        <CompSignin/>
      </article>
    </main>
  );
}

export default App;
