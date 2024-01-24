import React from "react";

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

        <tbody>
          <tr>
            <th className="col-2"> 2</th>
            <td className="col-4"> hello world</td>
            <div className="col-6">
              <div className="row">
                <td className="col-8"> <p>coding djnfjsidnfisdnfdfniefbjisdnfsnfiwefniuwefguiwebfijweniwenfiunone</p></td>
                <div className="col-4">
                  <button type="button" className="btn btn-success col-4">
                    delete
                  </button>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
