import Task from "./Task"
const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task task={task} onToggle={onToggle} onDelete={onDelete} key={index} />
      ))}
    </div>
  )
}

export default Tasks
