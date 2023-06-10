<script>
    import Icon from "svelte-icons-pack";
    import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

</script>

<main>
        <button class="right">
            <Icon src={RiSystemArrowRightSLine} size='2em' color='white' />
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
