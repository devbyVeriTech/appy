<script>
    let title = "Downloads";
    import Icon from "svelte-icons-pack";
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack";
    import { prevent_default, set_input_type } from "svelte/internal";
    import CgSoftwareDownload from "svelte-icons-pack/cg/CgSoftwareDownload";
    import AiOutlineUserDelete from "svelte-icons-pack/ai/AiOutlineUserDelete";
    import FaSolidCloudDownloadAlt from "svelte-icons-pack/fa/FaSolidCloudDownloadAlt";

    let username = "Cherrydee";
    let fullName = "George Duniya";
    let email = "cherrydeeonthebeat@gmail.com";
    let mobileNumber = "08113460858";
    let country = "Nigeria";
</script>

<svelte:head>
    <title>
        {title} | Cherrydee Beatstore
    </title>
    <meta name="description" content="">
</svelte:head>

<div class="page-title">

    <div class="headd">
        <div class="back-icon">
            <a href="/my-account">
                <Icon src={TiArrowBack} size='1.5em' color='white' />
            </a>
        </div>
        <div class="ng">
            {title}
        </div>
        <div class="ngn">
            <Icon src={TiArrowBack} size='1.5em' color='white' />
        </div>
    </div>
</div>

<div class="app-content-p">
    <div class="app-transition-wrapper">
        <main>
            <div class="box resp-content-width">
                

                <div class="picture">
                    <Icon src={FaSolidCloudDownloadAlt} size='7rem' color='white' />
                </div>
                <div class="space20"></div>
                <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <input type="checkbox"/>
                            </div>
                            <div class="beatname">
                                Trech
                            </div>
                            <p>
                                MP3 + WAV
                            </p>
                        </div>
                </div>

                <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <input type="checkbox"/>
                            </div>
                            <div class="beatname">
                                Over Dem
                            </div>
                            <p>
                                MP3 + WAV
                            </p>
                        </div>
                </div>

                <div class="panel">
                    <div class="account-section">
                        <div class="icons">
                            <input type="checkbox"/>
                        </div>
                            <div class="beatname">
                                Belive
                            </div>
                            <p>
                                MP3 + WAV
                            </p>
                        </div>
                </div>

                <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <input type="checkbox"/>
                            </div>
                            <div class="beatname">
                                Killin Dem
                            </div>
                            <p>
                                MP3 + WAV
                            </p>
                        </div>
                </div>

                <div class="panel">
                        <div class="account-section" on:click={check}>
                            <div class="icons">
                                <input type="checkbox" />
                            </div>
                            <div class="beatname">
                                Gbese
                            </div>
                            <p>
                                MP3 + WAV
                            </p>
                        </div>
                </div>
                
                <a href="">
                    <div class="panel">
                        <div class="account-section" style="background: var(--yellow-button)" id="downloadbtn">
                            <div class="icons">
                                <Icon src={CgSoftwareDownload} size='1.2em' color='white'/>
                            </div>
                            <p>
                                Download via Email
                            </p>
                        </div>
                    </div>
                </a>
                
                <div class="space20"></div>
                <div class="space20"></div>
                <a href="">
                    <div class="panel">
                        <div class="account-section" style="background: #aa0000;" id="deletebtn">
                            <div class="icons">
                                <Icon src={AiOutlineUserDelete} size='1.2em' color='white'/>
                            </div>
                            <p>
                                Delete Track
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </main>
    </div>
</div>

<style>
.icons{
    display: flex;
}

input[type="checkbox"] {
    border: 2px red solid;
    outline: none;
    cursor: pointer;
    accent-color: #f98903;
    transition: 0.3 ease;
}
input[type="checkbox"]::before{
    border: 2px red solid;
    outline: none;
    cursor: pointer;
    accent-color: var(--purple-header);
}

.beatname{
    margin-left: 0;
    margin-right: auto;
    font-size: 14px;
    font-weight: 550;
}

p{
    margin: 0;
    font-size: 9px;
    font-weight: 550;
}

.panel{
    max-width: 700px;
    margin: auto;
}

.headd{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back-icon{
    /* transform: translateX(-450%) translateY(10%); */
    cursor: pointer;
    padding-left: 10px;
    z-index: 20;
}
.ngn{
    opacity: 0;
}

.account-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;
    background-color: #2a1f34;
    padding:  12px 16px;
    border-radius: 4px;
}

.account-section#downloadbtn p, #deletebtn p {
    margin-left: 0;
    margin-right: auto;
    font-size: 12px;
}


.picture{
    display: flex;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    margin: auto;
}


.page-title{
    display: block;
    background-color: #4c3554;
    align-items: center;
    padding: 7px 0;
    top: 27px;
    width: 100%;
    margin: auto;
    padding: 14px 0;
    margin-top: -13px;
}

.ng {
    text-align: center;
	font-size: 16px;
    color: #FFF;
    font-weight: bold;
    padding: 0 15px;
    min-width: 0;    
    
    
}

/* .page-title h1{
    font-size: 22px;
    font-weight: 700;

} */



.app-content-p {
	display: grid;
}

.app-transition-wrapper {
    justify-content: center;
    contain: content;
    isolation: isolate;
    overflow-y: auto;
    transform: translateZ(0);
}

main {
    display: block;
	margin: 0 auto;
	padding: 1.25em 0 5vh;
	padding-bottom: 3.3125vh !important;
	position: relative;
    justify-content:  center;
	transform: translateZ(0);

}

.box {
	gap: .5rem 1rem;
}

.box {
	-webkit-margin-after: 1.3333em;
	background-color: rgba(55,69,82,0);
	border-color: #1f1f1f;
	border-radius: .8em;
	border-width: 1px;
	gap: .5rem 1.25rem;
	max-width: 100%;
	user-select: none;
	width: auto;
}

.resp-content-width {
	margin: 0 auto;
	max-width: calc(100vw - 2.25em) !important;
}

@media (min-width:720px) {
    .back-icon{
        padding-left: 50px;
    }

    .ngn{
        padding-right: 50px;
    }
}
</style>