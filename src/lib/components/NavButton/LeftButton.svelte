<script>
    import Icon from "svelte-icons-pack";
    import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";

</script>

<main>
        <button class="left">
            <Icon src={RiSystemArrowLeftSLine} size='2em' color='white' />
        </button>
</main>

<style>

    main{
        text-align: right;
    }


    button{
        cursor: pointer;
        background: transparent;
        border: none;
        border-radius: 4px;
        padding: 5px; 
        text-align: center;
    }

</style>
