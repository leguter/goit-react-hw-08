import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.goit.global";
const setAuthHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const register = createAsyncThunk(
  "auth/register",
  async (value, thunkAPI) => {
    try {
      const {data} = await axios.post("/users/signup", { email: value.userEmail, password: value.userPassword, name: value.userName });
      setAuthHeaders(data.token)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", {email: values.userEmail, password: values.userPassword});
      setAuthHeaders(data.token)
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    setAuthHeaders('')
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
  
});
export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeaders(token)
      const { data } = await axios.get("users/current")
      console.log(data)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
     {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
  )