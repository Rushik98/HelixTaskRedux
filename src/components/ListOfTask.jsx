import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, updateTask } from "../store/taskSlice";
import { Trash2, Check, X, Edit } from "lucide-react";
import SearchTask from "./SearchTask";
import FilterTask from "./FilterTask";

const ListOfTask = () => {
  const { tasks, searchTask, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const handleUpdate = (id) => {
    if (editTitle.trim()) {
      dispatch(updateTask({ id, title: editTitle }));
      setEditingId(null);
      setEditTitle("");
    }
  };

  const SearchFilter = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTask.toLowerCase())
    );

  return (
    <>
      <SearchTask />
      <FilterTask />
      <div className="list-group mt-3">
        {SearchFilter.map((task) => (
          <div
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editingId === task.id ? (
              <div className="d-flex gap-2 flex-grow-1">
                <input
                  type="text"
                  className="form-control"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleUpdate(task.id)}
                >
                  <Check size={18} />
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditingId(null)}
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <>
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask({ id: task.id }))}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(task.id, task.title)}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteTask({ id: task.id }))}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {SearchFilter.length === 0 && (
          <div className="text-center py-3">No tasks found</div>
        )}
      </div>
    </>
  );
};

export default ListOfTask;
