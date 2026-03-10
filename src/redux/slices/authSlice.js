import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/utils";
import API_ENDPOINTS from "../../config/api-endpoints";

// Login API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const api = API_ENDPOINTS.POST_AUTHENTICATION_USER_LOGIN;

      const response = await axiosInstance({
        method: api.method,
        url: api.url,
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("token", response.data.accessToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login Failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;