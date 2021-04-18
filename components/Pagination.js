import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import PaginationStyles from "./styles/PaginationStyles";
import { FETCH_PRODUCTS_COUNT } from "redux/actions/products";
import { useDispatch, useSelector } from "react-redux";

function Pagination({ page }) {
	const dispatch = useDispatch();
	const { data: count, status } = useSelector(
		(state) => state.productsCountState
	);
	const isIdle = status === "idle";
	const isLoading = status === "pending";
	const isSuccess = status === "resolved";
	const pageCount = isSuccess
		? Math.ceil(count / process.env.NEXT_PUBLIC_PER_PAGE)
		: 0;

	useEffect(() => {
		dispatch({ type: FETCH_PRODUCTS_COUNT });
	}, []);
	if (isIdle || isLoading) return null;
	if (isSuccess)
		return (
			<PaginationStyles>
				<Head>
					<title>
						Sick Fits - Page {page} of {pageCount}
					</title>
				</Head>
				<Link href={`/products/${page - 1}`}>
					<a aria-disabled={page <= 1}>&larr; Prev</a>
				</Link>
				<p>
					Page {page} of {pageCount}
				</p>
				<p>3 Items Total</p>
				<Link href={`/products/${page + 1}`}>
					<a aria-disabled={page >= pageCount}>&rarr; Next</a>
				</Link>
			</PaginationStyles>
		);
}

export default Pagination;
