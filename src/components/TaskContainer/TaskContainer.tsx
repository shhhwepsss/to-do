
import { useSelector } from "react-redux"
import { ITask, IState } from "../../interfaces/interfaces"
import Task from "./Task/Task"
import "./TaskContainer.css"
type TaskContainerProps = {
    title:string
    backgroundColor: string
}

function TaskContainer({title, backgroundColor}: TaskContainerProps) {
  const state:IState = useSelector(( store: IState) => store)
  const allTasks = state.allTasks.map(item => <Task title={item.title} id={item.id} description={item.description}/> )
 
  return (
    <div style={{backgroundColor: `${backgroundColor}`}} className="task-container">
        <div className="task-container__title">
            <h2>{title}</h2>
        </div>
       {title === "Ожидание" ? allTasks : <></>}
    </div>
  )
}

export default TaskContainer
