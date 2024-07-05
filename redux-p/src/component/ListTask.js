// src/components/ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);

  const filteredTasks = tasks.filter(task => 
    filter === 'ALL' ? true : filter === 'DONE' ? task.isDone : !task.isDone
  );

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
