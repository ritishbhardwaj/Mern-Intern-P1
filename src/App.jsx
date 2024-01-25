import React from "react";

import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import ToDoList from "./Components/ToDoList";

export default function App() {

  const data=[
    {
      title : "typing diary",
      desc : "type your thoughts on laptop's notebook today"
    },
    {
      title : "eating breakfast",
      desc : "eat breakfast at 7:00 am"
    }
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
