// /components/TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write Tasks Here..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
