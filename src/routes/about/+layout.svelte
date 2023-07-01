<script>
    
    /** @type {import('./../about/$types').LayoutData} */
    import '../../app.css'
    import '../style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import Footer from '../../lib/components/Footer/Footer.svelte';
    import { fade } from 'svelte/transition';

</script>

<header>
    <Nav />
</header>

    <div class="conta"
    transition:fade={{duration:100, delay:100}}>
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