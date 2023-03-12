import { useState } from "react";
import Container from "./components/Container/Container";
import InputField from "./components/Input field/InputField";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const changePosition = (id, direction) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (direction === "right") {
          const newPosition = task.position === "Ready" ? "In progress" : "Done";
          return { ...task, position: newPosition };
        } else {
          const newPosition = task.position === "Done" ? "In progress" : "Ready";
          return { ...task, position: newPosition };
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className=' bg-neutral-800 text-white h-[100vh] px-10 py-6'>
      <InputField setTasks={setTasks} />
      <Container tasks={tasks} move={changePosition} />
    </div>
  );
}

export default App;
