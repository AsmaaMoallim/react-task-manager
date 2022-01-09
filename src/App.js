import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {

  const [showAddBtn, setShowAddBtn] = useState(false);

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Appointment",
      day: "Feb 4th at 4:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Exam",
      day: "March 5th at 6:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Study",
      day: "Jun 6th at 10:00am",
      reminder: false,
    },
  ]);

  const handelDelete = (id) => {
    console.log("Deleting ", id);
    setTask(tasks.filter((task) => task.id !== id));
  };
  const handelRamainder = (id) => {
    console.log("toggling remainder", id);
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const handelShowAddBtn = () => {
    setShowAddBtn(!showAddBtn);
  }
  const handelSaveTask = (task) => {

  const id = tasks.length + 1;
  const newTask = {id , ...task };
    setTask([...tasks , newTask]);
  };

  return (
    <div className="container">
      <Header onAdd={handelShowAddBtn} showAddBtn={showAddBtn} />

      {showAddBtn && (
        <AddTask onAdd={handelShowAddBtn} onSave={handelSaveTask} />
      )}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handelDelete}
          onRamainder={handelRamainder}
        />
      ) : (
        "No Tasks Darlling ^_^ l Add some!"
      )}
    </div>
  );
}

export default App;
