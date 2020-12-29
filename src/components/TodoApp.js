import React, { useState } from "react";
import "./todoapp.css";

function TodoApp(props) {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...tasklist, taskDetails]);
    }
    console.log(task);
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((task) => task.id !== id));
  };

  const completeTask = (e, id) => {
    e.preventDefault();
    //find out index of element
    const element = tasklist.findIndex((elem) => elem.id === id);
    //copy array into new temp
    const newTaskList = [...tasklist];
    newTaskList[element].isCompleted = true;
    setTaskList(newTaskList);
  };
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Add Task here..."
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <br />
      {tasklist.length !== 0 ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"} key={t.id}>
              {t.value}
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                Delete
              </button>
              <button
                className="completed"
                onClick={(e) => completeTask(e, t.id)}
              >
                completed
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
