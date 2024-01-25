import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
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
            <ToDoItem/>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}
