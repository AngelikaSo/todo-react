import React, { useState } from "react";
import ToDoList from "./TodoList.js";
import TodoForm from "./TodoForm.js";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (title) => {
    const newTodo = {
      id: idCounter,
      title,
      completed: false,
      timestamp: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
    setIdCounter(idCounter + 1);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, timestamp: new Date().getTime() }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = todos.slice().sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <h1 className="header">To Do App</h1>
      <TodoForm addTodo={addTodo} />
      <ToDoList
        todos={sortedTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoApp;
