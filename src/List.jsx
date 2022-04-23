import React from "react";

export default function List({ todo, deleteTodo, id }) {
  return (
    <ul
      style={{
        border: "1px solid black",
        width: "40%",
        margin: "5% auto",
        padding: "10px",
      }}
    >
      <li style={{ listStyle: "none" }}>{todo.text}</li>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </ul>
  );
}
