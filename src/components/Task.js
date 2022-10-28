import { FaTimes } from "react-icons/fa"

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} <FaTimes onClick={() => onDelete(task.id, task.text)} style={{ color: "red" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
