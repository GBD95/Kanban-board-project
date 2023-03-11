import React from 'react'
import Column from './Column'

const Container = (props) => {


  return (
    <div className=' bg-slate-600 grid grid-cols-3 h-[85vh] mt-6 rounded-md p-4 gap-4'>
        <Column title="Ready" tasks={props.tasks}/>
        <Column title="In progress" tasks={props.tasks}/>
        <Column title="Done" tasks={props.tasks}/>
    </div>
  )
}

export default Container