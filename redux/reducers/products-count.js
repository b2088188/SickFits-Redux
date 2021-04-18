import { createAction, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const productsCountSlice = createSlice({
  name: "products-count",
  initialState,
  reducers: {
    fetchLoading(state) {
      state.status = "pending";
    },
    fetchSuccess(state, action) {
      state.data = action.payload.count;
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
        ...action.payload.productsCountState,
      };
    });
  },
});

export const {
  fetchLoading,
  fetchSuccess,
  fetchFail,
} = productsCountSlice.actions;
export default productsCountSlice.reducer;
