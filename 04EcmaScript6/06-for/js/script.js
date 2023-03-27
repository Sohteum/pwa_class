{
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex1 .output`).innerHTML = ''
    for (let i = 1; i <= 10; i++) {
      document.querySelector(`.ex1 .output`).append(i)
      let br = document.createElement(`br`)
      document.querySelector(`.ex1 .output`).append(br)
    }
  })

}
/* 제이쿼리라아 바닐라랑 어펜드 다름 안다가 숫자랑 비알넣으면 제이쿼리는 줄내림이 되는데 바닐라는 그냥 텍스트로 나옴 
만약 비알을 넣고싶다고 한다면 렛으로 비알을 선언한다음에  어펜드하는 숫자들 사이에 비알을 넣으면 됨. 근데 한번 선언하고나서는 한번밖에 선언을 못함 여러번 넣고싶으면 넣을려고 할때마다 비알을 만들어야하는거지.
그래서 이걸 반복하기 삻으니까ㅑ 반복문을 쓰는거야.*/
/* 반복문=순환문=for구문 
1. 시작과 끝을 설정한다.
2. 인덱스의 약자로 i를 사용
3. 증감연산 사용
4. 무한루프를 만들면 악성코드랑 비슷함 그냥 닫아야함.무한루프빠지지않도록 주의
5. 쁠쁠이 나오면 무조건 뒤에숫자가 크고 부등호가 작다.
6. 마이너스가 나오면 무조건 앞에 숫자가 크고 부등호가 크다.
*/

{
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex2 .output`).innerHTML = ''
    let sum = 0
    for (let i = 1; i <= 10; i++) {
      sum += i
      document.querySelector(`.ex2 .output`).innerHTML = sum

    }
  })
}

{
  document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex3 .output`).innerHTML = ''
    let count = 0
    for (let i = 5; i <= 10; i++) {
      count++
      document.querySelector(`.ex3 .output`).innerHTML = count
    }
  })
}
/* {
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex4 .output`).innerHTML = ''
    sum = 0
    var a = parseInt(document.querySelector(`.ex4 .num1`).value)
    var b = parseInt(document.querySelector(`.ex4 .num2`).value)

    if (a >= b) {
      for (let i = b; i <= a; i++) {
        sum += i
        document.querySelector(`.ex4 .output`).innerHTML = sum
      }
    } else {
      for (let i = b; i >= a; i--) {
        sum += i
        document.querySelector(`.ex4 .output`).innerHTML = sum
      }
    }
  })
} */
{
  document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex4 .output`).innerHTML = ''
    sum = 0
    var a = parseInt(document.querySelector(`.ex4 .num1`).value)
    var b = parseInt(document.querySelector(`.ex4 .num2`).value)
    let start
    let end

    if (a >= b) {
      start = b
      end = a
    } else {
      start = a
      end = b
    }
    /*    console.log(a, b, start, end); */
    for (let i = start; i <= end; i++) {
      sum += i
    }
    document.querySelector(`.ex4 .output`).innerHTML = sum
  })
}

{
  document.querySelector(`.ex5 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex5 .output`).innerHTML = ''
    count = 0
    var a = parseInt(document.querySelector(`.ex5 .num1`).value)
    var b = parseInt(document.querySelector(`.ex5 .num2`).value)
    let start = a
    let end = b

    if (a > b) {
      start = b
      end = a
      /* 여기서 렛을 선언하면 여기서만 쓰겠다는 이야기 */
    }

    for (let i = start; i <= end; i++)
      if (i % 2 === 0) {
        count++
      }
    document.querySelector(`.ex5 .output`).innerHTML = count
  })
}
/* {
  document.querySelector(`.ex6 button`).addEventListener(`click`, e => {
    let li = document.createElement('li')
    li.innerHTML = `
    <p>li 1번입니다</p>
    `
    document.querySelector(`.ex6 ul`).append(li)
  })
} */


{
  document.querySelector(`.ex6 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex6 ul`).innerHTML = ''
    for (let i = 1; i <= 5; i++) {
      let li = document.createElement('li')
      li.innerHTML = `
    <p>li 1번입니다</p>
    `
      document.querySelector(`.ex6 ul`).append(li)
    }
  })
}

{
  document.querySelector(`.ex7 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex7 .output`).innerHTML = ''
    for (let i = 1; i <= 5; i++) {
      let img = document.createElement('img')
      img.setAttribute('src', `./img/img${i}.jpg`)//attr('src','./img/img1.jpg) 인덱스기준이니까이렇게 적어줌. css는 자기기준임 js는 인덱스기준임  
      /* 속성값을 변하게 하겠다  */
      //getAttribute('src'), attr('src') <_>속성값을 가져오는거
      document.querySelector(`.ex7 .output`).append(img)
    }
  })
}
{
  document.querySelector(`.ex8 button`).addEventListener(`click`, e => {
    document.querySelector(`.ex8 .output`).innerHTML = ''
    var a = parseInt(document.querySelector(`.ex4 .num1`).value)
    var b = parseInt(document.querySelector(`.ex4 .num2`).value)
  
    /* 결과= 결과*num1 */
    for (let i = 1; i <= b; i++) {
      var result = result * a
    }
    document.querySelector(`.ex8 .output`).append(i)
  })
}