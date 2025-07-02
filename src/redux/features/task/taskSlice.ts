import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "asdfksjfhgjkhas",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfksjfhgjkhas",
      title: "Initialize Backend",
      description: "Create Server and connect database",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Mediam",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
