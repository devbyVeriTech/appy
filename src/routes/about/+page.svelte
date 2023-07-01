<script>
    let title = "About";
    let producer = "Cherrydee";
    let slug = "Nigerian Record Producer";
    import { socialLinks } from "$lib/components/socialLinks";
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
                    <img src="/image/my-picture.webp" alt="Cherrydee" class="my-picture">
                </div>

                <div class="heading">
                    <div class="biography">
                        <h1>{producer} Biography</h1>
                        <p>{slug}</p>
                    </div>
                </div>

                <div class="content">
                    <!-- content -->


                    <div class="social-media">
                        {#each $socialLinks as link}
                            <a href={link.url}>
                                <div class="icons">
                                    <img src="./{link.image}" alt="" style="height: {link.size};"> 
                                    <div class="social-name">
                                        {link.name}
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>

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

.social-media{
    width: 100%;
}

.icons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    flex-direction: row;
    padding: 0px 20px;
    gap: 20px;
    margin-bottom: 10px;
    border: 1px solid var(--form-border);
    border-radius: 4px;
    height:40px;
}

.social-name{
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 550;
}

.icons img{
    width: 40px;
    max-height: 40px;
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

.spacer{
    padding:    10px;
}

@media (min-width:1100px){
    .social-media{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
    }

    .icons{
        width: fit-content;
    }
}
</style>