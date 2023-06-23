<script>
    import {applyAction, enhance} from '$app/forms';
    import {currentUser} from '$lib/pocketbase';

    let title = "My Account";
    import Icon from "svelte-icons-pack";
    import FiEdit from "svelte-icons-pack/fi/FiEdit";
    import RiSystemLockPasswordLine from "svelte-icons-pack/ri/RiSystemLockPasswordLine";    
    import BsCreditCard2Back from "svelte-icons-pack/bs/BsCreditCard2Back";
    import CgSoftwareDownload from "svelte-icons-pack/cg/CgSoftwareDownload";
    import FaAddressCard from "svelte-icons-pack/fa/FaAddressCard";
    import CgLogOut from "svelte-icons-pack/cg/CgLogOut";
    import AiOutlineUserDelete from "svelte-icons-pack/ai/AiOutlineUserDelete";
  import { pb } from '$lib/pocketbase';
</script>

<svelte:head>
    <title>
        {title} | Cherrydee Beatstore
    </title>
    <meta name="description" content="Cherrydee Biography, who is cherrydee, about cherrydee, cherrydee, cherrydee producer">
</svelte:head>


<div class="page-title">

    <div class="headd">
        <h1 class="ng">
            {title}
        </h1>
    </div>
</div>
<div class="app-content-p">
    <div class="app-transition-wrapper">
        <main>
            <div class="box resp-content-width">
                <div class="space10"></div>
                <div class="picture">
                    <img src="/image/my-picture.webp" alt="Cherrydee" class="my-picture">
                </div>
                <div class="space20"></div>


        {#if currentUser}
            
        
                <!-- <a href="my-account/downloads">
                    <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <Icon src={CgSoftwareDownload} size='1.2em' color='white'/>
                            </div>
                            <p>
                                Downloads
                            </p>
                        </div>
                    </div>
                </a> -->

                <a href="/my-account/edit-profile">
                    <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <Icon src={FiEdit} size='1.2em' color='white'/>
                            </div>
                            <p>
                                Edit Profile
                            </p>
                        </div>
                    </div>
                </a>

                <a href="/my-account/change-password">
                    <div class="panel">
                        <div class="account-section">
                            <div class="icons">
                                <Icon src={RiSystemLockPasswordLine} size='1.2em' color='white'/>
                            </div>
                            <p>
                                Change Password
                            </p>
                        </div>
                    </div>
                </a>
                
                <form method="POST" action="/my-account/logout" use:enhance={() => {
                    return async ({result}) => {
                        pb.authStore.clear();
                        await applyAction(result);
                    }
                }}>
                    <button>
                        <div class="panel">
                            <div class="account-section" style="background: var(--yellow-button)">
                                <div class="icons">
                                    <Icon src={CgLogOut} size='1.2em' color='white'/>
                                </div>
                                <p>
                                    Logout
                                </p>
                            </div>
                        </div>
                    </button>
                </form>
                
                <div class="space20"></div>
                <div class="space20"></div>

                <form method="POST" action="/my-account/delete" use:enhance={() => {
                    return async ({result}) => {
                        pb.authStore.delete(locals?.user?.id);
                        await applyAction(result);
                    }
                }}>
                    <button>
                        <div class="panel">
                            <div class="account-section" style="background: #aa0000;">
                                <div class="icons">
                                    <Icon src={AiOutlineUserDelete} size='1.2em' color='white'/>
                                </div>
                                <p>
                                    Delete Account
                                </p>
                            </div>
                        </div>
                    </button>
                </form>
            {/if}
        </main>
    </div>
</div>

<style>

button{
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    font-family: inherit;
}

.panel{
    max-width: 700px;
    margin: auto;
    cursor: pointer;
}

.account-section{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    background-color: #2a1f34;
    padding:  12px 16px;
    border-radius: 4px;
}

.icons{
    display: flex;
    align-items: center;
    
}

p{
    margin: 0;
    font-size: 12px;
    font-weight: 550;
}

.picture{
    display: flex;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    margin: auto;
    visibility: hidden;
}

.my-picture{
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
}

img{
    aspect-ratio: 1/1;
    width: inherit;
    height: inherit;
}

.page-title{
    display: flex;
    justify-content: center;
    background-color: #4c3554;
    align-items: center;
    padding: 7px 0;
    top: 27px;
    width: 100%;
    left: 0;
    margin-top: -13px;
}

.ng {
	font-size: 16px;
    color: #FFF;
    font-weight: bold;
    width: 100%;
    text-align: center;
    padding: 0 12px;
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
	/* border-color: #1f1f1f;
	border-radius: .8em;
	border-width: 1px; */
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
    .space20{
        padding: 28px;
    }

    .space10{
        padding: 20px;
    }
}
</style>