import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all jobs from backend
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get("/api/job/getall");
  return response.data.jobs; // Return jobs from API response
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    searchTerm: "",
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = jobSlice.actions;
export default jobSlice.reducer;
