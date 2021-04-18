import { useEffect } from "react";
import { client } from "lib/api-client";
import styled from "styled-components/macro";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCTS } from "redux/actions/products";

const ProductsList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 60px;
`;

function Products({ page }) {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector(
		(state) => state.productsState
	);
	const isIdle = status === "idle";
	const isLoading = status === "pending";
	const isSuccess = status === "resolved";
	useEffect(() => {
		dispatch({ type: FETCH_PRODUCTS, payload: { page } });
	}, [page]);

	if (isIdle || isLoading) return null;
	if (isSuccess)
		return (
			<div>
				<ProductsList>
					{products.map((el, i) => (
						<Product product={el} key={el.id} />
					))}
				</ProductsList>
			</div>
		);
}

export default Products;
