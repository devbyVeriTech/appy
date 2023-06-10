<script>
        import './../app.css'
    import './style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import { fly } from 'svelte/transition';



</script>

<header>
    <Nav />
</header>

<div class="space20"></div>
    <div class="conta"
    in:fly={{x:-200, duration:400}}
    out:fly={{x:200, duration:400}}>
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