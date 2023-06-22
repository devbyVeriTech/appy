<script>
    // import Icon from "@fortawesome/fontawesome-free/css/all.css"
	import {currentUser} from '$lib/pocketbase'
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch"; 
	import VscAccount from "svelte-icons-pack/vsc/VscAccount"; 
	import BsCart from "svelte-icons-pack/bs/BsCart"; 

    let open="";
	let search="";
    
</script>

<header>
<nav class="navvy">
	<div class="menu">
		<Hamburger bind:open --color="#8658a0" --active-color="#fff" --layer-height="2.6px" --layer-width="20px" --layer-spacing ="3.5px"/>

		{#if open}
			<Menu />
		{/if}
	</div>


   <div class="middle">
	<div class="logo">
		<a href="/home">
			<img src="" alt="Logo"> 
		</a>
	</div>
	<div class="searchyy">
		<div class={search ? 'above' : 'searchbox'}>
			<input type="search" bind:value={search} name="search" id="search" class="searchbar" placeholder="Search Here">
			<button class="search-icon" type="submit">
				<Icon src={AiOutlineSearch} size='1.4em' color={search ? '#fff' : '#69428e'} className={search ? 'poin' : 'nopoin'}/>
			</button>
		</div>
	</div>
	</div>

	<div class="menu-items">
		<li><a href="/tracks">All beats</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/contact">Contact</a></li>
	</div>

	
    <div class="items">
		<div class="searchy">
			<div class={search ? 'above' : 'searchbox'}>
				<input type="search" bind:value={search} name="search" id="search" class="searchbar" placeholder="Search Here">
				<button class="search-icon" type="submit">
					<Icon src={AiOutlineSearch} size='1.4em' color={search ? '#fff' : '#69428e'} className={search ? 'poin' : 'nopoin'}/>
				</button>
			</div>
		</div>
		<!-- <button class="nav-icon icon-btn no-style search">
			<Icon src={AiOutlineSearch} size='2em' color='white' />
		</button> -->
		{#if $currentUser}
			<button class="nav-icon icon-btn no-style">
				<a href="/checkout">
					<Icon src={BsCart} size='1.6em' />
				</a>
			</button>
			
			<button class="nav-icon icon-btn no-style">
				<a href="/my-account">
					<Icon src={VscAccount} size='1.6em' />
				</a>
			</button>
			{:else}
			
			<div class="navbtns">
				<a href="/login">
					<button class="btn login">
						LOGIN
					</button>
				</a>
				<a href="/signup">
					<button class="btn signup">
						SIGN UP	
					</button>
				</a>

			</div>

		{/if}
    </div>

</nav>
</header>

<style>

*{
}

:global(.poin) {
    cursor: pointer;
}

:global(.nopoin){
    pointer-events: none;
}

.searchy{
	width: auto;
}
.searchyy{
	visibility: hidden;
}

li{
	display: flex;
	flex-direction: row;
	widows: 100%;
}

.searchbox{
    display: flex;
    align-items: center;
    border: #69428e 1px solid;
    padding: 0;
    border-radius: 100px;
    padding: 0 10px;
    width: 75%;
    transition: all 0.4s linear;
}

.above{
    display: flex;
    align-items: center;
    border: #fff 1px solid;
    padding: 0;
    border-radius: 100px;
    padding: 0 10px;
    width: 75%;
    transition: all 0.4s linear;
}

.searchbar{
    padding: 5px;
}

input{
    border: none;
    background: transparent;
    color: #fff;
    outline: none;
    padding: 10px;
    font-family: inherit;
    width: 100%;
    font-size: 12px;
}

input::placeholder{
    font-size: 12px;
    color: #a872db;
    transition: 0.4s ease;
}

.search-icon{
    background: transparent;
    border: none;
    outline: none;
}

	:global(.custom-icon) {
    margin: 100px;
  }

  .navbtns{
	display: flex;
	gap: 5px;
  }

  .btn{
	border: none;
	outline: none;
	cursor: pointer;
	padding: 8px 10px;
	border-radius: 3px;
	color: #fff;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	font-family: inherit;
	min-width: 70px;
  }

  .login{
	background: var(--purple-button);

  }

  .signup{
	background: var(--yellow-button);

  }

    nav {
	align-items: center;
	background: var(--purple-header);
	border-bottom: .0625rem solid #1f1f1f;
	display: flex;
	height: var(--top-bar-height);
	justify-content: center;
	width: 100%;
	padding-inline: .75em;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	touch-action: none;
	width: 100%;
	z-index: 150;
	box-shadow: var(--bg-color) 0px 0px 7px 1px;
	transition: all 0.3s;
}

.menu-items{
	list-style: none;
	align-items: center;
	display: inline-flex;
	gap: 40px;
	justify-content: center;
	margin: auto;
	width: 59%;
}

.menu{
	padding-left: 0;
	margin-left: -10px;
	border-right: 1px solid #1f1f1f;
	color: #fff;

}


.navvy{
	background: var(--purple-header);

}
.logo {
	padding-left: 10px;

}
img {
	margin: 0;
	align-self: center;
	height: 2.5rem;
	width: 2.5rem;
	cursor: pointer;
}

.middle {
	max-width: 75%;
	
}

.middle {
	align-items: center;
	display: inline-flex;
	gap: .275rem;
	margin: 0 auto;
	width: 50%;
}

.items {
	align-items: center;
	display: inline-flex;
	margin-left: auto;
	width: 50%;
	justify-content: flex-end;
	
	
}


button.icon-btn {
	background: transparent;
	border-radius: 50%;
	position: relative;
}

button.icon-btn::before {
	background: hsla(0,0%,100%,.2) radial-gradient(circle,hsla(0,0%,100%,.4) 1%,transparent 0) 50%/15000%;
	border-radius: 50%;
	box-shadow: inset -2px -2px 22px -4px rgba(0,0,0,.208),inset -2px -2px 33px -12px rgba(0,0,0,.31),inset 2px 2px 33px -12px rgba(0,0,0,.31);
	/* content: ""; */
	height: 100%;
	left: 50%;
	margin-left: -50%;
	margin-top: -50%;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	top: 50%;
	transition-duration: .7s;
	transition-property: background-color,opacity,box-shadow;
	transition-timing-function: linear;
	width: 100%;
	z-index: 1;
}

*, ::after, ::before {
	animation-delay: -1ms !important;
	animation-duration: 1ms !important;
	animation-iteration-count: 1 !important;
	background-attachment: scroll !important;
	scroll-behavior: auto !important;
	transition-delay: 0s !important;
	transition-duration: 0s !important;
}

*, ::after, ::before {
	box-sizing: inherit;
}

::after, ::before {
	text-decoration: inherit;
	vertical-align: inherit;
}

button.icon-btn {
	color: var(--color-dark);
	cursor: pointer;
}




@media (prefers-reduced-motion: reduce){
*, ::after, ::before {
  animation-delay: -1ms !important;
  animation-duration: 1ms !important;
  animation-iteration-count: 1 !important;
  background-attachment: scroll !important;
  scroll-behavior: auto !important;
  transition-delay: 0s !important;
  transition-duration: 0s !important;
}
}

@media (min-width:1100px)	{
	.menu{
		display: none;
	}


	nav{
		display: flex;
		padding: 0 30px;
		justify-content: space-between;
	}
	.items{
		display: flex;
		gap: 0px;
	}

	.middle{
		display: inline-flex;
		
	}

}

@media (max-width:1099px)	{
	.menu-items{
		display: none;
	}
	.searchy, .searchyy{
		display: none;
	}
}
</style>