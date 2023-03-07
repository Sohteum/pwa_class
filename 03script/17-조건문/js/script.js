$(document).ready(function () {

  $(`.ex1 button`).click(function () {
    var kor = parseInt($(`.ex1 .kor`).val())
    var eng = parseInt($(`.ex1 .eng`).val())
    var math = parseInt($(`.ex1 .math`).val())
    var total = kor + eng + math
    var avg = (total / 3).toFixed(1)
    var result
    console.log(avg, total); //전부 찍어봐야함
    if (!total) { //이 값이 정상이 아니라면, false라면 실행된다.
      alert('입력이 잘못되었습니다.');
      return false;
    }
    if (avg >= 90) {
      result = 'A'
    } else if (avg >= 80 && avg <= 90) {
      result = 'B'
    } else if (avg >= 70 && avg <= 80) {
      result = 'C'
    } else {
      result = 'D'
    }
    $(`.ex1 .output`).text(`총점은 ${total}점, 평균은 ${avg}점, 등급은 ${result}`)
  })

  $(`.ex2 button`).click(function () {
    var age = parseInt($(`.ex2 .age`).val())
    var point = parseInt($(`.ex2 .point`).val())
    var result
    console.log(age, point); //파랑색이 나오면 된거고, 검은색이면 유효성검사가 안된것(글자라는것)
    if (!age || !point) { //명령어가 두개이상이면 무조건 중괄호 써야함 하나만 있으면 안써도됨
      alert('입력오류');
      return false;
    }
    if ((age >= 19 && point >= 90) || (age <= 19 && point >= 80)) { //중첩조건:비교연산이 두개이상이면 논리연산 써주고, 논리연산이두개이상이면 괄호로 싸주기
      result = 'A'
    } else if ((age >= 19 && 90 > point && point >= 80) || (age <= 19 && 80 > point && point >= 70)) {
      result = 'B'
    } else if ((age >= 19 && 80 > point && point >= 70) || (age <= 19 && 70 > point && point >= 60)) {
      result = 'C'
    } else {
      result = 'D'
    }
    $(`.ex2 .output`).text(result)
  })


  /*   $(`.ex3 button`).click(function () {
      var com = Math.ceil(Math.random() * 3)
      if (com === 1) {
        com = '가위'
      } else if (com === 2) {
        com = '바위'
      } else {
        com = '보'
      }
      var user = $(`.ex3 input:checked`).val()
      console.log(com);
      var result
      if (
        (com === '가위' && user === '가위')
        || 
        (com === '바위' && user === '바위')
        || 
        (com === '보' && user === '보')
      ) {
        result = '비겼다!'
      } else if (
        (com === '가위' && user === '바위')
        || 
        (com === '바위' && user === '보')
        || 
        (com === '보' && user === '가위')
        ) {
        result = '이겼다!'
      } else {
        result = '졌다...'
      }
      $(`.ex3 .output`).text(`컴퓨터:${com}, 사용자:${user}, 결과:${result}`)
    }) */
  $(`.ex3 button`).click(function () {
    var com = Math.ceil(Math.random() * 3)
    if (com === 1) {
      com = '가위'
    } else if (com === 2) {
      com = '바위'
    } else {
      com = '보'
    }
    var user = $(`.ex3 input:checked`).val()
    console.log(com);
    var result
    if (
      (com === user)
    ) {
      result = '비겼다!'
    } else if (
      (com === '가위' && user === '바위')
      ||
      (com === '바위' && user === '보')
      ||
      (com === '보' && user === '가위')
    ) {
      result = '이겼다!'
    } else {
      result = '졌다...'
    }
    $(`.ex3 .output`).text(`컴퓨터:${com}, 사용자:${user}, 결과:${result}`)
  })

  /* -------------------------------------------------------------------------- */

  $(`.ex4 button`).click(function () {
    var num1 = $(`.ex4 .num1-1`).val()
    var num2 = $(`.ex4 .num1-2`).val()
    var sum1 = parseInt(num1 + num2)
    console.log(sum1);
    var num3 = $(`.ex4 .num2-1`).val()
    var num4 = $(`.ex4 .num2-2`).val()
    var sum2 = parseInt(num3 + num4)
    console.log(sum2);
    var result
    var cal = parseInt($(`.ex4 select`).val())
    if (!sum1 || !sum2 || (cal === 4 && sum2 === 0)) {
      alert('입력오류')
      return false;
    }

    if (cal === 1) {
      result = sum1 + sum2
    } else if (cal === 2) {
      result = sum1 - sum2
    } else if (cal === 3) {
      result = sum1 * sum2
    } else {
      result = sum1 / sum2
    }

    $(`.ex4 .output`).text(result)
  })



  $(`.ex5 button`).click(function () {
    var cm = parseInt($(`.ex5 .cm`).val())
    var kg = parseInt($(`.ex5 .kg`).val())
    var calc = kg / parseInt((cm * (0.01) * cm * (0.01))).toFixed(0)
    var 성별 = $(`.ex5 input:checked`).val()
    console.log(성별);
    var result
    if (!cm || !kg) {
      alert('입력오류')
      return false;
    }
    if ((성별==='male'&&calc < 15) || (성별==='female'&&calc < 20)) {
      result = '마름'
    } else if ((calc<=15&&성별==='male'&&calc < 20) || (calc<=20&&성별==='female'&&calc < 25)) {
      result = '적정'
    } else if ((calc<=20&&성별==='male'&&calc < 25) || (calc<=25&&성별==='female'&&calc < 30)) {
      result = '약간비만'
    } else {
      result = '비만'
    }
    $(`.ex5 .output`).text(`${성별} bmi수치(${calc})와 ${result} 입니다`)
  })


})