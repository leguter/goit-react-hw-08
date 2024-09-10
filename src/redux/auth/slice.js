import { createSlice } from "@reduxjs/toolkit";
import { register,login,apiRefreshUser } from "./operations";
const handlePending = (state) => {
    state.isLoading = true;
    state.error = null
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
  name: "contacts",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
      isRefreshing: false,
      isLoading: false,
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(register.pending, handlePending)
          .addCase(register.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
          })
          .addCase(register.rejected, handleRejected)
          .addCase(login.pending, handlePending)
          .addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
          })
          .addCase(apiRefreshUser.pending, (state) => {
            state.error = null;
            state.isRefreshing = true;
        })
           .addCase(apiRefreshUser.fulfilled, (state) => {
        state.isRefreshing = false
           })
          .addCase(apiRefreshUser.rejected, (state) => {
            state.isRefreshing = false;
      })
    }
});
export const authReducer = authSlice.reducer;
