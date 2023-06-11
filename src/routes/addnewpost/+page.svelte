<script>
    import { applyAction, enhance } from "$app/forms";
    import {pb} from '$lib/pocketbase'
    let title = "Add New Post";
    let posttitle = "";
    let body = "";
    let json = "JSON";

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

                <form method="POST" use:enhance={() => {
                    return async ({ result }) =>{
                        pb.authStore.loadFromCookie(document.cookie);
                        await applyAction(result);
                    }
                }}
                >
                    <div class="form">
                        <div class="fields">
                            <p class={posttitle ? 'above' : 'center'}>Post Tile</p>
                            <div class="SB-form-control">
                                <input bind:value={posttitle} type="text" name="title" id="title" placeholder="Post Title">
                            </div>
                        </div>

                        <div class="fields">
                            <p class={body ? 'above' : 'center'}>Post Content</p>
                            <div class="SB-form-control">
                                <input bind:value={body} type="text" name="body" id="body" placeholder="Post Content">
                            </div>
                        </div>
                        
                        <div class="fields">
                            <p class={body ? 'above' : 'center'}>Picture</p>
                            <div class="SB-form-control">
                                <input type="file" name="picture" id="pictrue" placeholder="Picture">
                            </div>
                        </div>
                        
                        <div class="fields">
                            <p class={body ? 'above' : 'center'}>Post Content</p>
                            <div class="SB-form-control">
                                <input bind:value={json} type="text" name="json" id="json" placeholder="json" hidden>
                            </div>
                        </div>

                        
                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                Upload
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
    margin: auto;
}

.app-transition-wrapper {
    justify-content: center;
    contain: content;
    isolation: isolate;
    overflow-y: auto;
    transform: translateZ(0);
    margin: auto 0;
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
	margin: auto;
	max-width: calc(100vw - 2.25em) !important;
}
</style>
