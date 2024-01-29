import React from "react";
import ToDoItem from "./ToDoItem";
import Error from "./Error";

export default function ToDoList(props) {

  if (props.data.length===0){
    return (
      <>
      <br/>
      <Error/>
      </>
    )
  }
  return (
    <div className="pt-4">
      <table className="table">
        <thead>
          <tr>
            <th className="col-2">Sr. no.</th>
            <th className="col-4">Title</th>
            <th className="col-6">Description</th>
          </tr>
        </thead>

        <tbody>

          {props.data.map((dt,index)=>{
            return (
              <>
              <ToDoItem nw_dt={dt} inx={index}   />
              </>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
}
