const btnArr = [
  { type: 'clear', char: <i className="fa-solid fa-trash-can"></i>, id: '1' },
  { type: 'string', char: '(', id: '2' },
  { type: 'string', char: ')', id: '3' },
  { type: 'string', char: '/', id: '4' },
  { type: 'string', char: '7', id: '5' },
  { type: 'string', char: '8', id: '6' },
  { type: 'string', char: '9', id: '7' },
  { type: 'string', char: '*', id: '8' },
  { type: 'string', char: '4', id: '9' },
  { type: 'string', char: '5', id: '10' },
  { type: 'string', char: '6', id: '11' },
  { type: 'string', char: '-', id: '12' },
  { type: 'string', char: '1', id: '13' },
  { type: 'string', char: '2', id: '14' },
  { type: 'string', char: '3', id: '15' },
  { type: 'string', char: '+', id: '16' },
  { type: 'del', char: <i className="fa-solid fa-eraser"></i>, id: '17' },//jsx니까따옴표안넣어도됨
  { type: 'string', char: '0', id: '18' },
  { type: 'string', char: '.', id: '19' },
  { type: 'equal', char: '=', id: '20' },
]


const fnSetOutput = (output, type, char) => { //아웃풋
  let showModal = false
  let errMsg

  if (type === 'string') {
    if (output.length >= 35) {
      // alert('계산식이 너무 깁니다')
      errMsg = '계산식이 너무 깁니다'   //만약 길게하고싶다면 
      showModal = true
      // return output //함수자체를 종료해서 더이상 적지 못하게 함
    } else {
      output += char
    }
  } else if (type === 'clear') {
    output = ''
  } else if (type === 'del') {
    output = output.slice(0, -1)
  } else {
    try {//예외처리구문
      const fnCalc = new Function(`return ${output}`) //이렇게 하면 문자열을 스크립트로리터럴로 바꿔줌
      //여기서 글자를 수식으로 바꾸는걸 해야함 뉴펑션이라는 기능 함수를 만드는데 문자열로 만드는거
      const prevOutput = output
      output = fnCalc()

      if (output === Infinity) {
        errMsg = '0으로 숫자를 나눌 수 없습니다'
        showModal = true
        output = prevOutput
      }

      if (output < Math.pow(10, 18)) {
        output = parseInt(output * 10000)
        output = output / 10000
      }
      output = String(output)
      if (output.length >= 25) {
        // alert('계산 결과가 너무 깁니다')

        errMsg = '계산 결과가 너무 깁니다'
        showModal = true
        output = prevOutput
      }
    } catch {
      errMsg = '계산식이 잘못되었습니다'
      showModal = true
      // alert('계산식이 잘못되었습니다')
    }
  }//else nested condition 
  return { output, showModal, errMsg } //리턴을 해야 받을 수 있는거야//키와 밸류값이 동일해서 생략
}

export { btnArr, fnSetOutput };


/* 
slice , 스플릿, 스플라이스
str=' 가나다라마'
str.slice(0, -1)
str.slice(1, str.length-1)
str.slice(0, 2) --가나다

*/