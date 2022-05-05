import React from 'react'
import { ITask } from '../../../interfaces/interfaces'
import "./Task.css"

function Task({title, id, description}: ITask ) {
  return (
    <div className='task'>
      <p className="task__title">{title}</p>
    </div>
  )
}

export default Task