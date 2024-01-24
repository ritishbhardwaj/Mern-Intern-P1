import React from "react";

export default function AddTodo() {
  return (
    <>
      <form>
        <div className="container">
          <div className="pt-4">
            <div className="row">
              <div className="col-5">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col-5">
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="add date"
                />
              </div>
              <div className="col-1">
                <button type="button" className="btn btn-success">
                  Success
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
