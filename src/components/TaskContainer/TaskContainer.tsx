
import "./TaskContainer.css"
type TaskContainerProps = {
    title:string
    backgroundColor: string
}

function TaskContainer({title, backgroundColor}: TaskContainerProps) {
  return (
    <div style={{backgroundColor: `${backgroundColor}`}} className="task-container">
        <div className="task-container__title">
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default TaskContainer
