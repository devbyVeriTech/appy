<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch"; 
    import { fly } from 'svelte/transition';


    let search = "" ;

</script>
    <div class="conna"  transition:fly={{x:-200, duration:400}}>
        <div class="menutins">
                <ul>
                    <li>
                        <a href="/home">
                            <i class="fa fa-home"></i> 
                            Home
                        </a> 
                    </li>
                    
                    <li>
                        <a href="/tracks">
                            <i class="fa fa-music"></i> 
                            All beats
                        </a> 
                    </li>
                    
                    <li>
                        <a href="/about">
                            <i class="fa fa-user"></i> 
                            About
                        </a> 
                    </li>
                    
                    <li>
                        <a href="/services">
                            <i class="fa fa-compact-disc"></i> 
                            Services
                        </a> 
                    </li>
                    
                    <li>
                        <a href="/contact">
                            <i class="fa fa-phone"></i> 
                            Contact
                        </a> 
                    </li>
                    

                    <div class={search ? 'above' : 'searchbox'}>
                        <input type="search" bind:value={search} name="search" id="search" class="searchbar" placeholder="Search Here">
                        <button class="search-icon" type="submit">
                            <Icon src={AiOutlineSearch} size='1.4em' color={search ? '#fff' : '#69428e'} className={search ? 'poin' : 'nopoin'}/>
                        </button>
                    </div>
                </ul>

        </div>
    </div>

<style>

:global(.poin) {
    cursor: pointer;
}

:global(.nopoin){
    pointer-events: none;
}


.searchbox{
    margin-top: 50px;
    display: flex;
    align-items: center;
    border: #69428e 1px solid;
    padding: 0;
    border-radius: 100px;
    padding: 0 10px;
    width: 75%;
    transition: all 0.4s linear;
}

.above{
    margin-top: 50px;
    display: flex;
    align-items: center;
    border: #fff 1px solid;
    padding: 0;
    border-radius: 100px;
    padding: 0 10px;
    width: 75%;
    transition: all 0.4s linear;
}

.searchbar{
    padding: 5px;
}

input{
    border: none;
    background: transparent;
    color: #fff;
    outline: none;
    padding: 10px;
    font-family: inherit;
    width: 100%;
    font-size: 12px;
}

input::placeholder{
    font-size: 12px;
    color: #a872db;
    transition: 0.4s ease;
}

.search-icon{
    background: transparent;
    border: none;
    outline: none;
}

.menutins{
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 550;
    line-height: 3.5;
}

.conna{
    background: #1c1224;
    position: absolute;
    display: flex;
    width: 80%;
    height: 100dvh;
    top: 0;
    left: 0;
    margin: auto;
    padding-left: 20px;
    padding-top: 100px;
    z-index: -1;
    transition: 0.5s ease;
    backdrop-filter: blur(3px);
    box-shadow: 20px 0px 150px 20px var(--bg-color);
}

ul{
    list-style: none;
}

li:hover{
    font-size: 18px !important;
}

li:focus, li:active{
    font-size: 18px !important;
}
</style>