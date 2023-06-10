<script>
	import {onMount} from "svelte";
	import {musicList} from "../musiclist.js"
    
	
    
	let currentSongIndex = 0;
	let playerState = "pause";
	let audioElement;
	let mainElement;

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

		if (playerState == "stop"){
			playerState = "play";
			audioElement.play();
		} 
	}
	function prev() {
		if (currentSongIndex == 0) {
			currentSongIndex = $musicList.length - 1;
		} else{
			currentSongIndex = (currentSongIndex - 1) % $musicList.length;
		}
		playerState = "play";
	}
	function next() {
			currentSongIndex = (currentSongIndex + 1) % $musicList.length;
			playerState = "play";
	}

	function setSong(i){
		currentSongIndex = i;
		playerState = "play";
	}

	let current = "def";


</script>
<svelte:head>

</svelte:head>

<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
    <div class="app-content-p">
            <main bind:this={mainElement}>
				<audio src={"./audio/"+$musicList[currentSongIndex].audio}
				bind:this={audioElement} autoplay="true"
				></audio>
                <div class="box resp-content-width">
					<div class="boxx">
						<div class="img">
							<img class="svelte-1vm3yrq" src={"./image/"+$musicList[currentSongIndex].image}>
						</div>
						
                            <div class="meta-play">
                                <div class="metadata">
                                    <div class="info-title">
                                        <span class="box-title">{$musicList[currentSongIndex].name}</span>
                                    </div>
                                    <span class="secondary subtitle-group">

                                        <!-- <em> -->
                                            <small class="subtitle">
                                                <div class="genre">
                                                    <p></p>{$musicList[currentSongIndex].genre}
                                                    <p></p> BPM: {$musicList[currentSongIndex].bpm}
                                                    <p></p>KEY: {$musicList[currentSongIndex].key}                                                    
                                                </div>
                                            </small>
                                        <!-- </em> -->
                                    </span>
                                </div>
                            
                            </div>
				    </div>

                    <div class="spacer"></div>
                    <div class="spacer"></div>

                    <div class="info-bar"> </div>


                    
                    <div class="button-group">
						<div class="sliders">
							<div class="seek">
								<div class="current-time">
									00:00
								</div>
									<input type="range" min="0" max="100" value="0" class="seek-bar">
								<div class="total-duration">
										00:00
								</div>
							</div> 
						</div>
							<div class="volume">
								<i class="fa fa-volume-down"></i>
									<input type="range" min="1" max="100" value="99" class="volume-bar">
								<i class="fa fa-volume-up"></i>
							</div>
                        <div class="bgroup">

							<div class="loop">
								<i type="button" class="{current === 'def' ? 'randomActive' : ''}" 
									on:click="{() => current = 'def'}">
									<!-- Loop Button -->
									<i class="fa fa-repeat"></i>
								</i>
							</div>
							<div class="prev">
								<i type="button" on:click={prev}>
									<!-- Previous Button -->
									<i class="fa fa-backward-fast fa-xl"></i>
								</i>
							</div>
							
							<div class="play">
								<!-- Play & Pause Button -->
								<i type="button" on:click={playpausestop}>
									{#if playerState=="play"}    
									<i class="fa fa-pause fa-2xl"></i> 
									{:else}
									<i class="fa fa-play fa-2xl"></i> 
									{/if}
								</i>
							</div>

							<div class="next">
								<!-- Next Button -->
								<i type="button" on:click={next}>
									<i class="fa fa-forward-fast fa-xl"></i>
								</i>
							</div>

							<div class="shuffle">
								<!-- Suffle Button -->
								<i type="button" class="{current === 'def' ? 'randomActive' : 'def'}" 
									on:click="{() => current = 'def'}">
									<i class="fa fa-shuffle"></i>
								</i>
							</div>
						</div>
                    </div>           

                </div>
            </main>       
    </div>


	

<style>

.randomActive{
	color: #aa0000;
}

.def{
	color: white;
}

.shuffle{
	color: #fff;
}

.sliders{
	position: relative;
}
.seek{
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 15px;
	gap: 20px;
}
.volume{
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

}
.seek-bar{
	width: 50%;
}
.volume-bar{
	width: 30%;
}
.seek-bar,
.volume-bar{
	appearance: none;
	height: 1px;
	background: var(--lt-color-text-very-light);
	-webkit-transition: .3s ease;
	transition: .3s ease;
}


.seek-bar::-webkit-slider-thumb,
.volume-bar::-webkit-slider-thumb{
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	height: 20px;
	width: 20px;
	border: #aa0000 1px solid;
	background: #aa0000;
	cursor: pointer;
}

.current-time,
.total-duration {
	color: var(--lt-color-text-very-light);
	font-size: 13px;
}

i.fa{
	cursor: pointer;
	color: var(--lt-color-text-very-light);

}

i.fa-play,
i.fa-pause{
    font-size: 70px;
} 


i.fa-forward-fast,
i.fa-backward-fast
{
    font-size: 30px;
}


.spacer{
    padding: 60px;
}

.app-content-p {
	display: grid;
    
}


main {
    display: block;
	margin: 0 auto;
	padding: 1.25em 0 5vh;
	padding-bottom: 3.3125vh !important;
	position: relative;
	/* transform: translateZ(0); */

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
	filter: drop-shadow(0 0 .3rem black);
	height: 193px;
	max-height: inherit;
	max-width: 12.6rem;
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

.box-title{
	display: block;
	/* font-family: CommissionerVariable,sans-serif !important; */
	font-size: 1.5em !important;
	font-weight: 900;
	letter-spacing: 0rem;
	margin: -.5rem 0 .2rem;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap	;
	flex-wrap: nowrap;
    text-transform: uppercase;
}

small{
	display: inline;
    font-size: smaller;
	justify-self: flex-end;
}

.spacer{
    padding: var(--xl-spacing);
}

.subtitle{
	justify-content: center;
	font-size: 9px;
	color: rgb(255, 129, 90);
}

.genre{
	justify-content: center;
    color:rgb(158, 158, 158);
    font-size: 1.17em;
    line-height: 5px
}

.button-group {
	
}

.bgroup{
	display: flex;
	align-items: center;
	position: fixed;
	gap: 2.5rem;
	grid-area: "buttons";
	justify-content: center;
    padding-top: 20px;
	bottom: 50px;
	right: 0;
	left: 0;
	width: 100%;


}


.info-bar {
	border-bottom: 1px solid rgba(66,66,66,.425);
	display: grid;
	grid-template-columns: [index] 6.25rem 1fr 2.9rem;
	grid-template-rows: 1fr;
	max-width: inherit;
	padding: .8rem 0 .4rem;
	width: 82rem;
    font-size: 12px;
}

.boxx{
	top: 0;
}


@media (max-width: 440px)	{
	.boxx{
		display:contents;
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

</style>