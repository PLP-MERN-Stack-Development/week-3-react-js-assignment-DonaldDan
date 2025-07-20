import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="mt-4">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      {filteredTasks.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No tasks to show.</p>
      )}
    </div>
  );
};

export default TaskList;
