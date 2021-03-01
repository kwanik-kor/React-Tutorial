import React, { useState } from "react";

// 함수형 Component에서도 State를 사용하기 위해서는 Hooks에서 제공하는 useState를 사용해야함
const Say = () => {
  // useState의 인자에는 상태의 초기값을 넣어줘야 함
  // 첫 번째 인자는 현재의 상태, 두 번째 인자는 상태를 바꾸어 주는 함수(Setter)
  const [message, setMessage] = useState("Welcome");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  const object = { a: 1, b: 2, c: 3 };
  // 사본을 만들어서 b 값만 덮어 쓰기
  const nextObject = { ...object, b: 2 };

  // ... => spread 연산자
  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({ id: 4 }); // 새 항목 추가
  nextArray.filter((item) => item.id !== 2); // id가 2인 항목 제거
  nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
