import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  searchTask: "",
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
      });
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
      }
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.completed = !task.completed;
      }
    },

    setSeacrhTask: (state, action) => {
      state.searchTask = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  toggleTask,
  setSeacrhTask,
  setFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
