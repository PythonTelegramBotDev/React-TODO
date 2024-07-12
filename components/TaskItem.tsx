// /components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: { id: number, title: string };
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(task.title);

  const handleUpdate = () => {
    onUpdate(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {isEditing && <button onClick={handleUpdate}>Update</button>}
    </div>
  );
};

export default TaskItem;
