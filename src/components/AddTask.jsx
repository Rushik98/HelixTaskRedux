import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTask({
          title: title.trim(),
        })
      );
      setTitle("");
      setError("");
    } else {
      setError("Task title cannot be empty");
    }
  };
  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
        {error && <div className="invalid-feedback d-block">{error}</div>}
      </form>
    </>
  );
};

export default AddTask;
