import { combineReducers } from "redux";
import productsReducer from "./products";
import productReducer from "./product";
import productsCountReducer from "./products-count";

const reducers = combineReducers({
	productsState: productsReducer,
	productState: productReducer,
	productsCountState: productsCountReducer,
});

export default reducers;
