<script>
  import { each } from "svelte/internal";
    import Icon from "svelte-icons-pack";
    import BsPauseCircleFill from "svelte-icons-pack/bs/BsPauseCircleFill";
    import BsPlayCircleFill from "svelte-icons-pack/bs/BsPlayCircleFill";
    import FaSolidStepBackward from "svelte-icons-pack/fa/FaSolidStepBackward";
    import FaSolidStepForward from "svelte-icons-pack/fa/FaSolidStepForward";
    import { musicList } from "../musiclist.js";


    let currentSongIndex = 0;
	let playerState = "pause";
	let audioElement;
	let mainElement;
    


    //  function playpause() {
	//  	if (playerState == "play"){
	//  		playerState = "pause";
	//  		audioElement.pause();
	//  	} else {
	//  		playerState = "play";
	//  		audioElement.play();
	//  	}

	//  	if (playerState == "stop"){
	//  		playerState = "play";
	//  		audioElement.play();
	//  	} 
	//  }
	//  function prev() {
	//  	if (currentSongIndex == 0) {
	//  		currentSongIndex = $musicList.length - 1;
	//  	} else{
	//  		currentSongIndex = (currentSongIndex - 1) % $musicList.length;
	//  	}
	//  	playerState = "play";
	//  }

	//  function next() {
	//  		currentSongIndex = (currentSongIndex + 1) % $musicList.length;
	//  		playerState = "play";
	// }
    export let beatnam;
    export let beatavata;
    export let producer;

    export let prev;
    export let next;
    export let playpausestop;
    export let play;
    export let pause;

</script>

<!-- <input type="range" min="0" max="100" value="0" class="durationseek" on:change={seekTo}> -->
    <footer bind:this={mainElement}>
        <audio src={"./audio/"+$musicList[currentSongIndex].audio}
        bind:this={audioElement}
        ></audio>

        <div class="control"> 
            
            <div class="prev">
                <i type="button" on:click={prev}>
                    <Icon src={FaSolidStepBackward} color='white'/>
                </i>
            </div>

            <div class="playpause">
                <i type="button" on:click={playpausestop}>
                    {#if playerState=="play"}
                        <Icon src={BsPauseCircleFill} size='1.6em' />                        
                    {:else}
                        <Icon src={BsPlayCircleFill} size='1.6em' />                        
                    {/if}
                </i>
            </div>

            <div class="next">
                <i type="button" on:click={next}>
                    <Icon src={FaSolidStepForward} color='white' />
                </i>
            </div>

        </div>

                <div class="beattitle">
                    <h3>{beatnam}</h3>
                    <p>{producer}</p>
                </div>

        <div class="control-dis"> 
            
            <div class="prev">
                <i type="button" on:click={prev}>
                    <Icon src={FaSolidStepBackward} color='white'/>
                        </i>
            </div>
        
            <div class="playpause">
                <i type="button" on:click={playpausestop}>
                    {#if playerState=="play"}
                        <Icon src={BsPauseCircleFill} size='1.6em' />                        
                    {:else}
                        <Icon src={BsPlayCircleFill} size='1.6em' />                        
                    {/if}
                </i>
            </div>
        
            <div class="next">
                <i type="button" on:click={next}>
                    <Icon src={FaSolidStepForward} color='white' />
                </i>
            </div>
        
        </div>
            
    </footer>
<style>
    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        bottom: 0;
        position: fixed;
        margin: 0 auto;
        overflow: hidden;
        width: 100%;
        background: var(--purple-header);
        align-items: center;
        padding: 5px;
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
        gap: 2px;
        text-align: center;
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



/* input{
    appearance: none;
    height: 1px;
    width: 100%;
    position: fixed;
    bottom: 48px;
    z-index: 1;
} */


@media (min-width:720px)    {
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
        margin: auto;

    }
    
}

</style>