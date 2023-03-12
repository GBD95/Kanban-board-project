import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className='flex'>
      {props.position === "Ready" ? null : (
        <button
          onClick={() => {
            props.move(props.id, "left");
          }}
          className=' bg-slate-200 text-black'
        >
          {"<="}
        </button>
      )}
      <div>{props.value}</div>
      {props.position === "Done" ? null : (
        <button
          onClick={() => {
            props.move(props.id, "right");
          }}
          className=' bg-slate-200 text-black'
        >
          {"=>"}
        </button>
      )}
    </div>
  );
};

export default Card;
