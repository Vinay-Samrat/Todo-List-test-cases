import React, { useState } from "react";
import Another from "./Another";
import "./App.css";
import Counter from "./Counter";

function App() {
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

  function deleteTodo(id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter title="My Counter" />
        <h2>To do List</h2>
        <form action="#" onSubmit={addTodo}>
          <input type="text" value={todoInput} onChange={handleInput} placeholder="Add a new task" />
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <div className="flex" key={todo.id}>
              <input type="checkbox" checked={todo.isComplete} />
              <li>{todo.title}</li>
              <button onClick={() => deleteTodo(todo.id)}>x</button>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
