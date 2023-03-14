import React from "react";
import Column from "./Column";

const Container = (props) => {
  return (
    <div className=' bg-slate-600 grid grid-cols-3 h-[60vh] mt-6 rounded-md p-4 gap-4'>
      <Column title='Ready' tasks={props.tasks} move={props.move} />
      <Column title='In progress' tasks={props.tasks} move={props.move} />
      <Column title='Done' tasks={props.tasks} move={props.move} />
    </div>
  );
};

export default Container;
