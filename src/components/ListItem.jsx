import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ListItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <li className="list-group-item p-3 m-2">
      {todo.text}
    <DeleteButton todo={todo} deleteTodo={deleteTodo}/>
    <EditButton todo={todo} editTodo={editTodo}/>

    </li>
  );
};

export default ListItem;
