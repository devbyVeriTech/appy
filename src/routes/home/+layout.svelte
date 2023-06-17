<script>
    
    /** @type {import('../home/$types').LayoutData} */
    import '../../app.css'
    import '../style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import Footer from '$lib/components/Footer/Footer.svelte';
    import { fly } from 'svelte/transition';

</script>

<header>
    <Nav />
</header>

<div class="spacer"></div>
    <div class="conta"
    in:fly={{x:-200, duration:300, delay:300}}
    out:fly={{x:200, duration:300}}>
        <div class="spacer"></div>
        <slot/>
    </div>

<footer>
    <div class="footer">
        <div class="spade">
            <Footer/>
        </div>
    </div>
    <div class="space20"></div>
    <div class="space20"></div>
</footer>                                                                                                                                                                                                                                         

<style>

.spacer{
    padding: 60px 0px;
}
.spade{
    padding: 20px 0px;
}
</style>