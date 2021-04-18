import Head from "next/head";
import { useRouter } from "next/router";
import { client } from "lib/api-client";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

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
	const { data: product, status } = useSelector((state) => state.productState);
	const isIdle = status === "idle";
	const isLoading = status === "pending";
	const isSuccess = status === "resolved";

	if (isIdle || isLoading) return null;
	if (isSuccess)
		return (
			<ProductStyles>
				<Head>
					<title>Sick Fits | Producy</title>
				</Head>
				<div>
					<img
						src={product.photo.image.publicUrlTransformed}
						alt={product.name}
					/>
				</div>
				<div className="details">
					<h2>{product.name}</h2>
					<p>{product.description}</p>
				</div>
			</ProductStyles>
		);
}

export default IndividualProduct;
