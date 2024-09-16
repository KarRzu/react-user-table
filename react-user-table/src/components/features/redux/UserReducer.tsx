import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../Data";

const usersSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {},
});
