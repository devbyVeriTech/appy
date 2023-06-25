<script>
	let title = "Services"
	import {services} from "$lib/components/services.js";
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
				<div class="spacer"></div>
				<div class="spacer"></div>


                <div class="page-title">
					<h1>{title}</h1>
				</div>

				<div class="d-container">
				{#each $services as service }

					<div class="services-container">
						<div class="services">
							<div class="art">
								<img src="{"./image/"+service.image}" alt="" class="artt">
							</div>
							<div class="service-name">
								<h2>{service.name}</h2>
							</div>

							<div class="service-price">
								{service.price}
							</div>

							<div class="service description">
								{service.description}
							</div>

							<div class="detailss">
								<a href="{service.url}">
									<button type="submit" value="order" id="submit" class="details">
										Details
									</button>
								</a>
							</div>
						</div>
					</div>
					{/each}
				</div>


            </div>
        </main>
    </div>
</div>

<style>

.art{
	aspect-ratio: 1/1;
	object-fit: cover;
	display: flex;
	align-self: center;
	justify-content: center;
	width: 100%;
	height: inherit;
	position: auto;
	padding: 0;
	margin: 0;
}

img{
	aspect-ratio: inherit;
	width: inherit;	
	height: inherit;
	border-radius: var(--xs-radius);
}

.d-container{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}


.services-container{
	display: flex;
	padding: 20px;
	justify-content: center;
	text-align: center;
	margin: 0px 30px;
}

.services{
	/* border: 1px solid var(--lt-color-border-light); */
	width: 240px;
}

.service-name{
	/* background: var(--lt-color-background-dark); */
	padding: 0px;
	text-transform: uppercase;
	margin: 0;
}

.service-name h2{
	font-size: 18px;
	font-weight: 700;
	line-height: 1.5;
}


.details{
	margin-inline: auto;
	margin-top: 5px;
	padding: 10px;
	width: 5.7rem;
	border-radius: var(--xs-radius);
}

button{
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: none;
	outline: none;
	background: var(--tertiary-button);
	font-size: 13px;
	font-weight: 700;
	text-transform: uppercase;
	font-family: inherit;
	color: var(--secondary-text);
	height: 40px;
}





.page-title{
	display: flex;
	align-items: center;
	justify-content: center;
}

.app-content-p {
	display: grid;
}

.app-transition-wrapper {
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
	transform: translateZ(0);
}

.box {
	gap: .5rem 1rem;
	grid-template-areas: "img img" "metadata metadata" "buttons buttons ";
	grid-template-columns: 1fr;
}

.box {
	-webkit-margin-after: 1.3333em;
	background-color: rgba(55,69,82,0);
	/* border-color: #1f1f1f;
	border-radius: .8em;
	border-width: 1px; */
	display: grid;
	gap: .5rem 1.25rem;
	grid-template-areas: "img" "metadata" "buttons" "metaplay";
	grid-template-columns: 1fr;
	max-width: 100%;
	overflow-wrap: break-word;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	width: auto;
}

.resp-content-width {
	margin: 0 auto;
	max-width: calc(100vw - 2.25em) !important;
}

</style>