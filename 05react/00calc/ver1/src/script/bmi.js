export const fnSetObj = (n) => {
  let obj = {}


  for (let i = 1; i <= 2; i++) {
    obj[i] = false
  }
  obj[n] = true

  return obj
}


export const fnCheckBMI = (gender, cm, kg) => {
  let m = cm / 100
  let bmi = (kg / (m * m)).toFixed(2)
  let fillColor  //사람 색
  let morphN //사람번호
  let deg

  /* 
  fill:#8EACC9;
  fill:#99CC00;
  fill:#FF8900;
  fill:#FF4D00;
  fill:#8FACCA;
  */


  /* 사람번호, 사람색  */
  if ((gender === 'male' && bmi < 15) || (gender === 'female' && bmi < 20)) {//마름
    morphN = 1;
    fillColor = '#8eaCC9'

  } else if ((gender === 'male' && bmi >= 15 && bmi < 20) || (gender === 'female' && bmi >= 20 && bmi < 25)) {//저체중
    morphN = 2;
    fillColor = '#97c93c'
  } else if ((gender === 'male' && bmi >= 20 && bmi < 25) || (gender === 'female' && bmi >= 25 && bmi < 30)) {//정상
    morphN = 3;
    fillColor = '#fdd500'
  } else if ((gender === 'male' && bmi >= 25 && bmi < 30) || (gender === 'female' && bmi >= 30 && bmi < 35)) {//과체중
    morphN = 4;
    fillColor = '#f5881f'
  } else {//비만
    morphN = 5;
    fillColor = '#ef5023'
  }

  /* 저울 각도구하기 */

  let max = (gender === 'male') ? 35 : 40
  let min = (gender === 'male') ? 10 : 15
  deg = ((bmi - min) / (max - min)) * 180
  if (deg < 0) deg = 0
  if (deg > 150) deg = 180

  /* 에러여부확인 */
  // let err = (bmi <= 5 || bmi > 55) ? true : false 삼항연산자
  let err = (bmi < 8 || bmi > 55) && true //이항연산자

  if (!err) {
    let timeoutID
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      window.TweenMax.to('.manorg', 1, { morphSVG: `.man${morphN}`, fill: fillColor, ease: window.Linear.easeNone })
      window.TweenMax.to('.womanorg', 1, { morphSVG: `.woman${morphN}`, fill: fillColor, ease: window.Linear.easeNone })
    }, 500)
  }//에러가 없을때만 에니메이션 하겠다
  return { bmi, deg, err }

}

// export const fnSetDegree = (gender, bmi) => {
//   let min = (gender === 'male') ? 15 : 20
//   let max = (gender === 'male') ? 40 : 45
//   let ratio = (bmi - min) / (max - min)
//   if (ratio < 0) { ratio = 0 }
//   if (ratio > 1) { ratio = 1 }
//   let deg = ratio * 180
//   return deg



// }

/* 
//여기서 0~180 사이가 나오게 되는데 남자는 15(비율로0)에서 
 40(비율로1)이라고 계산하면 됨 여자는 20  45라고 계산하면 됨
15 밑으로 떨어지면 안됨 40 이상으로 넘어가도 안됨

특정값을 다른값으로 바꿔야 할때 무조건 비율을 사용해야 함

비율구하는 공식
1.범위를 구한다
2. 남자인경우 40-15 = 25 얘는 총 25를 움직일 수 있음
범위 : (현재bmi-시작점(min)/(40(max)-15(시작점=min)))
3. 여자인경우 45-20 = 25 얘도 총 25를 움직일 수 있음
값/범위
4. 이걸 구한다음에 
각도에 대입해야함
비율*적용할범위(각도범위180)
5. 비율이 0미만이나 1을 초과할 수 없도록 조건이나 삼항식 이항식 뭐든 걸기


*/