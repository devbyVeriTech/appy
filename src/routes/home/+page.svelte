<script>
	import {onMount} from "svelte";
	import {musicList} from "$lib/components/musiclist.js"
	import License from "$lib/components/License/License.svelte";
	import BottomPlayer from "$lib/components/BottomPlayer/BottomPlayer.svelte";
	import Toggle from "$lib/components/Toggle/Toggle.svelte";
  	import Popp from "$lib/components/Popp/Popp.svelte";
	import Icon from 'svelte-icons-pack'
	import IoBagAddOutline from "svelte-icons-pack/bs/BsBagPlus"; 
	import IoEllipsisVertical from "svelte-icons-pack/io/IoEllipsisVertical"; 
	import { fly } from "svelte/transition";
	import Radial from "$lib/components/Radial/design.svelte"
	import BsPlayCircleFill from "svelte-icons-pack/bs/BsPlayCircleFill";
	import BsPauseCircleFill from "svelte-icons-pack/bs/BsPauseCircleFill";
	import FaSolidStepBackward from "svelte-icons-pack/fa/FaSolidStepBackward";
    import FaSolidStepForward from "svelte-icons-pack/fa/FaSolidStepForward";





	import { Modal, Content, Trigger}  from "sv-popup"
	import Purchase from "$lib/components/Purchase/Purchase.svelte"
  import ContactForm from "$lib/components/ContactForm/ContactForm.svelte";


	// import store from "../components/store/store"
	
	
	
    
	let currentSongIndex = 0;
	let playerState ="pause";
	let audioElement ;
	let mainElement ;

	onMount (function(){

	})

	function setSong(i){
		currentSongIndex = i;
		playerState = "play";
	}


	function playpause() {
		if (playerState == "play"){
			playerState = "pause";
			audioElement.pause();
		} else {
			playerState = "play";
			audioElement.play();
		}
	}

	
	function prev() {
		if (currentSongIndex == 0) {
			currentSongIndex = (currentSongIndex - 0) % $musicList.length;
		} else{
			currentSongIndex = (currentSongIndex - 1) % $musicList.length;
		}
		playerState = "play";
	}
	function next() {
			currentSongIndex = (currentSongIndex + 1) % $musicList.length;
			playerState = "play";
	}



</script>
<svelte:head>
	<title>
		Cherrydee Beatstore
	</title>
</svelte:head>

<div class="nospacer"></div>
    <div class="app-content-p">
        <div class="app-transition-wrapper"></div> 
            <main bind:this={mainElement} >
				<audio src={"./audio/"+$musicList[currentSongIndex].audio}
					bind:this={audioElement} autoplay="false">
				</audio>
                <div class="boxxx resp-content-width">
						
						<div class="boxx">
							<div 
							class="img" 
								in:fly={{x:-200, duration:300, delay:300}}
								out:fly={{x:200, duration:300}}>
								<img class="svelte-1vm3yrq" src={"./image/"+$musicList[currentSongIndex].image} alt="{$musicList[currentSongIndex].name}">
						</div>
						
					<div class="meta-play">
						<div class="metadata">
							<div class="space20"></div>
							<span class="secondary subtitle-group">
								<small class="subtitle">
									<div class="genre">
										{$musicList[currentSongIndex].bpm} BPM
									</div>
								</small>
							</span>
							<div class="info-title">
								<span class="box-title">{$musicList[currentSongIndex].name}</span>
							</div>
							<p class="secondary-subtitle"></p>
						</div>

                    
							<div class="button-group">
								{#each $musicList[currentSongIndex].tag as tag}
								<button type="button" class="button outlined tag-btn">
										{tag}
									</button>
									{/each}
									
									<br>
								<button type="button" class="button outlined">
									{$musicList[currentSongIndex].genre}
								</button>
								
							</div>
						
							<div class="spacer"></div>

							<div class="button-group">
								<Modal>
									<Content>
										<div class="modal-back">
											<div class="hea">
												<slot name="header">Licenses</slot>
											</div>
											<Popp 
												beatname={$musicList[currentSongIndex].name}
												beatavatar={"./image/"+$musicList[currentSongIndex].image}
												beatbpm={$musicList[currentSongIndex].bpm}
												beatkey={$musicList[currentSongIndex].key}
												beatgenre={$musicList[currentSongIndex].genre}/>
												
										</div>
									</Content>
									  
									<Trigger>
									  <button class="pay-button">
										<Icon src={IoBagAddOutline} size='1.2em' color='white' />
										  $45.00
									  </button>
									</Trigger>
								  </Modal>
										<button type="button" class="pay-button">
											<Icon src={IoEllipsisVertical} size='1.2em' color='white' />
										</button>

									</div>

								</div>
								<!-- <div class="wave">

								</div> -->
				</div>

				<div class="radial">
					<Radial/>
				</div>

				
				<!-- <div id="d3-bg-overlay">
					<div id="d3-bg-overlay-visualizer"></div>
					<div id="d3Container" playlist-control="reinitializeVisualizer" class="ng-isolate-scope">
						<canvas id="visualizerCanvas" width="790" height="90"></canvas>
					</div>
				</div> -->
				


                    <div class="info-bar">
                        <!-- <span class="index">#</span> 
                        <span class="title">Title</span> 
                        <span class="clock">
                            <i class="fa-regular fa-clock fa-xs"></i>
                        </span> -->
                    </div>

				{#each $musicList as music, i}
					
					<div class="list">
						<div class="{i==currentSongIndex ? "active":""}"
					on:click="{()=>setSong(i)}"
					>
						<article class="m-item">
                            <div class="metaplay">
								<!-- <div class="tracknum">
									{music.id}
								</div> -->
                                <div class="thumbnail">
                                    <img class="thumnb" src={"./image/"+music.image}>
                                </div>
                                <div class="column">
                                    <span class="titleplay">
                                        {music.name}
                                    </span>

                                    <div class="artist second">
                                        <!-- {music.artist} -->
                                    </div>
                                </div>

								<div class="time">
									2:53
								</div>

								<div class="bpehm">
									{music.bpm}
								</div>

								<div class="taggg">
									{#each music.tag as tagg}
										<button type="button" class="button outlined tag-btn">
											{tagg}
										</button>
									{/each}
								</div>

                            <div class="length">
                                <div class="d-button" role="button" aria-label="menu" tabindex="0">
											<Modal>
												<Content>
													<div class="modal-back">
														<div class="hea">
															<slot name="header">Licenses</slot>
														</div>
														<Popp 
															beatname={$musicList[currentSongIndex].name}
															beatavatar={"./image/"+$musicList[currentSongIndex].image}
															beatbpm={$musicList[currentSongIndex].bpm}
															beatkey={$musicList[currentSongIndex].key}
															beatgenre={$musicList[currentSongIndex].genre}/>
															
													</div>
												</Content>
												  
												<Trigger>
													<div class="open-button btnpad" >
														<Icon src={IoBagAddOutline} size='1.2em' color='white' className="custom" />
				
														<div class="buy-wide">
															$45.00
														</div> 
													</div>
												</Trigger>
											</Modal>
                                </div>
                            </div>

                            </div>


							
                        </article>
                    </div>
				</div>
				<div class="divider"></div>
				{/each}
				
				<div class="view-all">
					<a href="/tracks">
						<button class="pay-button">
							  view all beats
						  </button>
					</a>
				</div>

				<div class="license-p">
					<License />
				</div>


				<div class="space20"></div>
				<div class="space20"></div>
				<div class="contactform">
					<ContactForm />
				</div>

                </div>
            </main>       
    </div>

		
	<div class="toggle">
		<Toggle
			size="2em"/>
	</div>


	<footer bind:this={mainElement}>
        <!-- <audio src={"./audio/"+$musicList[currentSongIndex].audio}
        bind:this={audioElement}
        ></audio> -->

        <div class="control"> 
            
            <div class="prev">
                <i type="button" on:click={prev}>
                    <Icon src={FaSolidStepBackward} color='var(--primary-text)'/>
                </i>
            </div>

            <div class="playpause">
                <i type="button" on:click={playpause}>
                    {#if playerState=="play"}
                        <Icon src={BsPauseCircleFill} size='1.6em' color='var(--primary-text)'/>                        
                    {:else}
                        <Icon src={BsPlayCircleFill} size='1.6em' color='var(--primary-text)'/>                        
                    {/if}
                </i>
            </div>

            <div class="next">
                <i type="button" on:click={next}>
                    <Icon src={FaSolidStepForward} color='var(--primary-text)'/>
                </i>
            </div>

        </div>

                <div class="beattitle">
                    <h3>{$musicList[currentSongIndex].name}</h3>
                    <p>{$musicList[currentSongIndex].artist}</p>
                </div>

        <div class="control-dis"> 
            
            <div class="prev">
                <i type="button" on:click={prev}>
                    <Icon src={FaSolidStepBackward} color='var(--primary-text)'/>
                        </i>
            </div>
        
            <div class="playpause">
                <i type="button" on:click={playpausestop}>
                    {#if playerState=="play"}
                        <Icon src={BsPauseCircleFill} size='1.6em' color='var(--primary-text)'/>                        
                    {:else}
                        <Icon src={BsPlayCircleFill} size='1.6em' color='var(--primary-text)'/>                        
                    {/if}
                </i>
            </div>
        
            <div class="next">
                <i type="button" on:click={next}>
                    <Icon src={FaSolidStepForward} color='var(--primary-text)' />
                </i>
            </div>
        
        </div>
            
    </footer>
	<!-- <BottomPlayer 
        beatnam={$musicList[currentSongIndex].name}
        beatavata={"./image/"+$musicList[currentSongIndex].image}
        producer={$musicList[currentSongIndex].artist}
		prev={prev}
		next={next}
		playpause={playpause}
		playbtn={BsPlayCircleFill}
		pausebtn={BsPauseCircleFill}/> -->

<style>

	.toggle{
		display: none;
	}

	.radial{
		position: absolute;
		z-index: -10;
		width: 95%;
		max-width: 95%;
		height: 100%;
		z-index: -1;
	}

	.modal-back{
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: var(--base-bg);
		border: var(--bg-color) 1px solid;
		border-radius: 8px;
		padding: 20px;
	}

	.hea{
		display: flex;
		width: 100%;
		justify-content: center;
		padding: 30px 0px 0px;
		font-size: 1.5em;
		font-weight: 600;
	}
	:global(.iconnn){
		cursor: pointer;
		color: var(--primary-button);
	}
	
	audio {
		display: none;
}

.contactform{
	margin: 0px 20px;
}

.view-all{
	display: flex;
	text-align: center;
	justify-content: center;
}


.license-p{
	scrollbar-color: transparent transparent;
	overflow-x: hidden;
	scroll-snap-type:x mandatory;
	overflow-anchor:auto mandatory;
}

.license-p::-webkit-scrollbar{
	scrollbar-color: transparent transparent;
	overflow-x: hidden;
	scroll-snap-type:x mandatory;
	overflow-anchor:auto mandatory;
}

.wave{
	padding: 40px 0px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
}

.tag-btn{
	display: flex;
	max-width: 90px;
	padding-inline: 10px;
	white-space: nowrap;
	justify-content: flex-start;
	overflow: hidden;
	text-overflow: ellipsis;
	
}

.nospacer{
	margin-top: -150px;
}

.open-button{
	display: flex;
	color: var(--primary-text);
	background: var(--primary-button);
	border-radius: 5px;
	align-items: center;
	height: fit-content;
	width: fit-content;
	justify-content: center;
	border: none;
	gap: 5px;
}

.btnpad{
	padding: 10px;
}

.pay-button{
	display: flex;
	align-items: center;
	font-family: inherit;
	justify-content: center;
	padding: 10px;
	gap: 7px;
	font-size: 13px;
	font-weight: 700;
	color: #fff;
	background: var(--primary-button);
	border-radius: 4px;
	height: 41px;
}

button{
		border: none;

}

.length{
    align-self: center;
    grid-area: right;
	margin-right: 10px;
	
	
}
/* 
.tracknum{
	align-self: center;
	padding-left: 20px;
	font-size: 11px;
	color: var(--lt-color-text-very-light);
} */


.metaplay {
	align-items: center;
	align-self: center;
	gap: .875em;
	grid-area: middle;
	/* max-width: calc(100% - 3em); */
    font-size: 0.8em;
	
}

.metaplay .thumbnail{
	margin: 0 .7rem;
	
}

.artist{
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-clamp: 2;
	display: -webkit-box;
	font-family: CommissionerVariable,sans-serif;
	overflow: hidden;
	font-size: .6rem;
}

.second {
	color: rgba(255,255,255,.7) !important;
	font-weight: 400;
}

.titleplay{
	display: block;
	font-weight: 800;
	letter-spacing: .05em;
	max-width: 80%;
	text-transform: uppercase;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap	;
	flex-wrap: nowrap;
	margin: 0px 0px;
	font-size: .75rem;
}

.column{
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: calc(100% - 4.45em);
    font-size: 12px;
}




.thumbnail{
	aspect-ratio: 1/1;
	border-radius: var(--lg-radius);
	max-height: 4.25em;
	max-width: 4.25em;
	min-height: 3em;
	min-width: 3em;
	padding: 0px 0px;
}


.thumbnail img {
	aspect-ratio: 1/1;
	border-radius: var(--xs-radius);
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	position: relative;
	width: 100%;
	
}
    .spacer{
    padding: 8px;
}

.app-content-p {
	position: relative;
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

.boxxx {
	gap: .5rem 1rem;
	grid-template-areas: "img img" "metadata metadata" "buttons buttons ";
	grid-template-columns: 1fr;
}

.boxxx {
	-webkit-margin-after: 1.3333em;
	background-color: rgba(55,69,82,0);
	display: flex;
	flex-direction: column;
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

.boxx{
	display: flex;
	flex-direction: column;
}

.resp-content-width {
	margin: 0 auto;
	max-width: calc(100vw - 2.25em) !important;
}
.img {
	margin-inline: auto;
	align-self: center;
	aspect-ratio: 1/1;
	grid-area: "img";
	height: auto;
	max-width: 16rem;
	position: relative;
	width: var(--width);
}

.svelte-1vm3yrq {
	aspect-ratio: inherit;
	border-radius: 2%;
	filter: drop-shadow(0 0 .3rem rgba(0, 0, 0, 0.397));
	height: 193px;
	max-height: inherit;
	max-width: inherit;
	min-height: var(--img-height,inherit);
	-o-object-fit: cover;
	object-fit: cover;
	width: 100%;
	margin-inline: auto;
}

.metadata {
	word-wrap: unset;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	grid-area: metadata;
	line-height: normal;
	margin-bottom: .333em;
	text-align: center;
}
/* 
.info-title {
} */

.box-title{
	display: flex;
	/* font-family: CommissionerVariable,sans-serif !important; */
	font-size: 1.5em !important;
	font-weight: 700;
	letter-spacing: 0rem;
	margin: -.5rem 0 .2rem;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap	;
	flex-wrap: nowrap;
    text-transform: uppercase;
	max-width: 100%;
	justify-content: center;
}

small{
	display: inline;
    font-size: smaller;
	justify-self: flex-start;
}


.subtitle{
	display: flex;
	justify-content: center;
	font-size: 9px;
	color: rgb(255, 129, 90);
}

.genre{
	display: flex;
	justify-content: flex-start;
    color: var(--primary-text);
    font-size: 12px;
	margin-bottom: 5px;
	margin-top: -10px;
}

.button-group {
	align-items: center;
	display: flex;
	flex: 1 1 100%;
	flex-wrap: wrap;
	gap: 0.5rem;
	grid-area: buttons;
	justify-content: center;
	margin-top: 0rem;
}


.outlined{
    background: transparent;
    border: .15em solid var(--primary-text);
    color: inherit;
}

.button {
	align-items: center;
	border-radius: 30px;
	cursor: pointer;
	display: inline-flex;
	font-family: inherit;
	font-size: 12px;
	font-weight: 500;
	gap: .25em;
	justify-content: center;
	padding: .63125em 1em;
	text-transform: capitalize;
	transition: background 75ms linear,color 75ms linear;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
    width: fit-content;
	height: 35px;
}
button{
	cursor: pointer;
}

/* element {
	width: 1em;
	height: 1em;
	transition: stroke linear 50ms;
} */

/* svg {
	stroke: var(--stroke,currentColor);
	shape-rendering: geometricPrecision;
	align-items: center;
	display: inline-flex;
	justify-content: center;
	pointer-events: none;
	position: relative;
	vertical-align: middle;
}

svg:not(:root) {
	overflow: hidden;
} */

.info-bar {
	border-bottom: 1px solid rgba(66,66,66,.425);
	display: grid;
	grid-template-columns: [index] 5.25rem 1fr 2.9rem;
	grid-template-rows: 1fr;
	max-width: inherit;
	padding: .8rem 0 .4rem;
	width: 100%;
    font-size: 12px;
}

/* .info-bar .index {
	display: none;
	justify-self: center;
	padding-left: 1.5rem;
} */

/* .info-bar .index, .info-bar .clock, .info-bar .title {
	color: #f7f7f7;
	display: block;
	position: relative;
	width: 100%;
} */

.divider{
	border-bottom: 1px solid var(--lt-color-gray-900);
	display: contents;
}
.list {
	max-width: inherit;
    justify-content: space-between;
	padding-bottom: 6px;
}

.list:not(:last-child){
	border-bottom: 1px solid rgba(66,66,66,.425);
	width: 100%;
	margin: auto;
}

.m-item {
	align-content: center;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	line-height: 1.5;
	padding-right: 0;
	touch-action:auto;
	
}
.m-item {
	background-color: transparent;
	transition: background-color .2s cubic-bezier(.25,.46,.45,.94);
}

.column {
	display: flex;
	width: 100%;
}
.active .titleplay{
	color: var(--tertiary-text);
	align-items: center;
	width: 100%;
}

/* .dd-button{
    padding-left: .2em;
} */

.d-button {
	cursor: pointer;
	/* isolation: isolate; */
	position: relative;
	touch-action: none;
}


footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        bottom: 0;
        position: fixed;
        margin: 0 auto;
        overflow: hidden;
        width: 100%;
        background: var(--footer-bg);
        align-items: center;
        padding: 5px;
		z-index: 1;
        gap: 0px;
        box-shadow: 0px 0px 10px 1px var(--bg-color);
    }

    i{
        cursor: pointer;
    }

    .beattitle{
        display: flex;
        justify-content: center;
        flex-direction: column;
        line-height: 0;
        grid-area: "img";
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap	;
        flex-wrap: nowrap;
        max-width: 80%;
        text-align: center;
		font-weight: 550;
    }

    .prev,
    .playpause,
    .next{
        padding: 6px;
    }


    h3{
        font-size: 13px;
        text-transform: uppercase;
    }
    p{
        font-size: 9px;
        font-weight: 400;
        margin-top: 5px;
    }

    .control{
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .control-dis{
        display: flex;
        visibility: hidden;
        align-items: center;
        padding-left: 20px;
    }

	.time , .bpehm, .taggg, .buy-wide{
		display: none;
	}

	
	/* #d3-bg-overlay {
		position: absolute;
		bottom: 0;
		margin-inline: auto;
		width: 100%;
		height: 90px;
		z-index: 9;
		background: green;
	}

	#d3Container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	#visualizerCanvas {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background: red;
	}

	.upper{
		position:relative;
		width: 100%;
		padding-block: 100px;
	} */

/* .featured-artist{
	color: var(--lt-color-gray-400);
} */

@media (max-width: 440px)	{
	.boxx{
		display:contents;
	}

	.metaplay{
		display: contents;
	}

}

@media screen and (max-width: 799px){
.img {
	align-self: center;
	justify-self: center;
}
.boxx{
	display: flex;
	margin: auto;
	align-items: center;
	vertical-align: middle;
}
.metaplay{
	display: contents;
}

}

@media (min-width: 800px){
	.boxx {
		display: flex;
		flex-direction: row;
		margin: auto;
		padding: 40px;
		align-items: center;
		vertical-align: middle;
	}

	.box img{
		width: 12rem;
	}
	.metadata{
		padding-left	: 3px;

	}

	.button-group{
		justify-content: flex-start;
		padding-top: 20px;
		left: 0;
		margin-left: 0;
		margin-right: auto;
		right: auto;
	}

	.meta-play{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 30px;
		margin-left: 0;
		margin-right: auto;
	}

	.metaplay{
		display: flex;
		position: relative;
		align-items: center;
		justify-content: space-between;
		font-size: 15px;
		font-weight: 600;
		letter-spacing: .2px;
		cursor: pointer;
		overflow: hidden;
		width: 100%;
		/* background: red; */
		
	}

	.metaplay .thumbnail{
		left: 0;
		margin-left: 0;
		top: -2px;
		margin-right: 5rem;
		position: absolute;
	}

	.metaplay img{
		width: 50px;
	}
	
	.secondary-subtitle{
		display: none;
	}

	.spacer {
		display: none;
	}
	.subtitle{
		justify-content: flex-start;
	}

	footer{
        display: flex;
        justify-content: space-evenly;
    }
    .control{
        margin-left: 0;
    }

    .beattitle{
        display:flex;
        justify-content: flex-start;
		max-width: 45%;
    }

	.app-content-p {
		display: flex;
		width: 100%;
		max-width: clamp(20%, 65%, 100%);
		margin-inline: auto;
		justify-content: center;
	}

	.titleplay{
		font-size: 1.2em;
		display:flex;
		flex: 1 1 100%;
        justify-content: flex-start;
		min-width: 45%;
		padding-left: 60px;
		padding-right: 25px;
		/* border: 2px solid blue; */
	}

	.time {
		display: flex;
		margin-right: 50%;
		margin: auto;
		max-width: 10%;
		min-width: 10%;
		justify-content: center;
		/* border: 2px solid green; */

	} 
	.bpehm{
		display: flex;
		max-width: 5%;
		min-width: 5%;
		padding: 10px;
		/* border: 2px solid white; */

	} 
	.taggg{
		display: flex;
		max-width: 20%;
		min-width: 20%;
		text-overflow: ellipsis;
		white-space: nowrap;
		gap: 10px;
		/* border: 2px solid yellow; */

	}

	.length{
		display: flex;
		justify-content: right;
		max-width: 20%;
		min-width: 20%;
		/* border: 2px solid pink; */
	}

	.buy-wide{
		display: contents;
		color: #fff;
	}

	.list .button{
		font: inherit;
		background: var(--secondary-button); 
		color: #fff;
	}

	.toggle{
		display: block;
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 80px 60px;
		z-index: 50;
	}
}



@media (prefers-reduced-motion: reduce){
*, ::after, ::before {
  animation-delay: -1ms !important;
  animation-duration: 1ms !important;
  animation-iteration-count: 1 !important;
  background-attachment: scroll !important;
  scroll-behavior: auto !important;
  transition-delay: 0s !important;
  transition-duration: 0s !important;
}
}

*, ::after, ::before {
	box-sizing: inherit;
}

/* svg.svelte-17872hf {
	stroke: var(--stroke,currentColor);
	shape-rendering: geometricPrecision;
	pointer-events: none;
} */
</style>