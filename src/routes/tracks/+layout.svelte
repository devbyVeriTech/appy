<script>
    
    /** @type {import('../tracks/$types').LayoutData} */
    import '../../app.css'
    import '../style.css'
    import {musicList} from '$lib/components/musiclist';
    import Nav from '$lib/components/Nav/Nav.svelte';
    import BottomPlayer from '$lib/components/BottomPlayer/BottomPlayer.svelte';
    import { fly } from 'svelte/transition';

    let currentSongIndex = 0


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