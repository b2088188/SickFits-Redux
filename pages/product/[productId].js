import IndividualProduct from "components/IndividualProduct";
import { client } from "lib/api-client";
import { getAllProductsQuery } from "lib/query/product";
import { FETCH_PRODUCT } from "redux/actions/products";
import { END } from "redux-saga";
import { wrapper } from "redux/store";

function IndividualProductPage() {
	return <IndividualProduct />;
}

export const getStaticProps = wrapper.getStaticProps(async function ({
	params,
	store,
}) {
	const { productId } = params;
	store.dispatch({ type: FETCH_PRODUCT, payload: { productId } });
	store.dispatch(END);
	await store.sagaTask.toPromise();

	return {
		props: {},
	};
});

export async function getStaticPaths() {
	const {
		data: { allProducts },
	} = await client("", {
		method: "POST",
		query: getAllProductsQuery(),
	});
	const paths = allProducts.map((el) => {
		return { params: { productId: el.id } };
	});
	return {
		paths,
		fallback: "blocking",
	};
}

export default IndividualProductPage;
