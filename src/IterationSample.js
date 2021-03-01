import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "장관익" },
    { id: 2, text: "강승순" },
    { id: 3, text: "최용원" },
    { id: 4, text: "장연수" },
  ]);

  const [nextId, setNextId] = useState(5);
  const [inputText, setInputText] = useState("");

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
