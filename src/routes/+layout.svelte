<script>
    import './style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import { fade } from 'svelte/transition';
    import Toggle from "$lib/components/Toggle/Toggle.svelte";

</script>

<!-- <header>
    <Nav />
</header> -->

<!-- <div class="space20"></div> -->
    <div class="conta"
    transition:fade={{duration:100, delay:100}}>
        <div class="space20"></div>
        <slot/>
    </div>

<footer>
    <div class="footer">
        <div class="spade"></div>
        
        <div class="toggle">
            <Toggle
                size="2em"/>
        </div>
        
    </div>
</footer>                                                                                                                                                                                                                                         

<style>
    footer{
        position: relative;
    }

    .toggle{
		display: none;
	}

    @media (min-width:800px){
        .toggle{
            display: block;
            position: fixed;
            bottom: 0;
            right: 0;
            margin: 80px 60px;
            z-index: 50;
        }
    }
    

</style>