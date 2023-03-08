import React from 'react'
import Card from './Card'

const Column = (props) => {
  return (
    <div className=' bg-slate-800 rounded-md p-4'>
        <h1>{props.title}</h1>
        <hr />
        <ul>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>

        </ul>
    </div>
  )
}

export default Column