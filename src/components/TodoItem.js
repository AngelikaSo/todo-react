import React from "react";

function TodoItem({ todo, toggleComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
    </li>
  );
}

export default TodoItem;
