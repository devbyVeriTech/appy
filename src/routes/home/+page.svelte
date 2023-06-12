<script>
	import {onMount} from "svelte";
	import {musicList} from "$lib/components/musiclist.js"
	import License from "$lib/components/License/License.svelte";
	import BottomPlayer from "$lib/components/BottomPlayer/BottomPlayer.svelte";
  	import Popp from "$lib/components/Popp/Popp.svelte";
	import Icon from 'svelte-icons-pack'
	import IoBagAddOutline from "svelte-icons-pack/bs/BsBagPlus"; 
	import IoEllipsisVertical from "svelte-icons-pack/io/IoEllipsisVertical"; 
	import { fly } from "svelte/transition";


	import { Modal, Content, Trigger}  from "sv-popup"
	import Purchase from "$lib/components/Purchase/Purchase.svelte"
  import ContactForm from "$lib/components/ContactForm/ContactForm.svelte";


	// import store from "../components/store/store"
	
	
	
    
	let currentSongIndex = 0;
	let playerState ;
	let audioElement ;
	let mainElement ;

	onMount (function(){

	})

	function playpausestop() {
		if (playerState == "play"){
			playerState = "pause";
			audioElement.pause();
		} else {
			playerState = "play";
			audioElement.play();
		}
	}

	function setSong(i){
		currentSongIndex = i;
		playerState = "play";
	}


	function openForm(){
		document.getElementById("myForm").style.display = "block";
		document.getElementById("list").style.display = "none";

	}
	function closeForm(){
		document.getElementById("myForm").style.display = "none";
		document.getElementById("list").style.display = "contents";
	}
	

	// function playpause() {
	// 	if (playerState == "play"){
	// 		playerState = "pause";
	// 		audioElement.pause();
	// 	} else {
	// 		playerState = "play";
	// 		audioElement.play();
	// 	}

	// 	if (playerState == "stop"){
	// 		playerState = "play";
	// 		audioElement.play();
	// 	} 
	// }

	
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


	function seekTo (){
		
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
                <div class="box resp-content-width">
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
								<button type="button" class="button outlined tag-btn" on:click={() => setSelectedTags(tag)}>
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
									  <Purchase 
									  			beatname={$musicList[currentSongIndex].name}
												beatavatar={"./image/"+$musicList[currentSongIndex].image}
												beatbpm={$musicList[currentSongIndex].bpm}
												beatkey={$musicList[currentSongIndex].key}
												beatgenre={$musicList[currentSongIndex].genre}/>
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
				</div>



				



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

                            <div class="length">
                                <div class="d-button" role="button" aria-label="menu" tabindex="0">
									<div class="open-button btnpad" on:click={openForm} on:keydown>
										<Icon src={IoBagAddOutline} size='1.2em' color='white' className="custom" />
									</div>
									<div class="form-popup" id="myForm">
										<div class="pop">
											<div class="close" on:click={closeForm}>
												<i class="fa fa-xmark fa-xl icon-btn" ></i>
											</div>
											<Popp 
												beatname={$musicList[currentSongIndex].name}
												beatavatar={"./image/"+$musicList[currentSongIndex].image}
												beatbpm={$musicList[currentSongIndex].bpm}
												beatkey={$musicList[currentSongIndex].key}
												beatgenre={$musicList[currentSongIndex].genre}/>
										</div>
									</div>
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
	<BottomPlayer 
        beatnam={$musicList[currentSongIndex].name}
        beatavata={"./image/"+$musicList[currentSongIndex].image}
        producer={$musicList[currentSongIndex].artist}
		prev={prev}
		next={next}
		playpausestop={playpausestop}
		play="fa fa-play-circle fa-xl"
		pause="fa fa-pause"/>

<style>
	
	audio {
		display: none;
}

.view-all{
	display: flex;
	text-align: center;
	justify-content: center;
}


.license-p{
	overflow-x: scroll;
	scroll-snap-type:x mandatory;
	overflow-anchor:auto mandatory;
}



.tag-btn{
	display: flex;
	max-width: 90px;
	white-space: nowrap;
	justify-content: flex-start;
	overflow: hidden;
	text-overflow: ellipsis;
	
}

.close{
	width: fit-content;
	right: 20;
	margin-right: 20;
	margin-left: auto;
	padding: 20px;
}
.close i{
	right: 50px;
}

.pop{
	background: var(--color-bg-purple);
	width: max-content;
}

.form-popup{
	inset: 0;
	border-top: #f7f7f7 3px solid;
	display: none;
	position: fixed;
	margin:0 auto;
	top: 0;
	bottom: 1;
	right: 0px;
	width: 100%;
	z-index: 150;
	
}
.nospacer{
	margin-top: -150px;
}

.open-button{
	display: flex;
	color: #fff;
	background: var(--yellow-button);
	border-radius: 5px;
	align-items: center;
	height: fit-content;
	width: fit-content;
	justify-content: center;
	border: none;
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
	background: var(--yellow-button);
	border-radius: 4px;
	min-height: 41px;
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
	max-width: calc(100% - 3em);
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
}
.img {
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
    color:rgb(158, 158, 158);
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

.button-group:first-child{
	display: none;
}

.outlined{
    background: transparent;
    border: .15em solid #fafafa;
    color: #fafafa;
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
	padding: .63125em 1.25em;
	text-transform: capitalize;
	transition: background 75ms linear,color 75ms linear;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
    width: fit-content;
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
	width: 82rem;
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
	border-bottom: var(--lt-color-gray-800) 1px solid;
	padding-bottom: 6px;

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
	color: #f98903;
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

@media screen and (max-width: 719px){
.img {
	align-self: center;
	justify-self: center;
}
.boxx{
	display: contents;
}
.metaplay{
	display: contents;
}

}

@media (min-width: 720px){
	.boxx {
		display: inline-flex;
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
		padding-left: 60px;
	}

	.metaplay{
		max-width: 1270px ;
		display: contents;
	}

	.metaplay .thumbnail{
		left: 0;
		margin-left: 0;
		margin-right: 5rem;
	}

	.metaplay img{
		width: 50px;
		left: 50px;
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