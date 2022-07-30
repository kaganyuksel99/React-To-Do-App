import React, { useState } from "react";

function Footer({ todos, setFilter, removeComplated }) {
  const [isActive, setisActive] = useState({
    all: true,
    active: false,
    complated: false,
  });
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong> {todos.filter((todo) => todo.done === false).length}</strong>{" "}
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              className={isActive.all ? "selected" : ""}
              href="!#"
              onClick={() => {
                setFilter();
                setisActive({
                  all: !isActive.all,
                  active: false,
                  complated: false,
                });
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={isActive.active ? "selected" : ""}
              href="!#"
              onClick={() => {
                setFilter(false);
                setisActive({
                  all: false,
                  active: !isActive.active,
                  complated: false,
                });
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={isActive.complated ? "selected" : ""}
              href="!#"
              onClick={() => {
                setFilter(true);
                setisActive({
                  all: false,
                  active: false,
                  complated: !isActive.complated,
                });
              }}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={() => removeComplated()}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
