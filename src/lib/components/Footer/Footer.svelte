<script>
    import Icon from "svelte-icons-pack";
    import FaBrandsYoutube from "svelte-icons-pack/fa/FaBrandsYoutube";
    import FaBrandsInstagram from "svelte-icons-pack/fa/FaBrandsInstagram";
    import Policy from "../Policy/Policy.svelte";
	import { Modal, Content, Trigger}  from "sv-popup"
</script>

<section class="footer">
    <div class="foot">
        <div class="layout">
            <div class="logo">
                <a href="/home">
                    <img src="./cp.png" alt="Logo"> 
                </a>
            </div>
            <div class="column1">
                <li><a href="/home">Home</a></li>
                <li><a href="/tracks">Tracks</a></li>
                <!-- <li><a href="/discography">Discography</a></li> -->
                <li><a href="/sound-kits">Sound Kits</a></li>
            </div>
            <div class="column2">
                <li><a href="/services">Services</a></li>
                <!-- <li><a href="/blog">Blog</a></li> -->
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>
            <div class="column3">
                <li><a href="/licensing-info">Licensing Info</a></li>
                <!-- <li><a href="/terms">Terms of use</a></li> -->
                <Modal>
                    <Content>
                        <div class="modal-back">
                            <Policy/>
                        </div>
                    </Content>
                    <Trigger>
                        Privacy policy
                    </Trigger>
                </Modal>
                <!-- <li><a href="/privacy-policy">Privacy policy</a></li> -->
            </div>

            <div class="lib">
                <div class="icons">
                    <a href="https://www.youtube.com/@iamcherrydee">
                        <Icon src={FaBrandsYoutube} color='red' size="1.3em" className="customIcon"/>
                    </a>
                    <a href="https://www.instagram.com/icherrydee">
                        <Icon src={FaBrandsInstagram} color='var(--primary-text)' size="1.14em" className="customIcon"/>
                    </a>
                </div>
            </div>
        </div>
        
    </div>

    <div class="social">
        <a href="https://www.youtube.com/@iamcherrydee">
            <Icon src={FaBrandsYoutube} color='red' size="1.3em" className="customIcon"/>
        </a>
        <a href="https://www.instagram.com/icherrydee">
            <Icon src={FaBrandsInstagram} color='var(--primary-text)' size="1.14em" className="customIcon"/>
        </a>
    </div>

    <div class="copy">
        © <a href="/home"> Cherrydee Beatstore</a>
    </div>
</section>


<style>
section.footer {
	width: 100%;
	height: auto;
	display: block;
    border-top: 0.01em solid var(--lt-color-border-darker);
    font-size: 12px;
    letter-spacing: .2px;
    position: relative;
    line-height: 2;
    background: var(--footer-bg);
    color: var(--primary-text);
}

.modal-back{

    background: var(--base-bg);
    border: var(--bg-color) 1px solid;
    border-radius: 8px;
    padding: 20px;
    overflow-y: scroll;
    max-height: 800px;
    height: 600px;
}

.logo {
	display: flex;
    aspect-ratio: 1/1;
    padding-block: 5px;
}

.logo img{
	display: flex;
	align-items: center;
	width: 2.1em;
	height: auto;
}

.copy{
    display: flex;
    justify-content: center;
    background: var(--base-bg);
    width: 100%;
    margin: auto;
    padding: 10px;
    gap: 5px;
    bottom: 0;
    margin-bottom: 0;
    color: var(--primary-text);
}

a{
    color: var(--primary-text);
}

.foot {
	display: inline-block;
	width: 100%;
    padding: 72px 92px;
    padding-bottom: 20px;
    
}

.icons{
    display: none;
}

.social{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
}


.layout{
    display: flex;
    justify-content: center;
    gap: 10%;
    list-style: none;
}

:global(.customIcon){
    font-size: 2em;
}

@media (min-width:960px) {

    .foot{
        padding: 50px 90px;
    }

    :global(.customIcon){
    font-size: 2em;
}

    .icons{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .social{
        display: none;
    }
}

@media (max-width:400px){
    .modal-back{
        background: var(--base-bg);
        border: var(--bg-color) 1px solid;
        border-radius: 8px;
        padding: 20px;
        overflow-y: scroll;
        max-height: 400px;
        height: 600px;
    }
}
</style>