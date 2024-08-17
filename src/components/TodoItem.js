import React from "react";

function TodoItem({ todo, toggleComplete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        {todo.title}
      </label>
      <button className="btn btn-delete">Delete</button>
    </li>
  );
}

export default TodoItem;
