<script>
    import Footer from "$lib/components/Footer/Footer.svelte";
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>



<main>
    <slot/>
</main>

<div class="footer">
    <Footer/>
</div>


