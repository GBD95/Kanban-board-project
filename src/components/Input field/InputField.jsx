import React, { useState }from 'react'

const InputField = (props) => {

    const [inputValue, setInputValue] = useState('')
    
    const inputValueHandler = (e) => {
        setInputValue(e.target.value)
    }

    const addTask = () => {
        props.setTasks((prev) => {
            return [
                ...prev,
                {value: inputValue,
                id: Math.floor(Math.random() * 100000),
                position: 'Ready'
            }
            ]
        })
        setInputValue('')
    }

  return (
    <div>
        <input className='text-black' placeholder='Type in your task...' type="text" value={inputValue} onChange={inputValueHandler}/>
        <button onClick={addTask}>Press</button>
    </div>
  )
}

export default InputField