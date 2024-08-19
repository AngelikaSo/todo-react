import React, { useState } from "react";
import ToDoList from "./TodoList.js";
import TodoForm from "./TodoForm.js";

function TodoApp(todo) {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (title) => {
    setTodos([...todos, { id: idCounter, title, completed: false }]);
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
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="header">To Do App</h1>
      <TodoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoApp;
