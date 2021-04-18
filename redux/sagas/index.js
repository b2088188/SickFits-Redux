import { all } from "redux-saga/effects";
import products from "./products";
import product from "./product";
import productsCount from "./products-count";

function* rootSaga() {
  yield all([products(), product(), productsCount()]);
}

export default rootSaga;
