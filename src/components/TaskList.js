import React from 'react';
import TaskCard from './TaskCard';
import './../App.css';

const TaskList = ({ list, onAddTask, onUpdateTask, onDeleteTask, onMoveTask }) => {
  const handleAddTask = newTask => {
    onAddTask(list.id, newTask);
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    onUpdateTask(list.id, taskId, updatedTask);
  };

  const handleDeleteTask = taskId => {
    onDeleteTask(list.id, taskId);
  };

  const handleMoveTask = (targetListId, taskId) => {
    onMoveTask(list.id, targetListId, taskId);
  };

  return (
    <div className="task-list">
      <h2>{list.title}</h2>
      {list.tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
        />
      ))}
      <button className="btn-2" onClick={() => handleAddTask({ id: Date.now(), title: 'New Task', description: 'Task description' })}>
        Add Task
      </button>
    </div>
  );
};

export default TaskList;
