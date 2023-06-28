<script>

</script>

<div class="icons">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <!-- <div class="home">
    </div>
    <div class="music">
    </div>
    <div class="user">
    </div>
    <div class="cs">
    </div>
    <div class="drum">
    </div>
    <div class="phone">
    </div> -->
</div>

<style>

    .icons{
        display: block;
        position: relative;
    }

    .circle1{
        aspect-ratio: 1/1;
        width: 100px;
        height: auto;
        border: 15px solid transparent;
    }

    .circle2{
        aspect-ratio: 1/1;
        width: 50px;
        height: auto;
        border: 15px solid transparent;
        right: 0;
        position: absolute;
        transform: translateY(600%);
    }


    .circle3{
        aspect-ratio: 1/1;
        width: 50px;
        height: auto;
        border: 15px solid transparent;
        left: 0;
        bottom: 0;
        position: absolute;
        transform: translateY(1600%);
    }

    .circle4{
        aspect-ratio: 1/1;
        width: 50px;
        height: auto;
        border: 15px solid transparent;
        right: 0;
        position: absolute;
        transform: translateY(2600%);
    }
    
    .circle {
        border-radius: 50%;
        box-shadow: 
        var(--base-bg) 0px 0px 1px 15px, 
        var(--footer-bg) 0px 0px 1px 50px,
        var(--base-bg) 0px 0px 1px 75px,
        var(--footer-bg) 0px 0px 1px 120px
        ;
        opacity: 20%;
    }
/* 
    .home, .music, .user, .cs, .drum, .phone{
        position: absolute;
        opacity: 5%;
    }

    .home {
        right: 0;
        text-shadow: 0px 0px 0px 30px red;
    }

    .music {
        display: flex;
        justify-content: center;
        inset: 0;
        transform: translateY(450%);
    }

    .drum {
        left: 20%;
        inset: 10;
        top: 200%;
    } */
</style>