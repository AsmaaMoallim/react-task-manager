import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddBtn, setShowAddBtn] = useState(false);

  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTask(tasksFromServer);
      console.log(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
    // console.log(data)
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
    // console.log(data)
  };

  const handelDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    // const tasksFromServerAfterDelete = await fetchTasks();
    // console.log(tasksFromServerAfterDelete);

    console.log("Deleting ", id);
    setTask(tasks.filter((task) => task.id !== id));
  };

  const handelRamainder = async (id) => {
    console.log("toggling remainder", id);

    const taskToToggle = await fetchTask(id);
    const updatedRemainder = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRemainder),
    });
    const data = await res.json();

    console.log(data);
    // setTask([...tasks, data]);

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const handelShowAddBtn = () => {
    setShowAddBtn(!showAddBtn);
  };

  const handelSaveTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTask([...tasks, data]);

    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTask([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={handelShowAddBtn} showAddBtn={showAddBtn} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
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
              </>
            }
            
          ></Route>

          <Route exact path="/about" element={<About />}>
            {" "}
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
