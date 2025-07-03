import type { RootState } from "@/redux/store";
import type { IUser } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [
    {
      id: "jkglisudghleAIO",
      name: "Obaidullah",
    },
    {
      id: "jkglisudghleAIOhjfgyjh",
      name: "Ahsan",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...userData,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
