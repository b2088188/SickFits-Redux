import { all } from "redux-saga/effects";
import products from "./products";

function* rootSaga() {
  yield all([products()]);
}

export default rootSaga;
