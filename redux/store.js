import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./reducers/products";
import productReducer from "./reducers/product";
import saga from "./sagas";

const makeStore = (context) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer: {
			productsState: productsReducer,
			productState: productReducer,
		},
		middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
	});
	store.sagaTask = sagaMiddleware.run(saga);
	return store;
};

export const wrapper = createWrapper(makeStore);
