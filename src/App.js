import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Section from "./Components/Section/Section";
function App() {
  const [todos, setTodos] = useState(() => {
    const getTodos = localStorage.getItem("todos");
    if (getTodos) {
      return JSON.parse(getTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState();

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const removeComplated = () => {
    setTodos(todos.filter((todo) => todo.done === false));
  };

  return (
    <div>
      <section className="todoapp">
        <Header addTodo={addTodo} />

        <Section
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          filter={filter}
        />

        <Footer
          todos={todos}
          setFilter={setFilter}
          removeComplated={removeComplated}
        />
      </section>
      <Info />
    </div>
  );
}

export default App;
