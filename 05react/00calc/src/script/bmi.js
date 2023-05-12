export const fnSetObj = (n) => {
  let obj = {}


  for (let i = 1; i <= 2; i++) {
    obj[i] = false
  }
  obj[n] = true

  return obj
}


export const fnCheckBMI = (gender, cm, kg) => {
  const m = cm / 100
  const bmi = (kg / (m * m)).toFixed(2)
  let bmiNum
  let bmiResult
  let fill=''

  if (gender === 'male') {

    if (bmi < 15) {
      bmiResult = '저체중'
      bmiNum = 'man1'
      fill='#8FACCA'
    } else if (bmi => 15 && bmi < 20) {
      bmiResult = '마름'
      bmiNum = 'man2'
      fill='#99CC00'
    } else if (bmi => 20 && bmi < 25) {
      bmiResult = '정상'
      bmiNum = 'man3'
      fill='#FFD600'
    } else if (bmi => 25 && bmi < 30) {
      bmiResult = '과체중'
      bmiNum = 'man4'
      fill='#FF8900'
    } else {
      bmiResult = '비만'
      bmiNum = 'man5'
      fill='#FF4D00'
    }
  }


  if (gender === 'female') {
    if (bmi < 20) {
      bmiResult = '저체중'
      bmiNum = 'women1'
      fill='#8FACCA'
    } else if (bmi => 20 && bmi < 25) {
      bmiResult = '마름'
      bmiNum = 'women2'
      fill='#99CC00'
    } else if (bmi => 25 && bmi < 30) {
      bmiResult = '정상'
      bmiNum = 'women3'
      fill='#FFD600'
    } else if (bmi => 30 && bmi < 35) {
      bmiResult = '과체중'
      bmiNum = 'women4'
      fill='#FF8900'
    } else {
      bmiResult = '비만'
      bmiNum = 'women5'
      fill='#FF4D00'
    }
  }
  return { bmi, bmiNum, bmiResult, fill }

}

export const fnSetDegree = (gender, bmi) => {
let min = (gender==='male')?15:20
let max = (gender==='male')?40:45
let ratio = (bmi-min)/(max-min)
if(ratio<0){ratio = 0}
if(ratio>1){ratio = 1}
let deg = ratio*180
return deg

  // let ratio  
  // let result  

  // if (gender === 'male') {
  //   if(ratio>1&&ratio<0){

  //   }
  //   ratio = (bmi - 15) / (40 - 15)
  //   result = ratio * 180
 
  // }

  // if (gender === 'female') {
  //   ratio = (bmi - 20) / (45 - 20)
  //   result = ratio * 180
  // }
  
  // return {result}

}

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