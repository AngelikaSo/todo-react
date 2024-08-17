import React from "react";
import TodoItem from "./TodoItem.js";

function ToDoList({ todos, toggleComplete, addTodo }) {
  return (
    <div className="todo-list">
      <h1 className="header">To Do List</h1>
      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
