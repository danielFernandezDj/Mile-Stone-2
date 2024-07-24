import React, { useState } from "react";
import { fetchPath} from "./hooks/FetchPaths";

export default function EditToDo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${fetchPath}/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        window.location = "/";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
          Edit Task
        </button>
      </div>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => {
          setDescription(todo.description);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDescription(todo.description);
                }}
              ></button>
            </div>

            <div className="modal-body">
              <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={(e) => updateDescription(e)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}