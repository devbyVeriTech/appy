<script>
    import '../style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import { fade } from 'svelte/transition';



</script>

<header>
    <Nav />
</header>

<div class="space20"></div>
    <div class="conta"
    transition:fade={{duration:100, delay:100}}>
        <div class="space20"></div>
        <slot/>
    </div>

<footer>
    <div class="footer">
        <div class="spade"></div>
        
        
    </div>
</footer>                                                                                                                                                                                                                                         

<style>

</style>