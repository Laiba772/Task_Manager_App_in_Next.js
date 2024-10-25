"use client"

import { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskItem from "../components/TaskItem";

// Define the Task interface
interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  status: string;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete Project Report", dueDate: "2024-10-28", priority: "High", status: "Incomplete" },
    { id: 2, title: "Meeting with Team", dueDate: "2024-10-30", priority: "Medium", status: "Incomplete" },
  ]);

  const [filterPriority, setFilterPriority] = useState<string | null>(null);

  // Specify the type of newTask as Task
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId: string | number) => {
    setTasks(tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === "Incomplete" ? "Complete" : "Incomplete" }
        : task
    ));
  };

  const today = new Date().toISOString().split("T")[0];
  const dueTodayTasks = tasks.filter(task => task.dueDate === today);

  const filteredTasks = filterPriority
    ? tasks.filter(task => task.priority === filterPriority)
    : tasks;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg p-8 mx-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">🌟 Task Manager 🌟</h1>

        <AddTaskForm addTask={addTask} />

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tasks Due Today</h2>
          {dueTodayTasks.length > 0 ? (
            <div className="space-y-4">
              {dueTodayTasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No tasks due today!</p>
          )}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter by Priority</h2>
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilterPriority("High")} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-red-600 focus:outline-none"
            >
              High Priority
            </button>
            <button 
              onClick={() => setFilterPriority("Medium")} 
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-yellow-600 focus:outline-none"
            >
              Medium Priority
            </button>
            <button 
              onClick={() => setFilterPriority(null)} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-blue-600 focus:outline-none"
            >
              Show All
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Tasks</h2>
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
