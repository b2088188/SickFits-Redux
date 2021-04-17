import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";

function Product({ product }) {
	return (
		<ItemStyles>
			<img src={product.photo.image.publicUrlTransformed} alt={product.name} />
			<Title>
				<Link href={`/product/${product.id}`}>
					<a>Product</a>
				</Link>
			</Title>
			<PriceTag>$123</PriceTag>
			<p>Description</p>
			<div className="buttonList">
				<Link
					href={{
						pathname: "update",
						query: {
							productId: product.id,
						},
					}}
				>
					Edit
				</Link>
			</div>
		</ItemStyles>
		// <ItemStyles>
		// 	<img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
		// 	<Title>
		// 		<Link href={`/product/${product.id}`}>
		// 			<a>{product.name}</a>
		// 		</Link>
		// 	</Title>
		// 	<PriceTag>{formatMoney(product.price)}</PriceTag>
		// 	<p>{product.description}</p>
		// 	<div className='buttonList'>
		// 		<Link
		// 			href={{
		// 				pathname: 'update',
		// 				query: {
		// 					productId: product.id
		// 				}
		// 			}}
		// 		>
		// 			Edit
		// 		</Link>
		// 		<AddToCart id={product.id}>Add To Cart</AddToCart>
		// 		<DeleteProduct id={product.id}>Delete</DeleteProduct>
		// 	</div>
		// </ItemStyles>
	);
}

export default Product;
