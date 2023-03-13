import React, { useState } from "react";

const InputField = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    props.setTasks((prev) => {
      return [
        ...prev,
        { value: inputValue, id: Math.floor(Math.random() * 100000), position: "Ready" },
      ];
    });
    setInputValue("");
  };

  return (
    <div className='flex  bg-slate-600 rounded-lg '>
      <input
        className='text-black p-4 rounded-l-md font-medium w-full bg-slate-100'
        placeholder='Type in your task...'
        type='text'
        value={inputValue}
        onChange={inputValueHandler}
      />
      <button
        className=' bg-slate-300 rounded-r-md p-4 w-60 text-black font-extrabold'
        onClick={addTask}
      >
        ADD TASK
      </button>
    </div>
  );
};

export default InputField;
