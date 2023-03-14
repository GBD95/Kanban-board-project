import React, { useState } from "react";

import Container from "../Container/Container";
import InputField from "../Input field/InputField";

const Home = (props) => {
  const [tasks, setTasks] = useState([]);

  const changePosition = (id, direction) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (direction === "right") {
          const newPosition = task.position === "Ready" ? "In progress" : "Done";
          return { ...task, position: newPosition };
        } else if (direction === "left") {
          const newPosition = task.position === "Done" ? "In progress" : "Ready";
          return { ...task, position: newPosition };
        } else {
          return { ...task, position: "trash" };
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className=' bg-neutral-700 text-white h-[100vh] px-10 py-6'>
      <InputField setTasks={setTasks} />
      <Container tasks={tasks} move={changePosition} />
    </div>
  );
};

export default Home;
