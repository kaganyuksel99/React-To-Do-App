import React from "react";

function Section({ todos, setTodos, deleteTodo, filter }) {
  const handleCheck = (todo) => {
    let newTodo = { id: todo.id, task: todo.task, done: !todo.done };
    setTodos(todos.map((todo) => (todo.id == newTodo.id ? newTodo : todo)));
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos
            .filter((todo) =>
              filter !== undefined ? todo.done === filter : todo
            )
            .map((todo, i) => (
              <li className={todo.done ? "completed" : ""} key={i}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.done}
                    readOnly
                    onClick={() => handleCheck(todo)}
                  />
                  <label>{todo.task}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTodo(todo)}
                  ></button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Section;
