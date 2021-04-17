import Link from "next/link";
import Head from "next/head";
import PaginationStyles from "./styles/PaginationStyles";
import { client } from "lib/api-client";

function Pagination({ page }) {
	//const pageCount = isSuccess ? Math.ceil(count / process.env.NEXT_PUBLIC_PER_PAGE) : 0;
	const pageCount = 3;

	return (
		<PaginationStyles>
			{/*<Head>
							<title>
								Sick Fits - Page {page} of {pageCount}
							</title>
						</Head>*/}
			<Link href={`/products/123`}>
				<a aria-disabled={page <= 1}>&larr; Prev</a>
			</Link>
			<p>
				Page {page} of {pageCount}
			</p>
			<p>3 Items Total</p>
			<Link href={`/products/${123}`}>
				<a aria-disabled={page >= pageCount}>&rarr; Next</a>
			</Link>
		</PaginationStyles>
	);
}

export default Pagination;
