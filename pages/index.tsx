// /pages/index.tsx
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number, title: string }[]>([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (id: number, title: string) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, title } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (tasks: { id: number, title: string }[]) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tasks })
    });
  };

  return (
    <div className={styles.container}>
      <h1>Write Tasks Here....</h1>
      <p>Add a subtitle here.</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default Home;
