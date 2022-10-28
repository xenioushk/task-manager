// import logo from "./logo.svg"
import "./App.css"

import { React, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
// import Students from "./components/Students"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting 1",
      day: "Friday 13-01-2022 20:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting 2",
      day: "Friday 29-01-2022 20:00",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting 3",
      day: "Friday 30-01-2022 20:00",
      reminder: true,
    },
  ])

  // Add Task.

  const addTask = (task) => {
    console.log(task)

    // create a random number
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  // Delete Task.
  // It's gonna take the id as task id.

  const deleteTask = (id, text) => {
    // console.log("delete", id, text)

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder.

  const toggleReminder = (id) => {
    console.log(id)

    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  // Students UseState.

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Mahbub Alam Khan",
      roll: 2004331070,
    },
    {
      id: 2,
      name: "Mahjabeen Akter",
      roll: 2004331007,
    },
    {
      id: 3,
      name: "Mahbub Ruqayyah",
      roll: 2004331071,
    },
    {
      id: 3,
      name: "Mahbub Lubaynah",
      roll: 2004331072,
    },
  ])

  return (
    <BrowserRouter>
      <div className="container">
        <Header title="My Header" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : "No Tasks!"}

        {/* <Students students={students} /> */}

        {/* <Route path="/about-us" component={AboutUs} /> */}

        {/* <Route path="/about" /> */}
        <Footer />
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
