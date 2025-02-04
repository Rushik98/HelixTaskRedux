import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/taskSlice";

const FilterTask = () => {
  const dispatch = useDispatch();
  const currentFilterVal = useSelector((state) => state.tasks.filter);

  const filters = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "incomplete", label: "Incomplete" },
  ];
  return (
    <div className="btn-group mb-3 mt-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`btn ${
            currentFilterVal === filter.value
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => dispatch(setFilter(filter.value))}
        >
          {filter.value}
        </button>
      ))}
    </div>
  );
};

export default FilterTask;
