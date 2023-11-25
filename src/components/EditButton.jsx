import React from "react";

const EditButton = ({ todo, editTodo}) => {
  return (
    <button className="btn btn-sm btn-warning m-1  float-end" onClick={()=>editTodo(todo)}>Edit</button>
  );
};

export default EditButton;
