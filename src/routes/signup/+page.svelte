<script>
    import { applyAction, enhance } from "$app/forms";
    import {pb} from '$lib/pocketbase'
    let title = "Signup";
    let name = "";
    let email =""
    let country = "";
    let phone = "";
    let password = "";
    let confirmpass = "";
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

                <div class="already">
                    <a href="/login">
                        Already have an account
                    </a>
                </div>

                <form method="POST" use:enhance={() => {
                    return async ({ result }) =>{
                        pb.authStore.loadFromCookie(document.cookie);
                        await applyAction(result);
                    }
                }}
                >
                    <div class="form">
                        <div class="fields">
                            <p class={name ? 'above' : 'center'}>USERNAME</p>
                            <div class="SB-form-control">
                                <input bind:value={name} type="text" name="username" id="username" placeholder="USERNAME" required>
                            </div>
                        </div>

                        <div class="fields">
                            <p class={email ? 'above' : 'center'}>E-MAIL ADDRESS</p>
                            <div class="SB-form-control">
                                <input 
                                    bind:value={email} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="E-MAIL ADDRESS" 
                                    required>
                            </div>
                        </div>

                        <div class="fields">                        
                            <p class={country ? 'above' : 'center'}>COUNTRY</p>
                            <div class="SB-form-control">
                                <input bind:value={country} type="text" name="country" id="country" placeholder="COUNTRY" required>
                            </div>
                        </div>
                        
                        <div class="fields">                        
                            <p class={phone ? 'above' : 'center'}>MOBILE NUMBER</p>
                            <div class="SB-form-control">
                                <input bind:value={phone} type="tel" name="mobileNumber" id="phone" placeholder="MOBILE NUMBER">
                            </div>
                        </div>
                        
                        <div class="fields">
                            <p class={password ? 'above' : 'center'}>PASSWORD</p>
                            <div class="SB-form-control">
                                <input 
                                    bind:value={password} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="PASSWORD" 
                                    required>
                                </div>
                                <!-- pattern="[a-zA-Z0-9]" -->
                            <div class="hint" style="color: {password? "" : "#fff"};">
                                <ul>
                                    <li>
                                        password must be at least 8 characters long
                                    </li>
                                    <li>
                                        password must contain at least 1 numerical character
                                    </li>
                                    <li>
                                        passowrd must contain at least 1 special character[@ : ; / % #]
                                    </li>
                                    <li>
                                        password must contain at least 1 UPPERCASE alphabet
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="fields">                        
                            <p class={confirmpass ? 'above' : 'center'}>CONFIRM PASSWORD</p>
                            <div class="SB-form-control">
                                <input bind:value={confirmpass} type="password" name="passwordConfirm" id="confirmpass" placeholder="CONFIRM PASSWORD" required>
                            </div>
                        </div>

                        
                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                REGISTER
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
    margin: 15px 0 0;
    border-radius: 5px;
    padding: 10px 5px;
    background-color: var(--purple-footer);
    color: var(--purple-footer-text);
    font-size: 12px;
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

.already{
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
}
.already a{
    color: #f98903;
    font-weight: bold;
}

.button{
    padding-top: 35px;
    display: flex;
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
    background: var(--yellow-button);
}

.fields{
    display: flex;
    flex-direction: column;
}

input{
    display: block;
    background: transparent;
    color: var(--primary-text);
    border: none;
    width: 100%;
    font-size: 12px;
    height: 38px;
    padding: 10px;
    outline: none;
    font-family: 'Poppins', sans-serif; 
    transition: 0.5s ease;
}

input:focus{
    border-bottom: 2px solid #3f2755;
}

input::placeholder{
    color: var(--primary-text);
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
