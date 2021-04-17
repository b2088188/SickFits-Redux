import IndividualProduct from "components/IndividualProduct";
import { client } from "lib/api-client";

function IndividualProductPage() {
	return <IndividualProduct />;
}

// export async function getStaticProps(context) {
// 	console.log(context);
// 	return {
// 		props: {},
// 	};
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { productId: "1" } }],
// 		fallback: false,
// 	};
// }

export default IndividualProductPage;
