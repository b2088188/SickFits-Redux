import { useRouter } from "next/router";
import Products from "components/Products";
import Pagination from "components/Pagination";

function ProductPage() {
	const {
		query: { page },
	} = useRouter();

	return (
		<>
			<Products />
			<Pagination page={!page ? 1 : Number(page)} />
		</>
	);
}

export default ProductPage;
