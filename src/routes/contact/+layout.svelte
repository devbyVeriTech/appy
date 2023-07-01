<script>
    
    /** @type {import('../contact/$types').LayoutData} */
    import '../../app.css'
    import '../style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import { fade } from 'svelte/transition';



						

</script>

<header>
    <Nav />
</header>

    <div class="conta"
    transition:fade={{duration:100, delay:100}}>
        <div class="spade"></div>
        <div class="spade"></div>
        <slot/>
    </div>

<footer>
    <div class="footer">
        
        
    </div>
</footer>                                                                                                                                                                                                                                         

<style>
    *{
        box-sizing: border-box;
    }

.spade{
    padding: 20px 0px;
}
</style>