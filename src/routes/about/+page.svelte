<script>
    let title = "About";
    let producer = "Cherrydee";
    let slug = "Nigerian Record Producer";
</script>

<svelte:head>
    <title>
        {title} | Cherrydee Beatstore
    </title>
    <meta name="description" content="Cherrydee Biography, who is cherrydee, about cherrydee, cherrydee, cherrydee producer">
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

                <div class="picture">
                    <img src="/image/my-picture.jpg" alt="Cherrydee" class="my-picture">
                </div>

                <div class="heading">
                    <div class="biography">
                        <h1>{producer} Biography</h1>
                        <p>{slug}</p>
                    </div>
                </div>

                <div class="content">
                    <!-- content -->
                </div>
                
            </div>
        </main>
    </div>
</div>

<style>

.heading, .content{
    padding-top: 15px;
}

.biography{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;    
    line-height: 0;
}

.biography p{
    display: flex;
    justify-content: center;
    font-size: 12px;
}

.biography h1{
    display: flex;
    justify-content: center;
    font-size: 20px;
}

.picture{
    display: flex;
    justify-content: center;
    width: 11rem;
    height: 11rem;
    margin: auto;
}

.my-picture{
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
}

img{
    aspect-ratio: 1/1;
    width: inherit;
    height: inherit;
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

.spacer{
    padding:    10px;
}
</style>