import { createAction, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchLoading(state) {
      state.status = "pending";
    },
    fetchSuccess(state, action) {
      state.data = action.payload.products;
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
        ...action.payload.products,
      };
    });
  },
});

export const { fetchLoading, fetchSuccess, fetchFail } = productsSlice.actions;
export default productsSlice.reducer;
