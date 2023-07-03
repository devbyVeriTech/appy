<script>
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
	
export let add;
</script>

<div class="container">

	<p>There are {cart.length} items in your cart</p>
	<div class="product-list">
		{#each $musicList as product}
		<div>
			<div class="image">
				<img class="svelte-1vm3yrq" src={"./image/"+product.image} alt="{product.name}">
			</div>
			<h4>{product.name}</h4>
			<p>₹{product.price}</p>
			<button on:click={() => {add}}>Add to cart</button>
		</div>
		{/each}
	</div>
	
	<br>
	<hr>
	<br>
	

</div>


<style>
	*{
		
	}

	.container{
		padding: 40px;
	}
	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax( 10rem, 1fr));
	}
	
	.image {
		padding-top: 20px;
		height: 70px;
		width: 70px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
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