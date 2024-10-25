import React, { useState } from "react"; 

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, dueDate, priority, status: "Incomplete" });
    setTitle("");
    setDueDate("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="mb-2 p-2"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="mb-2 p-2"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mb-2 p-2"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

  