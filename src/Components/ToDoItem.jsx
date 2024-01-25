import React from "react";

export default function ToDoItem(props) {
  let dt= props.nw_dt
  let index = props.inx +1
  // let 
  return (
    <>
      <tr>
        <th className="col-2"> {index}</th>
        <td className="col-4"> {dt.title}</td>
        <td className="col-6">
          <div className="row">
            <div className="col-8">
              <p>{dt.desc}</p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6">
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
      
    </>
  );
}
