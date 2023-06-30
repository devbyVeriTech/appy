<script>
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
              config.email = $currentUser.email, email;
              // @ts-ignore
              config.amount = parseFloat(paymentAmount)*100;
        
              // @ts-ignore
              let handler = PaystackPop.setup(config);
              handler.openIframe();
            };
</script>

<svelte:head>
  <script src="https://js.paystack.co/v1/inline.js"></script>
</svelte:head>

<form id="paymentForm" on:submit|nonpassive={payWithPaystack}>
  
  
  <div class="form-group">
    
    <label for="email">Email Address</label>
    
    {#if $currentUser}
      <input type="email" id="email-address" bind:value={$currentUser.email} required />
      {:else}
      <input type="email" id="email-address" bind:value={email} required />
    {/if}
    </div>
    
    <div class="form-group">
      
      <label for="amount">Amount</label>
  
      <input type="tel" id="amount" bind:value={paymentAmount} required />
      
    </div>
    
    <div class="form-group">
  
      <label for="first-name">First Name</label>
  
      <input type="text" id="first-name" bind:value={firstName} />
      
    </div>
    
    <div class="form-group">
  
      <label for="last-name">Last Name</label>
  
      <input type="text" id="last-name" bind:value={lastName} />
  
    </div>
  
    <div class="form-submit">
  
      <button type="submit"> Pay </button>
      
    </div>
  
      
  </form>
  
  