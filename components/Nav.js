import Link from "next/link";
import NavStyles from "./styles/NavStyles";
//import CartCount from './CartCount';
//import { getCurrentUserQuery } from 'lib/query/user';
//import SignOut from './SignOut';
//import { useCart } from '../context/cart-context';
import { client } from "lib/api-client";

function Nav() {
	// const { data: user } = useQuery({
	// 	queryKey: 'user',
	// 	queryFn: () =>
	// 		client('', { method: 'POST', query: getCurrentUserQuery }).then(({ data }) => {
	// 			if (!data.authenticatedItem) return null;
	// 			return data.authenticatedItem;
	// 		})
	// });

	//const { setCartOpen } = useCart();

	return (
		<NavStyles>
			<Link href="/products">Products</Link>
			{/*<>
									<Link href='/sell'>Sell</Link>
									<Link href='/orders'>Orders</Link>
									<Link href='/account'>Account</Link>
									<SignOut>Sign Out</SignOut>
									<button onClick={() => setCartOpen(true)}>
										My Cart
										<CartCount
											count={user.cart.reduce((acc, cur) => {
												return acc + (cur.product ? cur.quantity : 0);
											}, 0)}
										/>
									</button>
								</>*/}
			<Link href="/signin">Sign In</Link>
		</NavStyles>
	);
}

export default Nav;
