<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { soundkits } from '$lib/components/soundkits';
    let title = "Sound Kits"
</script>

<svelte:head>
    <title>
        {title} | Cherrydee Beatstore
    </title>
</svelte:head>

<div class="product">
    {#each $soundkits as pack}
        <div class="product-card">

            <div class="product-image">
                <img src={"./image/"+pack.image} alt="">

                <div class="overlap">
                    <div class="buttons">
                        <button class="view">
                            View
                        </button>
                        <button class="buy">
                            ${pack.price}
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="product-details">
                <div class="product-name">
                    {pack.name}
                </div>
                
            </div>
            
            <div class="overlapp">
                <div class="buttons">
                    <button class="view">
                        View
                    </button>
                    <button class="buy">
                        ${pack.price}
                    </button>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
.product{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 50fr));
    justify-content: center;
    justify-items: center;
    width: 80%;
    gap: 40px;
    margin: auto;
    color: var(--color-bg-purple);
    
    
    
    /* 
    display: flex;
     */
}
.product-card{
    background: #fff;
    width: 100%;
    max-width: 260px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #fff;
}

.product-image{
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    margin: auto;
    position: relative;
    
}

.product-image img{
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0px 1px 8px 0px var(--color-bg-purple);    
}

.product-details{
    margin: 10px 0px;
}

.product-name{
    font-size: 20px;
    font-weight: 550;
    padding: 3px;
    width: 82%;
    margin: auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0px 1px 5px 0px var(--color-bg-purple);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
}

.product-price{
    font-size: 14px;
    font-weight: 550;
    padding: 2px 0px;
    width: 82%;
    margin: auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 1px 5px 0px var(--color-bg-purple);

}


.buttons{

    gap: 10px;
    margin: 20px auto;
}

.view{
    background: var(--color-bg-purple);
}

.buy{
    background: var(--yellow-button);
    
}

.overlap{
    display: none;
}

button{
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    width: 40%;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 4px;
    padding: 7px;
    box-shadow: 0px 1px 5px 0px var(--color-bg-purple);
}

@media  (max-width:1009px){

    .product{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 500fr));
        justify-content: center;
        justify-items: center;
        width: 80%;
        gap: 10px;
        margin: auto;
        color: var(--color-bg-purple);
        position: relative;
    }

    .product-card{
        background: #fff;
        max-width: 70%;
        border-radius: 4px;
        text-align: center;
        border: 1px solid #fff;
    }

    .product-image{
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        margin: auto; 
    }

    .product-image img{
        aspect-ratio: 1/1;
        object-fit: cover;
        width: 100%;
        height: auto;
        border-radius: 4px;
        box-shadow: 0px 1px 8px 0px var(--color-bg-purple);    
    }

    .product-name{
        font-size: 17px;
        font-weight: 550;
        padding: 3px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-shadow: none;
 
    }

    .buttons{
        display: flex;
        justify-content: center;
        gap: 10px;
        margin: auto;
    }

    button{
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        background: transparent;
        width: 50%;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 4px;
        padding: 7px;
        box-shadow: 0px 1px 5px 0px var(--color-bg-purple);
    }

    .overlap{
        display: grid;
        position: absolute;
        grid-area: auto;
        transform: translate(0px, 90px);
        margin: auto;
        margin-bottom: 4px;
        width: 100%;
    }

    .overlapp{
        display: none;
    }
}

</style>