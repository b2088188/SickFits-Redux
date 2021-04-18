import { call, takeEvery, put } from "redux-saga/effects";
import { client } from "lib/api-client";
import { FETCH_PRODUCT } from "../actions/products";
import { fetchLoading, fetchSuccess, fetchFail } from "../reducers/product";
import { getProductQuery } from "lib/query/product";

export function* fetchProduct(action) {
  try {
    yield put(fetchLoading());
    const {
      data: { Product },
    } = yield call(client, "", {
      method: "POST",
      query: getProductQuery(action.payload.productId),
    });
    yield put(fetchSuccess({ product: Product }));
  } catch (err) {
    yield put(fetchFail({ error: err }));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_PRODUCT, fetchProduct);
}
