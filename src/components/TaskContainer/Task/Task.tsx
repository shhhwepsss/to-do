import React from 'react'
import { ITask } from '../../../interfaces/interfaces'
import "./Task.css"

function Task({title, id, description}: ITask ) {
  return (
    <div className='task'>
      <h2 className="task__title">{title}</h2>
    </div>
  )
}

export default Task