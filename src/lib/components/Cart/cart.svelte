<script>
	import { musicList } from "$lib/components/musiclist";
	// @ts-ignore
	export let cart = [];


	
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

<div class="container">

	<p>There are {cart.length} items in your cart</p>

	<div class="cart-list">
		{#each cart as item }
			{#if item.quantity > 0}
			<div class="cart-item">
				<img width="50" src={"./image/"+item.image} alt={item.name}/>
				<div>{item.quantity}
					<button on:click={() => plusItem(item)}>+</button>
					<button on:click={() => minusItem(item)}>-</button>
				</div>
				<p>₹{item.price * item.quantity}</p>
			</div>
			{/if}
		{/each}
		<div class="total">
			<h4>Total: ₹ {total}</h4>
		</div>
	</div>
</div>


<style>

	.container{
		padding: 40px;
	}

	img{
		width: 70px;
		height: inherit;
		object-fit: cover;
	}
	.total {
		text-align: right;
	}
	
	.cart-list {
		border: 2px solid;
		padding: 10px;
	}
</style>