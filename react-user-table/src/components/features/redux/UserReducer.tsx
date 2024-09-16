import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../Data";

const usersSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, username, email, phone } = action.payload;
      const update = state.find((user) => user.id == id);

      if (update) {
        update.name = name;
        update.username = username;
        update.email = email;
        update.phone = phone;
      }
    },
  },
});

export const { addUser } = usersSlice.actions;
export const { editUser } = usersSlice.actions;
export default usersSlice.reducer;
