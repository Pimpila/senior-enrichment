import React from 'react';

export default function ({selectedCampus}) {
  const students = selectedCampus.students
  return (
    <div>
      <h1>{selectedCampus.name}</h1>
      {
        students && students.map(student => {
          return (
            <div key={student.id}>
              <h3>{student.name}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
