import React from 'react';

export default function(props) {
  const handleNameChange = props.handleNameChange;
  const handleImageChange = props.handleImageChange;
  const handleSubmit = props.handleSubmit;

  return (
    <div>
      <h1>Add a new campus:</h1>
        <label>Name</label>
        <input type="text" onChange={handleNameChange} />
        <label>Image URL</label>
        <input type="text" onChange={handleImageChange} />
        <button type="submit" onSubmit={handleSubmit} >Submit</button>
    </div>
  )
}
