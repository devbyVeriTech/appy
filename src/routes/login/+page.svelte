<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import {pb} from '$lib/pocketbase'
  export let form;
  import { fade } from 'svelte/transition';
  import Icon from "svelte-icons-pack";
  import FaBrandsGoogle from "svelte-icons-pack/fa/FaBrandsGoogle";
  import BsArrowRight from "svelte-icons-pack/bs/BsArrowRight";
  import IoEyeSharp from "svelte-icons-pack/io/IoEyeSharp";
  import FaSolidEyeSlash from "svelte-icons-pack/fa/FaSolidEyeSlash";
  import TiWarningOutline from "svelte-icons-pack/Ti/TiWarningOutline";
 

    let title = "Login";
    let username = "";
    let email ="";
    let country = "";
    let phone = "";
    let password = "";
    let confirmpass = "";
    let hidePassword = true;

    
</script>

<svelte:head>
	<title>
		{title} | Cherrydee Beatstore
	</title>
</svelte:head>

<div class="app-content-p">
    <div class="app-transition-wrapper">
        <main>
            <div class="box resp-content-width">

                <div class="space20"></div>
                <div class="page-title">
                    <h1 class="ng">
                        {title}
                    </h1>
                </div>
                <div class="space20"></div>

                <form method="POST" use:enhance={() => {
                    return async ({ result }) =>{
                        pb.authStore.loadFromCookie(document.cookie);
                        await applyAction(result);
                    }
                }}
                >
                    <div class="form">

                    {#if form?.notVerified}
                        <div class="verificationwarning" transition:fade={{duration:400}}>
                            <Icon src={TiWarningOutline} color='#fff' size='1.7em'/>
                            <span>You must verify your email address</span>
                        </div>
                    {/if} 
                    
                    {#if form?.notCreated}
                        <div class="verificationwarning" transition:fade={{duration:400}}>
                            <Icon src={TiWarningOutline} color='#fff' size='1.7em'/>
                            <span>You must create an account first</span>
                        </div>
                    {/if}
    

                        <div class="fields">
                            <p class={email ? 'above' : 'center'}>USERNAME or E-MAIL ADDRESS</p>
                            <div class="SB-form-control">
                                <input 
                                    bind:value={email} 
                                    type="text" 
                                    name="email"
                                    placeholder="USERNAME or E-MAIL ADDRESS"
                                    required
                                    >
                            </div>
                        </div>
          
                        <div class="fields">
                            <p class={password ? 'above' : 'center'}>PASSWORD</p>
                            <div class="SB-form-control">
                                <input 
                                    value={password} 
                                    type={`${hidePassword ? "password" : "text"}`} 
                                    name="password" 
                                    id="password" 
                                    placeholder="PASSWORD"
                                    required
                                    >
                                    
                                    {#if hidePassword}
                                        <button
                                            class="hide-password"
                                            on:click={() => (hidePassword = false)}
                                            >
                                            <Icon src={IoEyeSharp} color='#fff' size='1.4em'/>
                                        </button>
                                        {:else}
                                        <button
                                            on:click={() => (hidePassword = true)}
                                            class="hide-password"
                                            >
                                            <Icon src={FaSolidEyeSlash} color='#fff' size='1.4em'/>
                                        </button>
                                    {/if}
                            </div>

                        </div>
                        
                        <div class="forgot-pass">
                            <a href="reset-password">
                                I forgot my password
                            </a>
                        </div>

                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                    LOGIN
                                <div class="arro">
                                    <Icon src={BsArrowRight} color='white' size="1.6em"/>
                                </div>
                            </button>
                        </div>

                        <div class="new">
                            Don't have an account yet? 
                            <a href="/signup">Signup Here</a>
                        </div>


                        <div class="sep">
                            <div class="leftline"></div>
                            <div class="or">
                                or
                            </div>
                            <div class="rightline"></div>
                        </div>

                        <div class="google">
                            <button name="button" type="submit" value="submit">
                                <Icon src={FaBrandsGoogle} color='white' size="1.3em"/>
                                    Sign in with Google
                            </button>
                        </div>
                            
                    </div>
                </form>
            </div>
        </main>
    </div>
</div>

<style>

.hint{
    color: var(--purple-footer-text);
    font-size: 12px;
}

button.hide-password{
    border: none;
    background: transparent;
}

.sep{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.or{
    padding: 0 20px;
    font-size: 15px;
}

.leftline{
    height: 1px;
    width: 50%;
    background-color: #3f2755;
}
.rightline{
    height: 1px;
    width: 50%;
    background-color: #3f2755;
}

.SB-form-control {
	display: flex;
	border: 1px solid #3f2755;
	border-radius: 3px;
	overflow: hidden;
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

.verificationwarning{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 550;
    background: var(--purple-button);
    border: 1px solid #ffffff33;
    padding: 10px;
    border-radius: 4px;
    color: #fff;
}

.forgot-pass{
    margin-top: 20px;
    margin-bottom: -10px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: bold;
}

.forgot-pass a:hover{
    text-decoration: underline;
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

.new{
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
}
.new a{
    color: #f98903;
    font-weight: bold;
}

.button{
    padding-top: 35px;
    justify-content: flex-end;
}
.button button{
    height: 42px;
    font-size: 15px;
    font-weight: 700;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
    background: var(--yellow-button);
}

.arro{
    display: none;
}

.arro:hover{
    display: flex;
}

.google button{
    height: 42px;
    font-size: 15px;
    font-weight: 550;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    border-radius: 0.3rem;
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: var(--yellow-button);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    gap: 10px;
    border: 1px solid #f98903;

}

button{
    cursor: pointer;
}
.fields{
    display: flex;
    flex-direction: column;
}

input{
    display: block;
    background: transparent;
    border: none;
    width: 100%;
    font-size: 12px;
    height: 38px;
    padding: 10px;
    outline: none;
    color: #fff;
    font-family: 'Poppins', sans-serif; 
    transition: 0.5s ease;
}

input:focus{
    border-bottom: 2px solid #3f2755;
}

input::placeholder{
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s ease;
}

.page-title{
    display: flex;
    justify-content: center;
}
.page-title h1{
    font-size: 25px;
    font-weight: 700;
    margin: auto;

}

.app-content-p {
	display: grid;
}

.app-transition-wrapper {
    justify-content: center;
    contain: content;
    isolation: isolate;
    overflow-y: auto;
    transform: translateZ(0);
}

main {
    display: block;
	margin: 0 auto;
	padding: 1.25em 0 5vh;
	padding-bottom: 3.3125vh !important;
	position: relative;
    justify-content:  center;
	transform: translateZ(0);

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
	gap: .5rem 1.25rem;
	max-width: 100%;
	user-select: none;
	width: auto;
}

.resp-content-width {
	margin: 0 auto;
	max-width: calc(100vw - 2.25em) !important;
}
</style>
