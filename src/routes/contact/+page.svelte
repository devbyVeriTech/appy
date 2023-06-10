<script>
    let title = "Contact";
    let name = "";
    let email =""
    let subject = "";
    let message = "";
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

            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>

                <form action="">
                    <div class="form">
                        <div class="fields">
                            <p class={name ? 'above' : 'center'}>YOUR NAME</p>
                            <input bind:value={name} type="text" name="name" id="name" placeholder="YOUR NAME">
                        </div>

                        <div class="fields">
                            <p class={email ? 'above' : 'center'}>E-MAIL ADDRESS</p>
                            <input bind:value={email} type="email" name="email" id="email" placeholder="E-MAIL ADDRESS">
                        </div>
                        
                        <div class="fields">
                            <p class={subject ? 'above' : 'center'}>SUBJECT</p>
                            <input bind:value={subject} type="text" name="subject" id="subject" placeholder="SUBJECT">
                        </div>

                        <div class="fields">                        
                            <p class={message ? 'above' : 'center'}>MESSAGE</p>
                            <input bind:value={message} type="text" name="message" id="message" placeholder="MESSAGE">
                        </div>
                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
</div>

<style>

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
    background: var(--yellow-button);
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
    color: #fff;
    font-family: 'Poppins', sans-serif; 
    transition: 0.5s ease;
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
