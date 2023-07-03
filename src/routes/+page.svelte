<script>
    import Login from "$lib/components/Login/Login.svelte";
    import Register from "$lib/components/Register/Register.svelte";

	import { currentUser } from "$lib/pocketbase";

let email = "";
let paymentAmount = "";
let firstName = "";
let lastName = "";

/**@param {{ preventDefault: () => void; }} event*/

let config = {

	key: 'pk_test_803a6685b209a0bf43f351743cd9134bf1f36b9f',

	// key: 'pk_live_b72fee4b04840e6fe2ad223432ed22a49e32fb90',

	email: '',

	amount: '',

	currency: 'NGN',
	
	ref: ''+Math.floor((Math.random() * 1000000000) + 1),

	// label: "Optional string that replaces customer email"

	onClose: function(){

	  alert('Window closed.');

	},
	
	callback: function(/** @type {{reference :string; }} */ response){

	  let message = 'Payment complete! Reference: ' + response.reference;

	  alert(message);

	}
};

	/**@param {{ preventDefault: () => void; }} event*/

	
		function payWithPaystack(event) {
		  event.preventDefault();
		  // @ts-ignore
		  config.email = email;
		  // @ts-ignore
		  config.amount = parseFloat(paymentAmount)*100;
	
		  // @ts-ignore
		  let handler = PaystackPop.setup(config);
		  handler.openIframe();
		};
</script>


<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js"></script>
  <title>
    Cherrydee Beatstore
	</title>
</svelte:head>


<div class="img">
	<img src="/image/my-picture.webp" alt="">
</div>

<div class="overlay">

</div>

<div class="app-content-p">
  <div class="app-transition-wrapper"></div> 
  <main>
    <div class="resp-content-width">
      <div class="boxx">

	  </div>
													

					
					<div class="things">

						<div class="logo">
							<img src="./cp.png" alt="Logo">
						</div>

						<div class="welcome">
							<p>
							  welcome to
							  cherrydee
							  beatstore
							</p>
						</div>
	
						<div class="buttons">
							<div class="btttn">
								<a href="/login">
									<button type="submit" class="login bttn">Log in</button>
								</a>
							</div>
							<div class="btttn">
								<a href="/signup">
									<button type="submit" class="create bttn">Create an account</button>
								</a>
							</div>
							<div class="skip">
								<a href="/home">
									Skip
								</a>
							</div>
						</div>
					</div>
					

                </div>
            </main>       
    </div>


<style>

*{
	transition: ease 3s;
	position: relative;
}

.buttons{
	display: flex;
	flex-direction: column;
}

.skip{
	font-weight: 550;
	text-align: right;
	text-transform: uppercase;
	text-decoration: underline;
	padding-inline: 20px;
}

.overlay{
	background: linear-gradient(0deg, #69428e, #69428e36);
	width: 100dvw;
	height:100vh;
	height:100dvh;
	position: fixed;
	backdrop-filter: blur(1px) ;
	overflow: hidden;
	scroll-behavior: smooth;
	object-fit: cover;
}

.logo{
	display: flex;
	text-align: center;
	font-weight: 900;
	margin-bottom: 20px;
	margin-inline: auto;
}

.logo img{
	aspect-ratio: 1/1;
	width: 2em;
	height: auto;
}

img{
	height: 100vh;
	height: 100dvh;
	width: 100dvw;
	overflow: hidden;
	scroll-behavior: smooth;
	object-fit: cover;
	position: fixed;
	z-index: 0;
}

.things{
	display: flex;
	flex-direction: column;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	transition: 0.5s ease;
	z-index: 1;
}


.welcome{
	text-align: center;
	padding: 0 30px;
	font-size: 1.4rem;
	font-weight: 550;
	text-shadow: black 0px 0px 4px;
	text-transform: capitalize;
	transition: .3s ease;
	color: #fff;
}


.btttn{
	margin: auto;
	padding: 10px 20px;
	width: clamp(200px, 670px, 100%);
	z-index: 2;
}

.bttn{
	width: 100%;
	padding: 10px;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 550;
	font-family: inherit;
	text-transform: uppercase;
	z-index: 3;

}

.login{
	background: var(--primary-button);
	color: #fff;
	transition: background 750ms linear,color 750ms linear;
}

.create{
	background: var(--purple-button);
}

button{
	border: none;
	cursor: pointer;
	z-index: 100;
	transition: 7s ease;
}

button:hover{
	background: rgba(0, 0, 0, 0.301);
	color: #fff;
}



.img {
	align-self: center;
	grid-area: "img";
	height: auto;
	max-width: calc(100vw - 2.25em) !important;
	position: absolute;
	width: var(--width);

}

button{
	cursor: pointer;
}

@media (max-width: 440px)	{
	.boxx{
		display:contents;
	}


}

@media screen and (max-width: 719px){
.img {
	align-self: center;
	justify-self: center;
}


}

@media (min-width: 720px){
	.boxx {
		display: inline-flex;
		padding: 40px;
		align-items: center;
		vertical-align: middle;
		

	}


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

*, ::after, ::before {
	box-sizing: inherit;
}

/* svg.svelte-17872hf {
	stroke: var(--stroke,currentColor);
	shape-rendering: geometricPrecision;
	pointer-events: none;
} */
</style>