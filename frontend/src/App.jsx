import React, { useSate, useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // first of all fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);   // empty array means only render it once

  // fetching the tasks
  const fetchTasks = async () => {
    try {
      const { tasks } = await axios.get('http://localhost:5000/tasks');
      setTasks(tasks || []);
    }
    catch (err) {
      console.error('Error Fetching Task: ', err);
    }
  };

  // adding a new task
  const addTask = async () => {
    if (!newTask.trim()) {
      return alert('Task is required!');
    }

    try {
      const response = await axios.post('http://localhost:5000/tasks', { task: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    }
    catch (err) {
      console.error('Error Adding Task: ', err);
    }
  };

  // deleting a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    }
    catch (err) {
      console.error('Error Deleting Task: ', err);
    }
  };

  return (
    <div className="app">
      <div className='todo-app'>
      <h1>Todo-List</h1>

      {/* input field to add a new task */}
      <div className="add-task">
        <input type="text"
          placeholder='Enter a new task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* list of tasks */}
      <ul className='task-list'>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.task}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
      </div>
    </div>
  );

};

export default App;