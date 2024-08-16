import React from "react";

function TodoForm({ addTodo }) {
  return (
    <form className="new-item-form">
      <div className="form">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
