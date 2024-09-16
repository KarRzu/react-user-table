import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../Data";

const usersSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
