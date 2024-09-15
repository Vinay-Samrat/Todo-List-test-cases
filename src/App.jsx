import React, { useState } from "react";
import Another from "./Another";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "The list of oceans",
      isComplete: false,
    },
    {
      id: 2,
      title: "The list of Dogs",
      isComplete: true,
    },
    {
      id: 3,
      title: "The list of cats",
      isComplete: false,
    },
  ]);

  const [todoInput, setTodoinput] = useState("");
  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);
    setTodoinput("");
    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
  }

  function handleInput(event) {
    setTodoinput(event.target.value);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function deleteTodo(id) {
   setTodos([...todos.filter(todo => todo.id !== id)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Another name="vinay" />
        <div className="div">
          <span className="count">{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
          />
        </form>

        <ul>
          {todos.map((todo, index) => (
            <div className="flex" key={todo.id}>
              <li>{todo.title}</li>
              <div className="div">
                <button onClick={() => deleteTodo(todo.id)}>x</button>
              </div>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
