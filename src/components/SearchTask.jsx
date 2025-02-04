import React from "react";
import { setSeacrhTask } from "../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchTask = () => {
  const dispatch = useDispatch();
  const seachAllTask = useSelector((state) => state.tasks.searchTask);
  return (
    <div className="row g-3">
      <div className="col-auto">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search"
          value={seachAllTask}
          onChange={(e) => dispatch(setSeacrhTask(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchTask;
