// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription) {
      dispatch(editTask(task.id, { description: newDescription }));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>
        {task.isDone ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
