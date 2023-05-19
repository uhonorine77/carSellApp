import React, { useState } from 'react';

// defining the AddTaskForm component
const AddTaskForm = ({ addTask }) => {
    // state variables to store the new task's name and handle form input changes.
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask(newTask);
    setNewTask('');
  };

  return (
    // Implement the event handler to add a new task when the form is submitted.
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
