import { useState } from 'react'
import Container from './components/Container/Container'
import InputField from './components/Input field/InputField'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className=" bg-neutral-800 text-white h-[100vh] px-10 py-6">
        <InputField setTasks={setTasks} />
        <Container tasks={tasks}/>
    </div>
  )
}

export default App
