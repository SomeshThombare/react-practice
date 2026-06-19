import React, { useState } from "react";

export default function TODOLIst() {
  const [todos, setTodos] = useState(["sample Task"]);
  const [newTodo, setNewTodos] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodos("");
  };

  const updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input 
        placeholder="add a task" 
        value={newTodo} 
        onChange={updateTodoValue} 
      />
      <button onClick={addNewTask}>Add Task</button>
      
      <p>TODO Tasks</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
