import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TODOLIst() {
  const [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  const [newTodo, setNewTodos] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty tasks
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }]; // Fixed: added () to uuidv4
    });
    setNewTodos("");
  };

  const updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  const deletTodo = (id) => {
    // Fixed: Use setTodos function properly and fixed filter return
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => deletTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
