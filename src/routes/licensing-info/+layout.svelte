<script>
    import Footer from "$lib/components/Footer/Footer.svelte";
    /** @type {import('./$types').LayoutData} */
</script>



<main>
    <slot/>
</main>

<div class="footer">
    <Footer/>
</div>

<style>
    main{
        width: 100%;
    }
</style>
