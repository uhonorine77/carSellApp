import React from 'react';

//defining the task component
const Task = ({ task, index, completeTask, editTask, deleteTask }) => {
    //Implementing the rendering of the task's name and completion status.
  const { name, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span className="task-name">{name}</span>
      <div className="task-actions">
        {/* Implement the event handlers to edit the task's name, mark it as completed, and delete it. */}
        <button className="btn-complete" onClick={() => completeTask(index)}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button className="btn-edit" onClick={() => editTask(index)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
