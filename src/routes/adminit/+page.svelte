<script>


</script>

<main>

    <div class="head">
        <h1>Upload portal</h1>

    </div>

    <form action="">
        <div class="formfield">
            <input type="text" class="beattitle" placeholder="Beat Title" id="beattitle">
            <input type="text" class="beattitle" placeholder="Producer" id="producer">
            <input type="text" class="beattitle" placeholder="Collaborator" id="collaborator">
            <input type="text" class="beattitle" placeholder="BPM" id="bpm">
            <input type="text" class="beattitle" placeholder="Genre" id="genre">
            <input type="text" class="beattitle" placeholder="Tag 1, Tag 2, Tag 3" id="tag">
            <input type="datetime-local" name="date" id="date" value="">
            <input type="file" name="beatimage" id="uploadart" class="upload">
        </div>

        <button class="buttonn" type="submit" value="submit">Upload Beat</button>
    </form>
</main>

<style>

    .head{
        text-align: center;
        padding: 20px;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
    }

    main{
        padding: 40px;
        top: 50%;
        left: 50%;
        margin: auto;
        font-family: inherit;
    }

    input{
        border: 1px solid var(--lt-color-border-darker);
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        font-family: inherit;
        border-radius: var(--sm-radius);
        padding-left: 10px;
        outline: none;
    }

    input::placeholder{
        font-weight: 550;
        font-size: 12px;
    }

    input.upload{
        border: none;
    }


    button{
        height: 40px;
        font-family: inherit;
        border: none;
        outline: none;
        border-radius: var(--sm-radius);
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        padding: 20px;
        cursor: pointer;
    }

    button:hover{
        background: #e40000;
        color: #fff;
    }

    .buttonn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }

</style>