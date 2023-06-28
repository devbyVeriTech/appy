<script>
    import Footer from "$lib/components/Footer/Footer.svelte";
  import Nav from "$lib/components/Nav/Nav.svelte";
    /** @type {import('./$types').LayoutData} */
</script>


<header>
    <Nav/>
</header>

<div class="space20"></div>
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
