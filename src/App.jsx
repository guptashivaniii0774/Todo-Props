import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([ 
  ]);

  const [edit , setEdit] = useState({
    todo: {},
    isEdit:false,
  });

 // Delete Todo
  const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Save Todo

  const saveTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };

    setTodos([newTodo, ...todos]);
   
  };

  // Edit Todo

  const editTodo =(todo) =>{
    setEdit({
      todo:todo,
      isEdit : true,
    })
  }


  // Update Todo 

const updateTodo = (id, newText)=>{
  setTodos(todos.map((item) => (item.id === id ? {...item, text : newText} : item)));

  setEdit({
    todo:{},
    isEdit: false,

  })
};

  return (
    <>
      <Navbar />

      <div className="container p-5">
        <Form saveTodo={saveTodo} edit={edit}  updateTodo={updateTodo}/>
        <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        <Footer />
      </div>
    </>
  );
};

export default App;
