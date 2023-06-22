<script>
    import { applyAction, enhance } from "$app/forms";
    import { imgLink } from '$lib/avatar/utils';
    import {currentUser} from '$lib/pocketbase'
    let title = "Edit Profile";
    import Icon from "svelte-icons-pack";
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack";
    import FaSolidCamera from "svelte-icons-pack/fa/FaSolidCamera";

    let loading
    $: loading = false

    const showPreview = (event) =>{
        const target = event.target
        const files = target.files

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0])
            const preview = document.getElementById('avatar-preview')
            preview.src = src
        }
    }



    function handleFileInput(event) {
    const file = event.target.files[0];
    const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

    if (file && allowedExtensions.includes(file.type.split('/')[1])) {
        selectedFile = file;
        imageUrl = URL.createObjectURL(file);
      } else {
        selectedFile = null;
        imageUrl = null;
      }
    };


    const submitUpdateProfile = () =>{
        loading = false
        return async ({result})=>{
            switch (result.type) {
                case 'success':
                    await invalidateAll()
                    break;
                case 'error':
                    break;
                default:
                    applyAction(result)
                    break;
            }

            loading=false;
        }
    };


    export let data;
    $: loading = false
    let selectedFile = null;
    const user = data?.user;

    let imageUrl =  user?.avatar;








    let username = "";
    let fullName = "";
    let email = "";
    let mobileNumber = "";
    let country = "";
</script>

<svelte:head>
    <title>
        {title} | Cherrydee Beatstore
    </title>
    <meta name="description" content="Cherrydee Biography, who is cherrydee, about cherrydee, cherrydee, cherrydee producer">
</svelte:head>

<div class="page-title">
    <div class="headd">
        <div class="back-icon">
            <span onclick="history.back()">
                <Icon src={TiArrowBack} size='1.5em' color='white' />
            </span>
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
                
                {#if $currentUser}
                                        
                    <form action="?/update_profile" method="POST"  enctype="multipart/form-data" use:enhance={submitUpdateProfile}>
                        <div class="picture">
                            
                            <img 
                                src={$currentUser? imageUrl: imgLink('users', user.id, imageUrl)}
                                alt={$currentUser.username} 
                                class="my-picture" 
                                id="avatar-preview"
                            >
                            <label for="avatar" class="edit-pic">
                                <div class="piccky">
                                    <Icon src={FaSolidCamera} size='1em' color='white' />
                                </div>
                            </label>
                        </div>
                        <div class="space20"></div>
                        <div class="edit-picture">
                            <input 
                                type="file" 
                                name="avatar" 
                                id="avatar" 
                                value="" 
                                accept="image/*" 
                                hidden 
                                on:change={showPreview}
                            >
                        </div>
                        <div class="account-section">
                            
                            <div class="form-group btn-disabled">
                                <div class="form-label">
                                    Userame:
                                </div>

                                <div class="form-control-group">
                                    <div class="form-control">
                                        <input type="text" value={$currentUser.username} id="username" name="username" maxlength="20" placeholder="Username">
                                    </div>
                                </div>
                                <div class="form-errorMsg">
                                    <span id="erroraccountUsername"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-label">
                                    Full Name:
                                </div>
                                
                                <div class="form-control-group">
                                    <div class="form-control">
                                        <input type="text" value={$currentUser.name} name="name" placeholder="Full Name">
                                    </div>
                                </div>
                                <div class="form-errorMsg">
                                    <span id="erroraccountFulltName"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-label">
                                    Email
                                    <!-- <span class="helpTxt">(optional)</span>: -->
                                </div>

                                <div class="form-control-group">
                                    <div class="form-control">
                                        <input type="email" value={$currentUser.email} name="email" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-errorMsg">
                                    <span id="erroraccountEmail"></span>
                                </div>
                            </div>
                            <div class="form-group btn-disabled">
                                <div class="form-label">
                                    Mobile Number:
                                </div>

                                <div class="form-control-group">
                                    <div class="form-control">
                                        <input type="tel" value={$currentUser.mobileNumber} name="mobileNumber" placeholder="Mobile Number">
                                    </div>
                                </div>
                                <div class="form-errorMsg">
                                    <span id="erroraccountMobileNumber"></span>
                                </div>
                            </div>
                            <div class="form-group btn-disabled">
                                <div class="form-label">
                                    Country:
                                </div>
                                
                                <div class="form-control-group">
                                    <div class="form-control">
                                        <input type="text" value={$currentUser.country} name="country" placeholder="Country">
                                    </div>
                                </div>
                                <div class="form-errorMsg">
                                    <span id="erroraccountCountry"></span>
                                </div>
                            </div>

                                <button class="btn" type="submit" disabled={loading}>
                                    <span class="btnTxt ">Update</span>
                                </button>
                        </div>
                    </form>
                {/if}


                <!-- {#if form?.success}
                        <div class="verificationwarning" transition:fade={{duration:400}}>
                            <span>You must verify your email address</span>
                        </div>
                    {/if} -->

            </div>
        </main>
    </div>
</div>

<style>

.headd{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back-icon{
    cursor: pointer;
    padding-left: 10px;
}

.ngn{
    opacity: 0;
}

.edit-pic{
    position: absolute;
    top: 18%;
    left: 50%;
    cursor: pointer;
    transform: translateY(-50%) translateX(50%);
}

.piccky{
    background: var(--purple-button);
    padding: 10px;
    display: flex;
    border-radius: 50%;
}

.edit-picture{
    display: flex;
    margin: auto;
    width: 100%;
    padding: 0 45%;
}

.btn-disabled {
    pointer-events: none;
    opacity: .5;
    user-select: none;
}

.btn{
    border-radius: 4px;
    width: 100%;
    font-weight: bold;
    height: 40px;
    font-size: 16px;
    border: 1px solid #69428e;
    border-radius: 4px;
    width: 100%;
    font-weight: bold;
    color: #FFF;
	background-color: #69428e;
}

.btn {
	cursor: pointer;
	padding: 0 10px;
	white-space: nowrap;
}

button{
    outline: none;
    border: none;
    background: transparent;
    font-family: inherit;
}

.account-section{

    margin-bottom: 20px;
    background-color: #2a1f34;
    padding: 12px 12px 16px;
    border-radius: 4px;
    max-width: 700px;
    margin: auto;
}

.form-errorMsg {
	color: #EB5757;
	min-height: 20px;
}

.form-group *{
    box-sizing: border-box;
}

.form-label{
    font-size: 12px;
    color: #FFF;
    margin-bottom: 3px;
}

.form-control-group{
    display: flex;
    border: 1px solid #3f2755;
    border-radius: 3px;
    overflow: hidden;
}

.form-control{
    flex: 1 1 auto;
}

.form-control input{
    padding: 0 10px;
    height: 32px;
    border-radius: 3px;
    font-size: 12px;
    width: 100%;
    color: #FFF;
    border: none;
    background-color: #24182e;
    font-family: inherit;
    line-height: normal;
    outline: none;
}

.form-control input:focus{
    border-bottom: 2px solid #3f2755;
}



.picture{
    display: flex;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    margin: auto;
    cursor: pointer;
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