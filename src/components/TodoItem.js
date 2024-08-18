import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <>
      <li>
        <label
          style={{
            color: todo.completed ? "gray" : "black",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-delete">
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoItem;
