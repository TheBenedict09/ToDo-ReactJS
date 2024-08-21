import "./App.css";
import Navbar from "./components/NavBar";
import Input from "./components/Input";
import ListTile from "./components/ListTile";
import React, { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onChange(event) {
    setInputText(event.target.value);
  }

  function add() {
    if (inputText.trim() !== "") {
      setTasks([...tasks, inputText]);
      setInputText("");
    }
  }

  function del(name) {
    setTasks(tasks.filter((task) => task !== name));
  }

  const handleEdit = (taskName) => {
    setCurrentTask(taskName);
    setIsEditing(true);
  };

  const handleSave = () => {
    setTasks(tasks.map((task) => (task === currentTask ? inputText : task)));
    setInputText("");
    setIsEditing(false);
    setCurrentTask(null);
  };

  const taskArray = tasks.map((task, index) => (
    <ListTile key={index} name={task} del={del} edit={handleEdit} />
  ));

  return (
    <div className="App">
      <Navbar />
      <Input onChange={onChange} add={add} inputValue={inputText} />
      <div className="lists">
      {taskArray}
      </div>
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Task</h2>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
