import React from "react";
import { useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div className="group-edit">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div className="group-edit">
            <button onClick={handleSaveClick} className="btn btn-save">
              Save
            </button>
            <button onClick={handleCancelClick} className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
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
          <div className="btn-group">
            <button onClick={handleEditClick} className="btn btn-edit">
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-delete"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
