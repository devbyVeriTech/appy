<script>
	import Cart from "$lib/components/Cart/cart.svelte";
	import Product from "$lib/components/product/product.svelte";


	import { musicList } from "$lib/components/musiclist";
	// @ts-ignore
	let cart = [];

	
	// @ts-ignore
	const addToCart = (product) => {
		// @ts-ignore
		for(let item of cart) {
				if(item.id === product.id) {
					product.quantity += 1
					// @ts-ignore
					cart = cart;
					return;
				}
		}
		// @ts-ignore
		cart = [...cart, product]
	}
	
	// @ts-ignore
	const minusItem = (product) => {
		// @ts-ignore
		for(let item of cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							// @ts-ignore
							cart = cart
					} else {
							// @ts-ignore
							cart = cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	// @ts-ignore
	const plusItem = (product) => {
		// @ts-ignore
		for(let item of cart) {
			if(item.id === product.id) {
				item.quantity += 1
				// @ts-ignore
				cart = cart;
				return;
			}
		}
	}

// @ts-ignore
		$: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	
</script>

<Cart/>

<Product
add="{addToCart}"
/>