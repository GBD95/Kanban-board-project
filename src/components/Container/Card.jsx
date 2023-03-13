import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className='flex bg-slate-600 justify-between rounded-md mt-4'>
      {props.position === "Ready" ? null : (
        <button
          onClick={() => {
            props.move(props.id, "left");
          }}
          className=' bg-slate-300 text-black rounded-l-md text-xl p-2 flex justify-center items-center'
        >
          {<ion-icon name='chevron-back-outline'></ion-icon>}
        </button>
      )}
      <div className='w-full flex justify-center items-center'>{props.value}</div>
      {props.position === "Done" ? null : (
        <button
          onClick={() => {
            props.move(props.id, "right");
          }}
          className=' bg-slate-300 text-black rounded-r-md text-xl p-2 flex justify-center items-center'
        >
          {<ion-icon name='chevron-forward-outline'></ion-icon>}
        </button>
      )}
    </div>
  );
};

export default Card;
