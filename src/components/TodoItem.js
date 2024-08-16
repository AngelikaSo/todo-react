import React from "react";

function TodoItem({ todo, toggleComplete }) {
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          Item
        </label>
        <button className="btn btn-delete">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item
        </label>
        <button className="btn btn-delete">Delete</button>
      </li>
    </>
  );
}

export default TodoItem;

/*
checked={todo.completed}
onChange={() => toggleComplete(todo.id)}
/>
<span>{todo.text}</span>*/
