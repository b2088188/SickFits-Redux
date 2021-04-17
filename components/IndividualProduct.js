import Head from "next/head";
import { useRouter } from "next/router";
import { client } from "lib/api-client";
import styled from "styled-components/macro";

const ProductStyles = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	max-width: var(--maxWidth);
	justify-content: center;
	align-items: top;
	gap: 2rem;
	img {
		width: 100%;
		object-fit: contain;
	}
`;

function IndividualProduct() {
	const {
		query: { productId },
	} = useRouter();

	return (
		<ProductStyles>
			<Head>
				<title>Sick Fits | Producy</title>
			</Head>
			<img src="test.jpg" alt="Product" />
			<div className="details">
				<h2>Title</h2>
				<p>Description</p>
			</div>
		</ProductStyles>
	);
}

export default IndividualProduct;
