<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch"; 
    import AiOutlineUser from "svelte-icons-pack/ai/AiOutlineUser"; 
    import AiOutlineHome from "svelte-icons-pack/ai/AiOutlineHome"; 
    import BsMusicNote from "svelte-icons-pack/bs/BsMusicNote"; 
    import AiOutlineCustomerService from "svelte-icons-pack/ai/AiOutlineCustomerService"; 
    import AiOutlinePhone from "svelte-icons-pack/ai/AiOutlinePhone"; 
    import VscPackage from "svelte-icons-pack/vsc/VscPackage";
    import { fly } from 'svelte/transition';
    import Toggle from '../Toggle/Toggle.svelte';
    import { currentUser } from '$lib/pocketbase';


    let search = "" ;

</script>
    <div class="conna"  transition:fly={{x:-200, duration:400}}>

        <div class="menutins">

            {#if $currentUser}                
                <div class="greetings">

                    <div class="hi">
                        Hi, 
                        <p>
                            <a href="/my-account">
                                {$currentUser.username}
                            </a>
                        </p>
                    </div>

                    <div class="toggle">
                        <Toggle/>
                    </div>
                </div>
                {:else}
                <div class="greetings">

                    <div class="hi">

                        Hi, 
                        <p>
                            Guest
                        </p>     
                    </div>

                    <div class="toggle">
                        <Toggle/>
                    </div>
                </div>
            {/if}

                <ul>
                    <div class="list">
                        <li>
                            <a href="/home">
                                <Icon src={AiOutlineHome} size='1.4em' color='#69428e'/>
                                Home
                            </a> 
                        </li>
                        
                        <li>
                            <a href="/tracks">
                                <Icon src={BsMusicNote} size='1.4em' color='#69428e'/>
                                All beats
                            </a> 
                        </li>
                        
                        <li>
                            <a href="/about">
                                <Icon src={AiOutlineUser} size='1.4em' color='#69428e'/>
                                About
                            </a> 
                        </li>
                        
                        <li>
                            <a href="/services">
                                <Icon src={AiOutlineCustomerService} size='1.4em' color='#69428e'/>
                                Services
                            </a> 
                        </li>
                        
                        <li>
                            <a href="/sound-kits">
                                <Icon src={VscPackage} size='1.4em' color='#69428e'/>
                                Sound Kits
                            </a> 
                        </li>
                        
                        <li>
                            <a href="/contact">
                                <Icon src={AiOutlinePhone} size='1.4em' color='#69428e'/>
                                Contact
                            </a> 
                        </li>
                    </div>
                    

                    <div class={search ? 'above' : 'searchbox'}>
                        <input type="search" bind:value={search} name="search" id="search" class="searchbar" placeholder="Search Here">
                        <button class="search-icon" type="submit">
                            <Icon src={AiOutlineSearch} size='1.4em' color={search ? 'var(--primary-text)' : '#69428e'} className={search ? 'poin' : 'nopoin'}/>
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

.toggle{
    margin-inline-end: 20px;
}

a{
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-text);
}

p{
    font-weight: 550;
    text-transform: uppercase;
    margin: auto 0;
}

.greetings{
    color: var(--primary-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .3rem;
    font-weight: normal;
    text-transform: capitalize;
    padding-left: 40px;
    margin: -40px 0 20px 0px;
}

.hi{
    display: flex;
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
    border: var(--primary-text) 1px solid;
    padding: 0;
    border-radius: 100px;
    padding: 0 10px;
    width: 75%;
    transition: all 0.4s linear;
}

.searchbar{
    padding: 0px 5px;
}

input{
    border: none;
    background: transparent;
    color: var(--primary-text);
    outline: none;
    padding: 0px 10px;
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
    line-height: 3;
}

.conna{
    background: var(--base-bg);
    position: absolute;
    display: flex;
    width: 80%;
    height: 100dvh;
    top: 0;
    left: 0;
    margin: auto;
    padding-left: 10%;
    padding-top: 100px;
    z-index: -1;
    transition: 0.5s ease;
    backdrop-filter: blur(3px);
    box-shadow: 20px 0px 150px 20px var(--bg-color);
    color: var(--primary-text);
}

ul{
    list-style: none;
    color: var(--primary-text);
}

li:hover{
    font-size: 18px !important;
}

li:focus, li:active{
    font-size: 18px !important;
}

li{
    color: var(--primary-text);
}

</style>