import { call, takeEvery, put } from "redux-saga/effects";
import { client } from "lib/api-client";
import { FETCH_PRODUCTS_COUNT } from "../actions/products";
import {
	fetchLoading,
	fetchSuccess,
	fetchFail,
} from "../reducers/products-count";
import { getAllProductsCountQuery } from "lib/query/product";

export function* fetchProductsCount() {
	try {
		yield put(fetchLoading());
		const {
			data: { _allProductsMeta },
		} = yield call(client, "", {
			method: "POST",
			query: getAllProductsCountQuery(),
		});
		yield put(fetchSuccess({ count: _allProductsMeta.count }));
	} catch (err) {
		yield put(fetchFail({ error: err }));
	}
}

export default function* rootSaga() {
	yield takeEvery(FETCH_PRODUCTS_COUNT, fetchProductsCount);
}
