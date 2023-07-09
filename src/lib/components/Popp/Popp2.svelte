<script lang="ts">

export let beatname ="";


	let email = "help@gmail.com";
	let paymentAmount ="100000";
	let files = "MP3, WAV and TRACK STEMS";
	let name = "Premium";
    

    /**@param {{ preventDefault: () => void; }} event*/

	let config ={
		key: "pk_test_2c6e05db5ee1b8e9539815da0cd5b8840688dfb7",

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

								<div class="license-container">
									<form id="paymentForm" on:submit|nonpassive={payWithPaystack}>
										<div class="license">
											<input bind:value={beatname} type="text" name="firstName" id="first-name" hidden>
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
												<button type="submit" class="purchase-btn"> <div class="price"> ₦ {paymentAmount}</div></button>
											</div>
											<div class="usage-trigger">
												
											</div>
										</div>
									</form>
								
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