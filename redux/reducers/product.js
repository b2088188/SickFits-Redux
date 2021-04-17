import { createAction, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchLoading(state) {
      state.status = "pending";
    },
    fetchSuccess(state, action) {
      state.data = action.payload.product;
      state.status = "resolved";
      state.error = null;
    },
    fetchFail(state, action) {
      state.error = action.payload.error;
      state.status = "rejected";
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.product,
      };
    });
  },
});

export const { fetchLoading, fetchSuccess, fetchFail } = productSlice.actions;
export default productSlice.reducer;
