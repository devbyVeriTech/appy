<script>
    import {theme, toggleTheme } from "$lib/theme";
    import Icon from "svelte-icons-pack";
    import BsSunFill from "svelte-icons-pack/bs/BsSunFill";
    import BsMoonStarsFill from "svelte-icons-pack/bs/BsMoonStarsFill";
    import { fly } from "svelte/transition";
    import { fade } from "svelte/transition";

    export let size;
</script>

    <button on:click={toggleTheme} aria-label="Toggle Theme">
        {#if $theme == 'dark'}
            <div class="toggle light"
            in:fly={{x:30, duration:300}}
            out:fade={{x:-30, duration:0}}>
                <Icon src={BsSunFill} size={size} color='var(--primary-text)'/>
            </div>
            {:else}
            <div class="toggle dark"
            in:fly={{x:30, duration:300}}
            out:fade={{x:-30, duration:0}}>
                <Icon src={BsMoonStarsFill} size={size} color='var(--primary-text)'/>
            </div>
        {/if}
    </button>


<style>
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        width: auto;
        height: auto;
        /* border: 1px solid var(--primary-text); */
        border: none;
        outline: none;
        border-radius: 100%;
        background: transparent;
        padding: 10px;
    }

    .dark, .light{
        width: fit-content;
    }

    .toggle{
        text-shadow: black 0px 0px 10px;
    }
</style>