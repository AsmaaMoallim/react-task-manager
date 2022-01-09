import Task from "./Task";

const Tasks = ({ tasks, onDelete, onRamainder }) => {
  return (
    <>
      {tasks.map((t) => (
        <Task
          key={t.id}
          task={t}
          onDelete={onDelete}
          onRamainder={onRamainder}
        />
      ))}
    </>
  );
};

export default Tasks;
