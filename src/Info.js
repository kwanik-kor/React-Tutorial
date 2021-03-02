import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./Reducer/useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  // const [form, setForm] = useState({
  //   name: "",
  //   nickname: "",
  // });

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
