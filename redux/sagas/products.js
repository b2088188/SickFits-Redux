import { call, takeEvery, put } from "redux-saga/effects";
import { client } from "lib/api-client";
import { FETCH_PRODUCTS } from "../actions/products";
import { fetchLoading, fetchSuccess, fetchFail } from "../reducers/products";

function getAllProductsQuery({ page = 1 } = {}) {
  const skip = (page - 1) * process.env.NEXT_PUBLIC_PER_PAGE;
  const first = process.env.NEXT_PUBLIC_PER_PAGE;

  return ` query ALL_PRODUCTS_QUERY{
  allProducts(
  first:${first}
  skip:${skip}
  ){
    id
    name
    price
    description
    photo{
      id
      image{
        publicUrlTransformed
      }
    }
  }
}`;
}

export function* fetchProducts() {
  try {
    yield put(fetchLoading());
    const {
      data: { allProducts },
    } = yield call(client, "", {
      method: "POST",
      query: getAllProductsQuery(),
    });
    yield put(fetchSuccess({ products: allProducts }));
  } catch (err) {
    yield put(fetchFail({ error: err }));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
