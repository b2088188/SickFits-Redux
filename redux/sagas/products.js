import { call, takeEvery, put } from "redux-saga/effects";
import { client } from "lib/api-client";
import { FETCH_PRODUCTS } from "../actions/products";
import { fetchLoading, fetchSuccess, fetchFail } from "../reducers/products";
import { getAllProductsQuery } from "lib/query/product";

export function* fetchProducts(action) {
  try {
    yield put(fetchLoading());
    const {
      data: { allProducts },
    } = yield call(client, "", {
      method: "POST",
      query: getAllProductsQuery({ page: action.payload.page }),
    });
    yield put(fetchSuccess({ products: allProducts }));
  } catch (err) {
    yield put(fetchFail({ error: err }));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
