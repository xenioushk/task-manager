import React from "react"
import { useState } from "react"

const AddTask = ({ onAdd }) => {
  // Default.
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    // validation
    if (!text) {
      alert("Please add task")
      return
    }

    //Send all the data to on Add function.
    onAdd({ text, day, reminder })

    //Initialize after form submit.
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Task</label>
        <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day</label>
        <input type="text" name="day" id="day" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="text">Reminder</label>
        <input type="checkbox" checked={reminder} id="reminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-form" />
    </form>
  )
}

export default AddTask
