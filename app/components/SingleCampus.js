import React from 'react';

export default function ({selectedCampus}) {
  const students = selectedCampus.students
  return (
    <div>
      <ol>{selectedCampus.name}
      {
        students && students.map(student => {
          return (
            <li key={student.name}>{student.name}</li>
          )
        })
      }
      </ol>
    </div>
  )
}
