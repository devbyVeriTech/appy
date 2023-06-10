<script>
    let title = "Edit Profile";
    import Icon from "svelte-icons-pack";
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack";
  import { set_input_type } from "svelte/internal";


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
                

                <div class="picture">
                    <img src="/image/my-picture.jpg" alt="Cherrydee" class="my-picture">
                    <span class="edit-pic">
                        <i class="fa fa-camera "></i>
                    </span>
                </div>
                <div class="space20"></div>
                <div class="account-section">
                    
                    <div class="form-group btn-disabled">
                        <div class="form-label">
                            Userame:
                        </div>

                        <div class="form-control-group">
                            <div class="form-control">
                                <input type="text" value={username} name="username" maxlength="20" placeholder="Username">
                            </div>
                        </div>
                        <div class="form-errorMsg">
                            <span id="erroraccountUsername"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label">
                            Full Last Name:
                        </div>

                        <div class="form-control-group">
                            <div class="form-control">
                                <input type="text" value={fullName} name="fullName" placeholder="Full Name">
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
                                <input type="email" value={email} name="email" placeholder="Email">
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
                                <input type="tel" value={mobileNumber} name="mobileNumber" placeholder="Mobile Number">
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
                                <input type="text" value={country} name="country" placeholder="Country">
                            </div>
                        </div>
                        <div class="form-errorMsg">
                            <span id="erroraccountCountry"></span>
                        </div>
                    </div>
                    
                    <a id="userProfileDetailsBtn" onclick="saveupdateuserdetails()">
                        <button class="btn">
                            <span class="btnTxt ">Update</span>
                            <div class="loader d-none" id="profileloader">

                                <div class="dot-pulse"><span></span><span></span><span></span></div>
                            </div>
                        </button>
                    </a>

                </div>
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
    /* transform: translateX(-450%) translateY(10%); */
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
    transform: translateY(-30%) translateX(275%);

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
}

input{
    font-family: inherit;
    line-height: normal;
    outline: none;
}


.picture{
    display: flex;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    margin: auto;
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
    margin-top: 27px;
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