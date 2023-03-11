import React from 'react'
import Card from './Card'

const Column = (props) => {



  return (
    <div className=' bg-slate-800 rounded-md p-4'>
        <h1>{props.title}</h1>
        <hr />
        {props.tasks.map((task) => {
          if(props.title === task.position){
            return <Card text={task.value} task={task}/>
          }
        })}
    </div>
  )
}

export default Column