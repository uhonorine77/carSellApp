import React from 'react';
import Task from './Task';

//defining tasklist component
const TaskList = ({
    //adding necessary state variables
  tasks,
  completeTask,
  editTask,
  deleteTask,
  clearCompletedTasks,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        // Implement the rendering of the list of tasks using the Task component.
        <Task
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
       {/* clear completed tasks. */}
      <button
        className="btn-clear-completed"
        onClick={clearCompletedTasks}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TaskList;
