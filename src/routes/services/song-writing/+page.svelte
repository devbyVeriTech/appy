<script>
	let title = "Song Writing"
	import RightButton from "$lib/components/NavButton/RightButton.svelte";
	import LeftButton from "$lib/components/NavButton/LeftButton.svelte";
	import Icon from 'svelte-icons-pack'
	import IoBagAddOutline from "svelte-icons-pack/bs/BsBagPlus"; 

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
								<img src="/image/song-writing.webp" alt="" class="artt">
							</div>

							<div class="d-rest">
								<div class="service-name">
									<h2>{title}</h2>
								</div>

								<div class="service-price">
									<h2>Song writing by a GHOST WRITER </h2>
									<p>(+ any collaborator if necessary)</p>
								</div>

								<div class="service-description">
									<li>Turnaround time: 7 - 14 days</li>
									<li>What we need to get started: Beat if available</li>
									<li>In a case there's no beat: 2 Reference songs</li>
									<li>Free Revisions: Up to 3</li>
									<li>Email files & receipt to: cherrydeeonthebeat@gmail.com</li>
								</div>

								<div class="detailss">
									<a href="https://paystack.com/pay/song-writing">
										<button type="submit" value="order" id="submit" class="details">
											<Icon src={IoBagAddOutline} size='1.2em' color='var(--secondary-text)' />  $1,000.00
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
					<a href="/services/custom-beat-making">

						<button class="left">
							<LeftButton/>
						</button>
					</a>
						<button class="right">
							<RightButton/>
						</button>
				</div>


            </div>
        </main>
    </div>
</div>

<style>

	.detailss{
		display: flex;
		justify-content: center;
		gap: 8px;
	}

	button{
		border-radius: 4px;
	}

	.right{
		background: var(--disabled-form-bg);
		pointer-events: none;
	}

	.left{
		background: var(--purple-button);
	}
	.nav-buttons{
		display: flex;
		margin: 20px;
		gap: 10px;
		justify-content: right;
	}

	.art{
		aspect-ratio: 1/1;
		object-fit: cover;
		display: flex;
		align-self: center;
		justify-content: center;
		width: 320px;
		height: inherit;
		position: auto;
		padding: 0;
		margin: auto;
	}
	
	img{
		aspect-ratio: inherit;
		width: inherit;	
		height: inherit;
		border-radius: 4px;
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
		padding: 0px;
		text-transform: uppercase;
		margin: 0;
	}
	
	.service-name h2{
		font-size: 24px;
		font-weight: 700;
		line-height: 2;
		margin-top: 0;
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
		display: flex;
		align-items: center; 
		gap: 2px;
		margin-top: 10px;
		width: 7.5rem;
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
		background: var(--tertiary-button);
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		font-family: inherit;
		color: var(--secondary-text);
	}
	
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

		.detailss{
			justify-content: flex-start;
		}
	}
	</style>