import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Header({ addTodo }) {
  const [task, setTask] = useState("");
  const inputSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      return false;
    }

    const newTodo = { id: uuidv4(), task, done: false };
    addTodo(newTodo);
    setTask("");
  };
  const resetInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={inputSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={task}
          onChange={resetInput}
        />
      </form>
    </header>
  );
}

export default Header;
