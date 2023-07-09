<script>
  import { currentUser } from "$lib/pocketbase";

    let email = "";
    let paymentAmount = "";
    let firstName = "";
    let lastName = "";

    /**@param {{ preventDefault: () => void; }} event*/
    
    let config = {

        key: 'pk_test_2c6e05db5ee1b8e9539815da0cd5b8840688dfb7',

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
</svelte:head>

<form id="paymentForm" on:submit|nonpassive={payWithPaystack}>
  
        
      <!-- <label for="email">Email Address</label> -->
      
      
      <div class="form">
        <div class="fields">
          <p class={email ? 'above' : 'center'}>YOUR EMAIL</p>
          {#if $currentUser}
          <input bind:value={$currentUser.email} type="email" name="name" id="email-address" placeholder="YOUR EMAIL">
          {:else}
            <input bind:value={email} type="email" name="name" id="email-address" placeholder="YOUR EMAIL">
          {/if}
      </div>

      <div class="fields">
          <p class={paymentAmount ? 'above' : 'center'}>AMOUNT</p>
          <input bind:value={paymentAmount} type="tel" name="paymentAmount" id="amount" placeholder="AMOUNT">
      </div>
      
      <div class="fields">
          <p class={firstName ? 'above' : 'center'}>FIRST NAME</p>
          <input bind:value={firstName} type="text" name="firstName" id="first-name" placeholder="FIRST NAME">
      </div>

      <div class="fields">                        
          <p class={lastName ? 'above' : 'center'}>LAST NAME</p>
          <input bind:value={lastName} type="text" name="lastName" id="last-name" placeholder="LAST NAME">
      </div>
      <div class="button">
        <button type="submit"> Pay </button>
      </div>
  </div>

<!-- 
  <div class="wad">

    <div class="menu">
      <button name="select" id="select" class="but">click
      </button>
      
      <div class="pan">
        <li>Heyloou</li>
        <li>Heyloou</li>
        <li>Heyloou</li>
        <li>Heyloou</li>
      </div>
    </div>
    <div class="menu">
      <button name="select" id="select" class="but">click
      </button>
      
      <div class="pan">
        <a href="/let">Heyloou</a>
        <a href="/let">Heyloou</a>
        <a href="/let">Heyloou</a>
        <a href="/let">Heyloou</a>
      </div>
    </div>
  </div> -->



  
      
  </form>
  
  <style>

    .wad{
      display: flex;
      gap: 300px;
    }

.menu{
  position: relative;
  
}

.pan{
  position: absolute;
  top: 100%;
  opacity: 0;
  border: 1px solid var(--form-border);
  padding: 10px;
  border-radius: 4px;
  transform: translateY(-20px);
  transition: opacity 150ms ease, transform 150ms ease;
  pointer-events: none;
  list-style: none;
}

.menu > .but:focus + .pan{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

form{
  padding-inline: 20px;
}

.above,
.center{
    /* position: absolute; */
    transform: translateY(10%);
    pointer-events: none;
    transition: 0.3s ease;
}

.above{
    top: 50;
    left: 10px;
    padding: 0 2px;

}

.center{
    top: 50%;
    left: 6px;
    opacity: 0;
}

.form{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 0px 10px;
    justify-content: center;
    margin: auto;
    
}
.form p{
    font-size: 10px;
    font-weight: 600;
}

.button{
    padding-top: 55px;
    display: flex;
    justify-content: flex-end;
}
.button button{
    height: 52px;
    font-size: 15px;
    padding: 15px;
    font-weight: 700;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 0.3rem;
    background: var(--primary-button);
    color: #fff;
}

.fields{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

input{
    display: block;
    background: transparent;
    border: none;
    border-bottom: .14em solid #3f2755;
    outline: none;
    color: var(--primary-text);
    font-family: 'Poppins', sans-serif; 
    transition: 0.5s ease;
}

input:focus{
  border-bottom: .14em solid var(--primary-text);
}

input::placeholder{
    color: var(--primary-text);
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s ease;
}

  </style>