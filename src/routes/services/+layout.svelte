<script>
    import Nav from '$lib/components/Nav/Nav.svelte';
    import Footer from '../../lib/components/Footer/Footer.svelte';
    import { fly } from 'svelte/transition';

</script>

<header>
    <Nav />
</header>

    <div class="conta" 
    in:fly={{x:-200, duration:300, delay:300}}
    out:fly={{x:200, duration:300}}>
        <div class="spade"></div>
        <slot/>
    </div>

<footer>

    <div class="spade"></div>
    <div class="spade"></div>
    <div class="spade"></div>
    <div class="spade"></div>
    <div class="spade"></div>


    <Footer />
</footer>                                                                                                                                                                                                                                         

<style>


.spade{
    padding: 20px 0px;
}

</style>