import React from "react";

export default function ToDoItem() {
  return (
    <>
      <tr>
        <th className="col-2"> 1</th>
        <td className="col-4"> typing diary</td>
        <td className="col-6">
          <div className="row">
            <div className="col-8">
              <p>type your thoughts on laptop's notebook today</p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th className="col-2"> 2</th>
        <td className="col-4"> eating breakfast</td>
        <td className="col-6">
          <div className="row">
            <div className="col-8">
              <p>eat breakfast at 7:00 am</p>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
