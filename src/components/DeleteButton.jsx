import React from "react";

const DeleteButton = ({ todo, deleteTodo}) => {
  return (
    <button className="btn btn-sm btn-danger m-1  float-end" onClick={() => deleteTodo(todo.id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
