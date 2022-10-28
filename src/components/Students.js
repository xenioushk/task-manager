import React from "react"

const Students = ({ students }) => {
  return (
    <div>
      {students.map((student, index) => {
        return <div key={index}>{student.name}</div>
      })}
    </div>
  )
}

export default Students
