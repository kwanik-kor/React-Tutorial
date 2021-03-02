import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

const getAverage = (numbers) => {
  console.log("평균 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  useEffect(() => {
    console.log("Effect!");
  });

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list] // Number나 List가 바뀌었을 때만 함수를 생성
  );

  const onClear = () => {
    setNumber("");
    setList([]);
  };

  const avg = useMemo(() => getAverage(list), [list]); // List가 변경되었을때만 Average를 호출

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={inputEl}
      />
      <button onClick={onInsert}>등록</button>
      <button onClick={onClear}>Clear</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
