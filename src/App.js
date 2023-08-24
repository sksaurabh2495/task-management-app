import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function App() {
  const [taskLists, setTaskLists] = useState([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'inProgress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ]);

  const handleAddTask = (listId, newTask) => {
    const updatedTaskLists = taskLists.map(list => {
      if (list.id === listId) {
        return { ...list, tasks: [...list.tasks, newTask] };
      }
      return list;
    });

    setTaskLists(updatedTaskLists);
  };

  const handleUpdateTask = (listId, taskId, updatedTask) => {
    const updatedTaskLists = taskLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: list.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, ...updatedTask };
            }
            return task;
          }),
        };
      }
      return list;
    });

    setTaskLists(updatedTaskLists);
  };

  const handleDeleteTask = (listId, taskId) => {
    const updatedTaskLists = taskLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: list.tasks.filter(task => task.id !== taskId),
        };
      }
      return list;
    });

    setTaskLists(updatedTaskLists);
  };

  const handleMoveTask = (sourceListId, targetListId, taskId) => {
    const taskToMove = taskLists.find(list => list.id === sourceListId).tasks.find(task => task.id === taskId);

    const updatedTaskLists = taskLists.map(list => {
      if (list.id === sourceListId) {
        return {
          ...list,
          tasks: list.tasks.filter(task => task.id !== taskId),
        };
      }
      if (list.id === targetListId) {
        return {
          ...list,
          tasks: [...list.tasks, taskToMove],
        };
      }
      return list;
    });

    setTaskLists(updatedTaskLists);
  };

  const handleExportToExcel = () => {
    // Implement export to Excel logic
    const excelData = [];
  taskLists.forEach(list => {
    list.tasks.forEach(task => {
      excelData.push({
        Task: task.title,
        Description: task.description,
        Status: list.title,
      });
    });
  });

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // Use FileSaver.js or similar library to save the blob as a file
  // Example using FileSaver.js:
  saveAs(blob, 'task_list.xlsx');
  };

  return (
    <div className="app">
      <h1 className="app-title">Task Management App</h1>
      <div className="task-list-container">
        {taskLists.map(list => (
          <TaskList
            key={list.id}
            list={list}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
          />
        ))}
      </div>
      <button className="btn-export" onClick={handleExportToExcel}>
        Export to Excel
      </button>
    </div>
  );
}

export default App;
