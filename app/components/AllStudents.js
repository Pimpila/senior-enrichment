import React from 'react';

export default function({allStudents, deleteStudent}) {
  return (
    <div>
      <div>
        <ol>Name
        {
          allStudents && allStudents.map(student => {
            return (
              <div key={student.id}>
                <li >{student.name}</li>
                <button value={student.id} onClick={event => deleteStudent(event.target.value)}>X</button>
              </div>
            )
          })
        }
        </ol>
      </div>
      <div>
        <ol>Campus
        {
          allStudents && allStudents.map(student => {
            return (
              <li key={student.name}>{student.campus.name}</li>
            )
          })
        }
        </ol>
      </div>
      <button>Add new student</button>
    </div>
  )
}
