<script>
    
    /** @type {import('../tracks/$types').LayoutData} */
    import '../../app.css'
    import '../style.css'
    import {musicList} from '$lib/components/musiclist';
    import Nav from '$lib/components/Nav/Nav.svelte';
    import BottomPlayer from '$lib/components/BottomPlayer/BottomPlayer.svelte';
    import { fade } from 'svelte/transition';

    let currentSongIndex = 0


</script>

<header>
    <Nav />
</header>

<div class="spacer"></div>
    <div class="conta"
    transition:fade={{duration:100, delay:100}}>
        <div class="spacer"></div>
        <slot/>
    </div>

<footer>
    <div class="footer">
        <div class="spade"></div>
        
        
    </div>
</footer>                                                                                                                                                                                                                                         

<style>
    main{
      
    }
.spacer{
    padding: 60px 0px;
}
.spade{
    padding: 20px 0px;
}
</style>