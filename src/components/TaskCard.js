import React, { useState } from 'react';
import './../App.css';

const TaskCard = ({ task, onUpdateTask, onDeleteTask, onMoveTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleSave = () => {
    onUpdateTask(task.id, { title: updatedTitle, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <div>
          <input className="input-1" type="text" value={updatedTitle} onChange={e => setUpdatedTitle(e.target.value)} />
          <input className="input-1" type="text" value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} />
          <button className="btn-1" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button className="btn-1" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="btn-1" onClick={() => onDeleteTask(task.id)}>Delete</button>
          <button className="btn-1" onClick={() => onMoveTask('inProgress', task.id)}>Move to In Progress</button>
          <button className="btn-1" onClick={() => onMoveTask('done', task.id)}>Move to Done</button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
