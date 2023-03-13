import React from "react";
import Card from "./Card";

const Column = (props) => {
  return (
    <div className=' bg-slate-800 rounded-md p-4'>
      <h1 className=' text-center pb-4'>{props.title}</h1>
      <hr />
      {props.tasks.map((task) => {
        if (props.title === task.position) {
          return (
            <Card
              value={task.value}
              position={task.position}
              id={task.id}
              key={task.id}
              move={props.move}
            />
          );
        }
      })}
    </div>
  );
};

export default Column;
