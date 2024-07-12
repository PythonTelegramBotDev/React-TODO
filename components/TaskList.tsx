// /components/TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: { id: number, title: string }[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
