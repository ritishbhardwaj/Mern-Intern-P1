import React from "react";

import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import ToDoList from "./Components/ToDoList";

export default function App() {

  const data=[
  
  ]

  return (
    <>
      <div className="shadow p-3 mb-5 bg-body rounded   container">
        <center>
          <Title />
          <AddTodo />
          <ToDoList data={data}/>
        </center>
      </div>
    </>
  );
} 
