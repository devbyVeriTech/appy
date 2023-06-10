<script>
    import { applyAction, enhance } from "$app/forms";
    import {pb} from '$lib/pocketbase'
    let title = "Login";
    let email ="";
    let password = "";



    let show_password = false
    $: type = show_password ? 'text' : 'password'
    let value = '';
        
    function onInput (event) {
        value = event.target.value
        if (show_password == "true") {
            document.getElementById("hide")
        }

        else {
            document.getElementById("show")
        }

        // if (show_password == "true"){
		// 	document.getElementsByClassName("fa-eye-slash")[0]; return
		// } else {
		// 	document.getElementsByClassName("fa-eye");
		// }
    }

		

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

                <div class="spacer"></div>
                <div class="page-title">
                    <h1 class="ng">
                        {title}
                    </h1>
                </div>

            <div class="space20"></div>
            <div class="space20"></div>
            <div class="space20"></div>
            <div class="space20"></div>
            <div class="space20"></div>
            <div class="space20"></div>

                <form method="POST" use:enhance={() => {
                    return async ({ result }) =>{
                        pb.authStore.loadFromCookie(document.cookie);
                        await applyAction(result);
                    }
                }}
                >
                    <div class="form">
                        <div class="fields">
                            <p class={email ? 'above' : 'center'}>E-MAIL ADDRESS</p>
                            <div class="SB-form-control">
                                <input bind:value={email} type="email" name="email" id="email" placeholder="E-MAIL ADDRESS">
                            </div>
                        </div>
                        
                        <div class="fields">
                            <p class={password ? 'above' : 'center'}>PASSWORD</p>
                            <div class="SB-form-control">
                                <input {value} { type } name="password" id="password" placeholder="PASSWORD" {...$$restProps} on:input={ onInput }>
                                    <span class="normal" on:click="{ () => show_password = !show_password }">{show_password ? '' : ''}
                                            <i class="fa-solid fa-eye fa-sm" id="hide"></i>
                                    </span>
                            </div>
                            <!-- <button type="button" on:click="{ () => show_password = !show_password }">{show_password ? 'Hide' : 'Show'}</button> -->
                        </div>

                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
</div>

<style>

.SB-form-control {
	display: flex;
    flex: 1;
	border: 1px solid #3f2755;
	border-radius: 3px;
	overflow: hidden;
}

.normal{
    display: flex;
    min-width: 37px;
    height: 100%;
    text-align: center;
    height: 2.4em;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-weight: 500;
    padding: 0 5px;
    cursor: pointer;
    background-color: #3f2755;
}

.fa-eye, .fa-eye-slash{
    right: 0;
    margin: auto;
    margin-right: 0;
    top: 50;
    transform: translateY(0%);
    padding-right: 5px;
    width: 18px;
    min-width: 18px;
    max-width: 18px;
    height: 18px;
    min-height: 18px;
    max-height: 18px;

}

.fa-eye{
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
    /* justify-content: flex-end; */
}
.button button{
    height: 38px;
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
    background: var(--yellow-button);
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
    font-size: inherit;
    font-weight: 600;
    transition: 0.5s ease;
    text-transform: capitalize;
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
    max-height: 100dvh;

}

.box {
	gap: .5rem 1rem;
}

.box {
	-webkit-margin-after: 1.3333em;
	background-color: rgba(55,69,82,0);
	border-color: #1f1f1f;
	border-radius: .8em;
	border-width: 1px;
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
