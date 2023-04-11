// import {a, b} from "./store.js"
// import c from "./store.js" //가져오는 방식이 다름 export default
import c, {a, b} from "./store.js" //둘다 합침 무조건 디폴트가 앞에 온다.
import fn from "./fn.js" //함수 하나밖에 못보냄 
import obj from "./obj.js"
console.log(a);
console.log(b);
console.log(c); 
console.log(obj); 

fn()
//함수 이름이 없는데 일단 함수가 하나밖에 없잖아. 그러니까 fn으로 이름붙여서 가져오기로 한 것.
// 함수를 내보낸다. 근데 그 이름은 내가 정해서 쓰면 된다가 원래 목적이야.
