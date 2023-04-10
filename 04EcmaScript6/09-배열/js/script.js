{
  //배열은 대괄호. 아래는 3개의 값이 저장됨. 0번째 1번째 2번째는 배열의 인덱스를 의미
  let arr = ['가', '나', '다']
  // console.log(arr);
  // 배열의 몇번째를 출력할건지?
  // console.log(arr[1]);
  // console.log(arr.length);
  document.querySelector(`.ex1 .push`).addEventListener(`click`, e => {
    arr.push('라')
    document.querySelector(`.ex1 .output`).innerHTML = arr
  })
  document.querySelector(`.ex1 .unshift`).addEventListener(`click`, e => {
    arr.unshift('A')
    document.querySelector(`.ex1 .output`).innerHTML = arr
  })
  document.querySelector(`.ex1 .pop`).addEventListener(`click`, e => {
    arr.pop()
    document.querySelector(`.ex1 .output`).innerHTML = arr
  })
  document.querySelector(`.ex1 .shift`).addEventListener(`click`, e => {
    arr.shift()
    document.querySelector(`.ex1 .output`).innerHTML = arr
  })
}

{
  let arr = [0, 1, 2, 3] //매개변수= 파라미터= 인자 //인자 세개 이상이면 추가
  document.querySelector(`.ex2 .splice`).addEventListener(`click`, e => {
    // arr.splice(1,2) // 1로부터 2개삭제. 인자가 두개면 지우겠다
    // arr.splice(1,0) //안지우겠다.
    // arr.splice(1,0, '가') // 1번째위치부터 안지우고 그 위치에 '가'를 넣겠다
    //  arr.splice(1,1, '가') // 1번을 지우고 그 위치에 '가'를 넣겠다
    arr.splice(2, 2, '가') // 2부터 2개를 지우고 그 위치에 '가'를 넣겠다
    document.querySelector(`.ex2 .output`).innerHTML = arr
  })
}
{
  let str = '안녕하세요' 
  document.querySelector(`.ex3 .split`).addEventListener(`click`, e => {
// let arr = str.split()
// console.log(arr); //배열의 길이가 하나 
let arr = str.split('')
console.log(arr); //배열의 길이가 5
})
}
// {
// let str = '010-1231-0123' 
// document.querySelector(`.ex3 .split`).addEventListener(`click`, e => {
// let arr = str.split('-')
// console.log(arr); //''사이의 문자자 여백 등을 기준으로 쪼갬

//   })
// }
{
let str = '님 안녕하세요' 
document.querySelector(`.ex3 .split`).addEventListener(`click`, e => {
let arr = str.split('')
let user = document.querySelector(`.ex3 input`).value
arr.unshift(user)
console.log(arr); 
document.querySelector(`.ex3 .output`).innerHTML = arr
  })
}
{
  let str = '안녕 님'
  document.querySelector(`.ex3 .split`).addEventListener(`click`, e => {
    let arr = str.split(' ') //쪼개서 변형하거나 집어넣거나 하려면 split을 써야함
    let user = document.querySelector(`.ex3 input`).value
    arr.splice(1, 0, user)
    str = arr.join('')
    document.querySelector(`.ex3 .output`).innerHTML = str
  })
}
{
  let arr = ['홍길동', '아무개', '무명씨']
  let n = 0
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    if (arr.length === 0) {
      alert('더이상 출력할 목록이 없습니다.')
      return false
    }
    ++n
    let randomN = Math.floor(Math.random() * arr.length)
    //document.querySelector(`.ex4 .output`).append(arr[randomN])//이렇게 하면 클릭할때마다 중복된 이름이 계속 나옴
    let br = document.createElement('br')
    document.querySelector(`.ex4 .output`).append(`${n}등은 ${arr[randomN]}`, br)
    arr.splice(randomN, 1)// 이렇게 되면 배열이 2까지가 되는데 여기서 부터 배열의 개수가 계속 바뀌기때문에 위에서 랭쓰로 해줘야함
  })
}

{
  let arr = ['홍길동', '아무개', '무명씨']
  document.querySelector(`.ex5 button`).addEventListener(`click`, e => {
    let leng = arr.length
    for (let i = 1; i <= leng; i++) {
      let rand = Math.floor(Math.random() * arr.length)
      document.querySelector(`.ex5 .output`).append(
        arr[rand],
      )
      arr.splice(rand, 1)
    }
  })
}



let fruits = ['apple', 'grape', 'orange']
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

fruits = ['apple', 'grape', 'orange']

fruits.unshift('banana')


fruits.push('lemon')

fruits.shift()

fruits.pop()

fruits.splice(2, 0, 'melon')

fruits.splice(1, 2)


// let str = 'hello'

// str.split()
// console.log(str);

// let str = '안녕하세요'
// str.split()
// console.log(str); //배열의 길이가 하나 
// str.split(str, 5)
// console.log(str); //배열의 길이가 5


// let str = {
//   이름: '채치수',
//   나이: '11',
//   지역: '일본',
//   성별: '남',
// }
// // str.split(',')
// console.log(str);







// let gosomi = ['go', 'so', 'mi']

// let newGosomi = gosomi.join('')
// newGosomi = gosomi.join(',')
// console.log(newGosomi);

//xxxxxxxxxxx
// let gosomi = ['go', 'so', 'mi']

// gosomi.join('')
// gosomi.join(',')
// console.log(gosomi);

//xxxxxxxxxxx
// let gosomi = ['go', 'so', 'mi']

// // gosomi.join() xxxxx
// // console.log(gosomi); xxxxx

// console.log(gosomi.join());
// console.log(gosomi.join(''));



// let gosomi = ['go', 'so', 'mi']

// // gosomi.fill(0);
// gosomi.fill('🎀', 0, 2);
// console.log(gosomi);
// //배열 자체 수정


//?????
// let gosomi = ['go', 'so', 'mi']

// let newGosomi = gosomi.split('')

// console.log(newGosomi);


let str = '010-1231-0123' 
let arr = str.split('-')
let str1 = '안녕하세요' 
let arr1 = str1.split('')
console.log(arr1);


