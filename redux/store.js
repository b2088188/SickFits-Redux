import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
// import productsReducer from "./reducers/products";
// import productReducer from "./reducers/product";
// import productsCountReducer from "./reducers/products-count";
import reducer from "./reducers";
import saga from "./sagas";

const makeStore = (context) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer,
		middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
	});
	store.sagaTask = sagaMiddleware.run(saga);
	return store;
};

export const wrapper = createWrapper(makeStore);
