import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "payment/createOrder",
  async ({ amount, email }) => {
    const res = await axios.post(
      "https://payment-backend-production-35fa.up.railway.app/payment/create-order",
      null,
      { params: { amount, email } }
    );
    return res.data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: { order: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      });
  },
});

export default paymentSlice.reducer;
