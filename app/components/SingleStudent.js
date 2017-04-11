import React from 'react';

export default function({selectedStudent}) {
  if (selectedStudent) {
    return (
      <div>
        <h1>{selectedStudent.name}</h1>
        <h2>{selectedStudent.email}</h2>
      </div>
    )
  }
  else {
    console.log('Loading')
  }
}
