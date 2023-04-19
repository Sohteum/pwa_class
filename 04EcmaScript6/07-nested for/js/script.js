{
  /* 여기서 만들면 클릭할때마다증가 */
  document.querySelector(`.ex1 button`).addEventListener(`click`, (e) => {
    let sum = 5;
    for (let i = 1; i <= 5; i++) {
      /* 여기서 만들면 계속 증가 */
      sum += 1;
    }
    document.querySelector(`.ex1 .output`).innerText = sum;
    /* 결과는 한번만 출력 여기서 ㅎㅏ면됨 */
  });
}

{
  document.querySelector(`.ex2 button`).addEventListener(`click`, (e) => {
    let pow = 1;
    document.querySelector(`.ex2 .output`).innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      pow = pow * 2;
      let result = i < 5 ? pow + " ," : pow + " "; //뒤에 쉼표 들어가는거 싫으면 참고
      document.querySelector(`.ex2 .output`).append(result);
      /* 여기는 한번 출력이 아니고 이어붙이니까 여기로 들어와야함 */
    }
  });
}

{
  document.querySelector(`.ex3 button`).addEventListener(`click`, (e) => {
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        document.querySelector(`.ex3 .output`).append(`*`);
      } /* for j end */
      document
        .querySelector(`.ex3 .output`)
        .append(document.createElement(`br`));
    } /* for i end */
  });
} /* 중첩 for구문 */
//밖에 있는 for문이 1번 실행될 때마다 안에 있는 for문이 모든 반복을 실행하게 된다.그리고 안에 있는 for문의 동작이 완료되면 다시 밖에 있는 for문이 1번 반복하게 되고 안에 있는 for문이 다시 동작을 반복하는 것이다.

{
  document.querySelector(`.ex4 button`).addEventListener(`click`, (e) => {
    for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        document.querySelector(`.ex4 .output`).append(`${i}x${j}`);
        document
          .querySelector(`.ex4 .output`)
          .append(document.createElement(`br`));
      } /* for j end */
      document
        .querySelector(`.ex4 .output`)
        .append(document.createElement(`br`));
    } /* for i end */
  });
}

{
  document.querySelector(`.ex5 button`).addEventListener(`click`, (e) => {
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
        document.querySelector(`.ex5 .output`).append(`🙌`);
      }
      document
        .querySelector(`.ex5 .output`)
        .append(document.createElement(`br`));
    }
  });
}

{
  document.querySelector(`.ex6 button`).addEventListener(`click`, (e) => {
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5 - i; j++) {
        document.querySelector(`.ex6 .output`).append(`💖`);
      }

      for (let j = 1; j <= i; j++) {
        document.querySelector(`.ex6 .output`).append(`😊`);
      }
      document
        .querySelector(`.ex6 .output`)
        .append(document.createElement(`br`));
    } /* 첫번째 제이는 4번 돌아감. 12345, 43210, 12345 */
  });
}

{
  document.querySelector(`.ex7 button`).addEventListener(`click`, e => {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3 - i; j++) {
        document.querySelector(`.ex7 .output`).append(`💖`);
      }
      for (let j = 1; j <= i * 2 - 1; j++) {
        document.querySelector(`.ex7 .output`).append(`😊`);
      }
      for (let j = 1; j <= 3 - i; j++) {
        document.querySelector(`.ex7 .output`).append(`💖`);
    
      }
      document.querySelector(`.ex7 .output`).append(document.createElement(`br`));
  }
  });
  
}

{
  let table = document.createElement(`table`);
  table.innerHTML = `
  <thead></thead>
  <tbody></tbody>
  `;
  document.querySelector(`.ex8`).append(table);

  let thTr = document.createElement("tr"); // 열번 집어넣기
  for (let i = 1; i <= 10; i++) {
    let th = document.createElement("th");
    th.innerText = i;
    th.classList.add("green");
    thTr.append(th);
  }
  document.querySelector(`.ex8 thead`).append(thTr);

  /*   let tr = document.createElement("tr");
  tr.innerHTML = `
  <td colspan="1" class="pink">1</td>
  <td colspan="9" class="yellow">2</td>
  `;
  document.querySelector(`.ex8 thead`).append(tr); */

  for (let i = 1; i <= 9; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
  <td colspan="${i}" class="pink">1</td>
  <td colspan="${10 - i}" class="yellow">2</td>
  `;
    document.querySelector(`.ex8 thead`).append(tr);
  }
}

/* iinethtml은 내가 쓴 내용을 지우고 넣어버리는거라서 지금 크리에잇을ㅇ 하고 어펜드를 해줌
여기서는 빈 테이블을 하나 만들었고 거기에 빈공간에 innerhtml을 넣어준것.  */
