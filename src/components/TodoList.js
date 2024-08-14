import React from "react";
import ToDoItem from "./TodoItem";

function ToDoList({ todos, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default ToDoList;
