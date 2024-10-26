import React from "react";

type Task = {
  id: number;
  title: string;
  dueDate: string;
  status: string;
};

type TaskItemProps = {
  task: Task;
  toggleComplete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 mb-3 rounded-lg">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      </div>
      <button onClick={() => toggleComplete(task.id)} className="text-blue-500">
        {task.status === "Incomplete" ? "Mark Complete" : "Completed"}
      </button>
    </div>
  );
};

export default TaskItem;
