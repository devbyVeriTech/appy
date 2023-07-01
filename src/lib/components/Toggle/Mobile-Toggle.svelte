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
            in:fade={{duration:300}}
            out:fade={{duration:0}}>
                <Icon src={BsSunFill} size={size} color='var(--primary-text)'/>
            </div>
            {:else}
            <div class="toggle dark"
            in:fade={{duration:300}}
            out:fade={{duration:0}}>
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
        border: none;
        outline: none;
        background: transparent;
        padding: 10px;
    }

    .dark, .light{
        width: fit-content;
    }

    .toggle{display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 100%;
        border: 1px solid var(--primary-text);
    }
</style>