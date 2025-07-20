import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid"; // Install uuid if not already: pnpm i uuid
import useLocalStorage from "../../hooks/useLocalStorage";


const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("task", []);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskInput onAdd={addTask} />
      <div className="flex gap-2 mt-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        filter={filter}
      />
    </div>
  );
};

export default TaskManager;
