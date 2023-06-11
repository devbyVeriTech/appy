<script>
	let title = "Custom Beat Making"
	import RightButton from "$lib/components/NavButton/RightButton.svelte";
  	import LeftButton from "$lib/components/NavButton/LeftButton.svelte";
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


				<div class="d-container">					
					<div class="services-container">
						<div class="services">
							<div class="art">
								<img src="/image/custom-beats.webp" alt="" class="artt">
							</div>

							<div class="d-rest">
								<div class="service-name">
									<h2>{title}</h2>
								</div>

								<div class="service-price">
									<h2>Custom Beat by CHERRYDEE </h2>
									<p>(+ any collaborator if necessary)</p>
								</div>

								<div class="service-description">
									<li>Turnaround time: 10 - 15 days</li>
									<li>What we need to get started: 2 Reference tracks</li>
									<li>Free Revisions: Up to 4</li>
									<li>Email files & receipt to: cherrydeeonthebeat@gmail.com</li>
								</div>

								<div class="detailss">
									<a href="/">
										<button type="submit" value="order" id="submit" class="details">
											<i class="fa fa-shopping-bag"></i>  $500.00
										</button>
									</a>
									<a href="/">
											<button type="submit" value="share" id="share" class="share">
												<i class="fa fa-share-nodes"></i>
											</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="nav-buttons">
					<a href="/services/mixing-and-mastering">
						<button class="left">
							<LeftButton/>
						</button>
					</a>
					<a href="/services/song-writing">
						<button class="right">
							<RightButton/>
						</button>
					</a>
				</div>


            </div>
        </main>
    </div>
</div>

<style>

	.nav-buttons{
		display: flex;
		margin: 20px;
		gap: 10px;
		justify-content: right;
	}


	button{
		border-radius: 4px;
	}

	.left{
		background: var(--purple-button);
	}
	
	.right{
		background: var(--purple-button);
	}



	.art{
		justify-content: center;
		aspect-ratio: 1/1;
		object-fit: cover;
		display: flex;
		align-self: center;
		width: 320px;
		height: inherit;
		position: auto;
		padding: 0;
		margin: auto;
	}
	
	img{
		display: flex;
		justify-content: center;
		aspect-ratio: inherit;
		width: inherit;	
		height: inherit;
		border-radius: 4px;
		margin: auto;
	}
	
	.d-container{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	
	.services-container{
		display: flex;
		justify-content: center;
		text-align: center;
		margin: 0px 30px;
	}
	
	/* .services{
		border: 1px solid var(--lt-color-border-light);
		min-width: 250px;
		width: 100%;
	} */
	
	.service-name{
		/* background: var(--lt-color-background-dark); */
		color: var(--lt-color-white);
		padding: 0px;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: -15px;
	}
	
	.service-name h2{
		font-size: 24px;
		font-weight: 700;
		line-height: 2;
		margin-top: 0;
	}

	.service-price{
		line-height: 0.3rem;
	}
	.service-price h2{
		font-size: 15px;
		}
	.service-price p{
		font-size: 11px;
		font-weight: 600;
		}
	
	.service-description{
		padding-top: 12px;
		list-style: none;
		font-size: 13px;
		font-weight: 500;
		margin-bottom: 5px;
	}
	
	.details{
		margin-top: 10px;
		width: 7rem;
		border-radius: var(--xs-radius);
		height: 40px;
		line-height: 40px;
		margin: 0;
		padding: 0 16px;
		min-height: auto !important;
		min-width: auto !important;
		text-shadow: none;
		font-weight: 600 !important;
		border-radius: 3px;
		overflow: hidden;
		-webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		-moz-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		-ms-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		
	}
	
	.share{
		margin-top: 10px;
		width: fit-content;
		border-radius: var(--xs-radius);
		height: 40px;
		line-height: 40px;
		margin: 0;
		padding: 0 16px;
		min-height: auto !important;
		min-width: auto !important;
		text-shadow: none;
		font-weight: 600 !important;
		border-radius: 3px;
		overflow: hidden;
		-webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		-moz-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		-ms-box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
		box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
	}
	
	button{
		cursor: pointer;
		border: none;
		outline: none;
		background: var(--lt-color-background-default);
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		font-family: inherit;
	}
	
	
	
	

	
	/* .app-content-p {
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
		border-color: #1f1f1f;
		border-radius: .8em;
		border-width: 1px;
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
	} */

	.spacer{
		padding: 10px;
	}

	@media (min-width:960px) {
		.d-rest	{
			display: flex;
			flex-direction: column;
			text-align: left;
			-webkit-box-flex: 1;
			-webkit-flex: 1 1 100%;
			flex: 1 1 100%;
			box-sizing: border-box;
			max-width: 75%;
			max-height: 100%;
		}

		.services{
			display: flex;
			padding-top: 40px;
		}

		.art {
			margin-right: 49px;
			width: 400px
		}

		.artt {
			width: 100%;
			height: auto;
			display: block;
			border-radius: 3px;
		}

		.service-name h2{
			font-size: 28px;
			font-weight: 700;
			line-height: 2;
			margin-top: 0;
		}
		
	}
	</style>