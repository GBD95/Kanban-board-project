import React, { useState } from 'react'

const Card = (props) => {
  console.log(props.task)
  const [position, setPosition] = useState(props.task.position);
  
  const changePosition = () => {
    setPosition('In Progress')
  };
  return (<div className='flex'>
      <div>{props.text}</div>
      <button onClick={changePosition} className=' bg-slate-200 text-black'>{"=>"}</button>
  </div>
  )
}

export default Card