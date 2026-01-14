import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "payment/createOrder",
  async ({ amount, email }) => {
    const res = await axios.post(
      "https://7s9k5n-8000.csb.app/payment/create-order",
      null,
      { params: { amount, email } }
    );
    return res.data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: { loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default paymentSlice.reducer;
