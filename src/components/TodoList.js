import React from "react";
import TodoItem from "./TodoItem.js";

function ToDoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
