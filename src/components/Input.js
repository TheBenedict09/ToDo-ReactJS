import React from "react";

export default function Input(props) {
  return (
    <div className="Input">
      <input
        className="InputField"
        placeholder="Enter a task"
        name="input"
        onChange={props.onChange}
        value={props.inputValue}
      />
      <button onClick={props.add}>ADD</button>
    </div>
  );
}
