import React from "react";
import ToDoItem from "./TodoItem";

function ToDoList({ todos, toggleComplete }) {
  return (
    <div className="todo-list">
      <h1 className="header">To Do List</h1>
      <ul className="doto-items">
        <ToDoItem />
      </ul>
    </div>
  );
}

export default ToDoList;

/*
{todos.map((todo) => (
  <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
))}*/
