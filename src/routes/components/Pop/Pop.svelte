<script>
    import {onMount} from "svelte";
    import {musicList} from "$lib/components/musiclist.js"
    import {licenses} from "$lib/components/licenses.js"
    let currentSongIndex = 0;

    
    let license = "Kindly select a license type"

    export let beatname="";
    export let beatavatar="";


    onMount (function(){

})

function addToCart(){

}

    

</script>

<main>
            <div class="listt">

                <article class="m-itemm">
                        <div class="thumbnail">
                            <img class="thumnb" src={beatavatar} alt="">
                        </div>
                        <div class="columnn">
                            <span class="titleplayy">
                                {beatname}
                            </span>

                            <div class="artistt secondd">
                                {$musicList[currentSongIndex].artist}
                            </div>
                        </div>
                        
                        

                        <div class="lengthh">
                            <div class="d-button" role="button" aria-label="menu" tabindex="0">
                            </div>
                        </div>
                    
                </article>
            </div>
            <div class="license">
                <em>
                    {license}
                </em>
            </div>
            <div class="listt">
                <articlee class="m-itemm">
                    <div class="select">
                        <select name="License" id="license" bind:value={license} placeholder="Select License" >
                            {#each $licenses as license}
                            <option value="{license.name} License - {license.price}">{license.name} License - {license.price} </option>
                            {/each}
                        </select>
                    </div>

                    <div class="buy-btn">
                        <button class="buy" type="submit" value="Add" on:click={addToCart}>
                            <i class="fa-solid fa-shopping-bag fa-lg"></i>
                            Add
                        </button>
                    </div>
                </articlee>
            </div>
</main>

<style>
    

main{
    display: grid;
    flex-direction: column;
    background: var(--top-bg);
    color: #fff;
    align-items: center;
    justify-content: center;
    width: fit-content;
    
}

    .thumbnail{
	aspect-ratio: 1/1;
	border-radius: var(--xs-radius);
	max-height: 6.25em;
	max-width: 6.25em;
	min-height: 5.25em;
	min-width: 5.25em;
    padding-right: 10px;
}


.thumbnail img {
	aspect-ratio: 1/1;
	border-radius: var(--sm-radius);
	height: 100%;
	-o-object-fit: contain;
	object-fit: contain;
	position: relative;
	width: 100%;
	
}

.license{
    padding-bottom: 2px;
    font-size: 12px;
    color: var(--lt-color-text-very-light);
}

.listt {
	max-width: inherit;
    
}

article{
    padding: 0px 0px;
}

select{
    width: 10rem;
    height: 2.7rem;
    background: var(--lt-color-gray-800);
    border: 1px solid var(--lt-color-gray-700);
    border-radius: var(--xs-radius);
    color: #fff;
    font-family: inherit;
    padding-left: 10px;
    cursor: pointer;
}

option{
    color: var(--lt-color-text-dark);
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
}
.m-itemm {
	align-content: center;
	display: flex;
	line-height: 1.5;
	padding-right: 0;
	touch-action:auto;
    width: 100%;
	
}
.m-itemm {
	transition: background-color .2s cubic-bezier(.25,.46,.45,.94);
}


.artistt{
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-clamp: 2;
	display: -webkit-box;
	overflow: hidden;
	font-size: .74rem;
}

.secondd {
	color: rgba(255,255,255,.7) !important;
	font-weight: 400;
}

.titleplayy{
	display: block;
	font-weight: 400;
	max-width: 80%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap	;
	flex-wrap: nowrap;
	margin: 0px 0px 0px;
	font-size: .9rem;
}

.columnn{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.lengthh{
    align-self: center;
    grid-area: right;
	margin-right: 10px;
	
}
.d-button {
	cursor: pointer;
	isolation: isolate;
	position: relative;
	touch-action: none;
}

.buy-btn{
    align-self: center;
	
}
.buy-btn i{
    padding-right: 2px;
}
button{
    cursor: pointer;
}

button.buy{
    background: #aa0000;
    color: #fff;
    border: none;
    padding: 10px;
    margin-left: 8px;
    border-radius: 6px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    box-shadow: #ffffff28 0px 1px 7px 0px;
    transition: 0.2s ease;
}

button.buy:hover{
    background: #fff;
    color: #010102;
}


</style>