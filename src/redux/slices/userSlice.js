import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false,
};

// Function fetching data
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:8080/users/all");
    return response.data;
  }
);

// define slice
export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// export slice as a Reducer
export default userSlice.reducer;
