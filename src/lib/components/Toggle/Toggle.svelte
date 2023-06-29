<script>
    import {theme, toggleTheme } from "$lib/theme";
    import Icon from "svelte-icons-pack";
    import BsSunFill from "svelte-icons-pack/bs/BsSunFill";
    import BsMoonStarsFill from "svelte-icons-pack/bs/BsMoonStarsFill";

    export let size;
</script>

    <button on:click={toggleTheme} aria-label="Togglr Theme">
        {#if $theme == 'dark'}
            <div class="light">
                <Icon src={BsSunFill} size={size} color='var(--primary-text)'/>
            </div>
            {:else}
            <div class="dark">
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
        border: 1px solid var(--primary-text);
        outline: none;
        border-radius: 100%;
        background: transparent;
        padding: 10px;
    }

    .dark, .light{
        width: fit-content;
    }
</style>