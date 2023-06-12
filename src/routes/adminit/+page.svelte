<script>


</script>

<main>

    <div class="head">
        <h1>Upload portal</h1>

    </div>

    <form action="">
        <div class="formfield">
            <input type="text" name="beatTitle" class="beattitle" placeholder="Beat Title" id="beattitle">
            <input type="text" name="producer" class="beattitle" placeholder="Producer" id="producer">
            <input type="text" name="collaborator" class="beattitle" placeholder="Collaborator" id="collaborator">
            <input type="text" name="beatBPM" class="beattitle" placeholder="BPM" id="bpm">
            <input type="text" name="beatGenre" class="beattitle" placeholder="Genre" id="genre">
            <input type="text" name="beatTags" class="beattitle" placeholder="Tag 1, Tag 2, Tag 3" id="tag">
            <input type="datetime-local" name="date" id="date" value="">
            <input type="file" name="beatimage" id="beatimage" accept="image/png, image/jpeg" hidden>
            <input type="file" name="beatMP3" id="beatMP3" accept="audio/mp3" hidden>

            <div class="labels">
                <label for="beatimage" class="upload">                
                    Upload Artwork                
                </label>
                <label for="beatMP3" class="upload">                
                    Upload MP3                
                </label>
            </div>
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

    .labels{
        display: flex;
        justify-content: space-between;
        padding: 1px;
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

    input[type=file]{
    }

    input::placeholder{
        font-weight: 550;
        font-size: 12px;
    }

    .upload{
        border: none;
        background: white;
        color: var(--color-text-0);
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
        font-weight: 550;
        border-radius: var(--sm-radius);
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