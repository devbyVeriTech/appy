<script>
    import './style.css'
    import Nav from '$lib/components/Nav/Nav.svelte';
    import { fly } from 'svelte/transition';

    
        // Your selected Skeleton theme:
    // import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    // import '../app.postcss';



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