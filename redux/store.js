import { configureStore } from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper';

const makeStore = (context) => {
	const store = configureStore({
	reducer:{
		todos:[]
	}
})
	return store;
}

export const wrapper = createWrapper(makeStore);