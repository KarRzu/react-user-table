import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps, UserState } from "../users/types";

const initialState: UserState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const fetchUsers = createAsyncThunk<UserProps[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
);

export const addUserAsync = createAsyncThunk<UserProps, UserProps>(
  "users/add-user",
  async (user) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserProps>) => {
      state.data?.push(action.payload);
    },

    deleteUser: (state, action) => {
      if (state.data) {
        const { id } = action.payload;
        state.data = state.data.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.error("Failed to fetch users:", action.error.message);
        state.isError = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.data?.push(action.payload);
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
