<script lang="ts">
	import { licenses } from "../licenses";
	import {currentUser} from '$lib/pocketbase'

	let mainElement;
	

	export let beatavatar ="";
	export let beatname ="";
	export let beatgenre ="";
	export let beatbpm ="";
	export let beatkey ="";

	let email = "help@gmail.com";
	let paymentAmount ="30000";
    

    /**@param {{ preventDefault: () => void; }} event*/

	let config ={
		key: "pk_test_803a6685b209a0bf43f351743cd9134bf1f36b9f",

		email: '',

		amount: '',

		currency: 'NGN',

		ref: ''+Math.floor(Math.random() * 100000000 + 1),

		onClose: function()	{
			alert('Payment cancelled by you');
		},
		// @ts-ignore

		callback: function(/** @type {{reference :string; }} */ response){

		let message = 'Payment complete! Reference: ' + response.reference;

		alert(message);

		}
	};
	


	/** @param {{ preventDefault: () => void; }} event*/
	
			// @ts-ignore

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
	
    



	// onMount (function(){

	// })

</script>
<svelte:head>
	<script src="https://js.paystack.co/vl/inline.js"></script>
</svelte:head>

<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
    <div class="app-content-p">
            <main bind:this={mainElement}>
				<div class="box resp-content-width">
					<div class="boxx">
								<div class="img">
									<img class="svelte-1vm3yrq" src={beatavatar} alt="">
								</div>
								
									<div class="meta-play">
										<div class="metadata">
											<div class="info-title">
												<label for="beatname" class="box-title">{beatname}</label>
												<input type="text" value={beatname} id="beatname" name="beatname" hidden>
											</div>
											<span class="secondary subtitle-group">
											</span>
										</div>
										
										<!-- <em> -->
											<div class="smallie">
												<small class="subtitle">
													<div class="genre">
														{beatgenre}
													</div>
													<div class="bpm">BPM</div>
													{beatbpm}
													<div class="key">
														KEY: {beatkey}                                                    
													</div>
												</small>
											</div>
											<!-- </em> -->
										</div>
									</div>
									
									<div class="info-bar"> </div>
									
								<div class="license-container">
								{#each $licenses as {price, name, files}}
									<form id="paymentForm" on:submit|nonpassive={payWithPaystack}>
										<div class="license">
											<div class="license-name">
												<label for="title" class="license-title">
													{name}
													<input type="text" value={name} hidden name="title" id="title">
												</label>
												<br>
												<label for="files" class="files">
													{files}
													<input type="text" value={files} hidden name="files" id="files">
												</label>
											</div>

											<label for="email">
											</label>
											<input type="email" name="email" id="email-address" bind:value={email} hidden>
											<label for="price">
													<input type="tel" bind:value={paymentAmount} name="paymentAmount" id="amount" hidden>
											</label>
											<div class="buy-btn">
												<button type="submit" class="purchase-btn"> <div class="price"> ₦ {price}</div></button>
											</div>
											<div class="usage-trigger">
												
											</div>
										</div>
									</form>
								{/each}
								
							</div>


				

						</div>
            </main>       
    </div>


	

<style>


.license-container{
	display: flex;
	flex-direction: column;
	padding: 0px 0px;
	width: inherit;
	cursor:default

}

.license{
	display: flex;
	flex-direction: column;
	vertical-align: middle;
	margin-bottom: 10px;
	background: var(--purple-footer-text);
	border-radius: 5px;
	border: #f0f0f018 1px solid;
	padding: 20px;

}


.license-title{

	font-size: 18px;
	font-weight: bolder;
}

.files{
	font-size: 13px;
}

.price{
	font-size: 15px;
	align-self: center;
}


.purchase-btn{
	display: flex;
	align-items: center;
	gap: 10px;
}

button{
	border: none ;
	background: var(--primary-button);
	color: #fff;
	font-weight: 600;
	text-transform: uppercase;
	justify-content: center;
	font-family: inherit;
	padding: 12px 15px;
	border-radius: 4px;
	margin: 10px 0px;
	width: 100%;
	cursor: pointer;
	transition: 0.8s ease;
	z-index: 20;

}

button:hover{
	color: #1f1f1f;
	background: #fff;
}

.usage-trigger{
	color: var(--lt-color-text-very-light);
	font-size: 12px;
	cursor: pointer;
	width: 100%;
	list-style: circle;
}


.bpm{
	display: flex;
	color: #1f1f1f;
	background-color: var(--lt-color-text-very-light) !important;
	font-weight: 900;
	border-radius: 2px;
	height: 10px;
	width: 26px;
	align-items: center;
	justify-content: center;
	align-self: center;
	margin-right: -15px;
}

.spacer{
    padding: 60px;
}

.app-content-p {
	height: 420px;
	overflow-y: scroll;

    
}


main {
    display: block;
	margin: 0;
	padding: 1.25em 0 5vh;
	padding-bottom: 3.3125vh !important;
	position: relative;
	/* transform: translateZ(0); */

}

.box {
	gap: .5rem 1rem;
	
}

.box {
	-webkit-margin-after: 1.3333em;
	background-color: rgba(55,69,82,0);
	/* border-color: #1f1f1f;
	border-radius: .8em;
	border-width: 1px; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	overflow-wrap: break-word;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	margin: auto;
}

.resp-content-width {
	display: flex;
	margin: 0 auto;
	width: clamp(200px, 400px, 100%);
}
.img {
	align-self: center;
	aspect-ratio: 1/1;
	grid-area: "img";
	height: auto;
	max-width: 16rem;
	position: relative;
	width: var(--width);
}

.svelte-1vm3yrq {
	aspect-ratio: inherit;
	border-radius: 2%;
	filter: drop-shadow(0 0 .3rem black);
	height: 193px;
	max-height: inherit;
	max-width: 12.6rem;
	min-height: var(--img-height,inherit);
	-o-object-fit: cover;
	object-fit: cover;
	width: 100%;
}

.metadata {
	word-wrap: unset;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: normal;
	margin-bottom: .333em;
	text-align: center;
}

.box-title{
	display: block;
	/* font-family: CommissionerVariable,sans-serif !important; */
	font-size: 1.5em !important;
	font-weight: 900;
	letter-spacing: 0rem;
	margin: -.5rem 0 .2rem;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap	;
	flex-wrap: nowrap;
    text-transform: uppercase;
}

small{
	display: inline;
    font-size: smaller;
	justify-self: flex-end;
}

.spacer{
    padding: var(--xl-spacing);
}

.subtitle{
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 9px;
	color: var(--primary-text);
	gap: 20px;
	align-items: center;
}

.genre{
	display: flex;
	justify-content: space-between;
    color:var(--primary-text);
    font-size: 1.17em;
    line-height: 5px;
	gap: 50px;
	align-items: center;
}



.info-bar {
	border-bottom: 1px solid rgba(66,66,66,.425);
	display: grid;
	grid-template-columns: [index] 6.25rem 1fr 2.9rem;
	grid-template-rows: 1fr;
	max-width: inherit;
	padding: .8rem 0 .4rem;
	width: 82rem;
    font-size: 12px;
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
.boxx{
	display: contents;
}

}

@media (min-width: 720px){
	.boxx {
		display: inline-flex;
		padding: 40px;
		align-items: center;
		vertical-align: middle;
		

	}
	.box img{
		width: 12rem;
	}
	.metadata{
		padding-left	: 3px;

	}


	.meta-play{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 60px;
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

</style>