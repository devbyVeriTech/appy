<script>
  import Nav from '$lib/components/Nav/Nav.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<header>
    <Nav/>
</header>

<div class="space20"></div>
<div class="space20"></div>
<div class="space20"></div>
<div class="space20"></div>
<main>
    <slot/>
</main>