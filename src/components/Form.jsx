import React, { useEffect, useState } from "react";

const Form = ({saveTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();
if(  edit.isEdit){
  updateTodo(edit.todo.id, text)
}else{
  saveTodo(text);
}
    setText("");
  };

 
  useEffect(()=>{
setText(edit.todo.text)
  },[edit]);

  return (
    <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form-control   w-75 p-3 m-2"
         required placeholder="Write Something Here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn btn-success w-25 p-3 m-2 ">Save Todo</button>
    </form>
  );
};

export default Form;
