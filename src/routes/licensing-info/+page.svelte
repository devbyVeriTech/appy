<script>
    import License from "$lib/components/License/License.svelte";
    import Icon from "svelte-icons-pack";
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack";
    let title = "Licensing info"
</script>

<svelte:head>
    <title>{title} | Cherrydee Beatstore</title>
</svelte:head>

<main>
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
            <div class="box resp-content-width">
                <div class="license-p">
                    <License />
                </div>
            </div>
        </div>


        <div class="space20"></div>
        <div class="space20"></div>
        <div class="space20"></div>
        <div class="space20"></div>
        
    </div>
</main>

<style>

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
    .license-p{
        margin: 0 auto;
        scroll-snap-type:x mandatory;
        overflow-anchor:auto mandatory;
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
    }
    .ngn{
        opacity: 0;
    }


.resp-content-width {
	margin: 0 auto;
	max-width: calc(100dvw - 2.25em) !important;
}

</style>