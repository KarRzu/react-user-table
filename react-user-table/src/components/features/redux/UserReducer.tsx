import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UserState = {
  data: UserProps[] | null;
  isLoading: boolean;
  isError: boolean;
};

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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data?.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, username, email, phone } = action.payload;
      const update = state.data?.find((user) => user.id === id);

      if (update) {
        update.name = name;
        update.username = username;
        update.email = email;
        update.phone = phone;
      }
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
      });
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
