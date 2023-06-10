<script>
    let title = "Checkout";
    import Icon from "svelte-icons-pack";
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack";
</script>

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

<div class="space20"></div>
<div class="space20"></div>
<div class="conttt">

    <div class="contt">
        <div class="cont">
            <div class="paypal">
                <img src="./paypal-logo.png" alt="" class="paypall" id="paystack">
            </div>
            <div class="info">
                <div class="details">
                    <div class="payment-tile">
                        Paypal
                    </div>
                    <div class="beat-tile">
                        Trench
                    </div>
                    <div class="license-tile">
                        MP3 + WAV
                    </div>
                </div>
                <div class="paybtn">
                <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
    <div class="contt">
        <div class="cont">
            <div class="flutter">
                <img src="./flutterwave-logo.svg" alt="" class="flutterwave">
            </div>
            <div class="info">
                <div class="details">
                    <div class="payment-tile">
                        Flutterwave
                    </div>
                    <div class="beat-tile">
                        Trench
                    </div>
                    <div class="license-tile">
                        MP3 + WAV
                    </div>
                </div>
                <div class="paybtn">
                <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
    <div class="contt">
        <div class="cont">
            <div class="stack">
                <img src="./paystack-logo.svg" alt="" class="paystack" id="paystack">
            </div>
            <div class="info">
                <div class="details">
                    <div class="payment-tile">
                        Paystack
                    </div>
                    <div class="beat-tile">
                        Trench
                    </div>
                    <div class="license-tile">
                        MP3 + WAV
                    </div>
                </div>
                <div class="paybtn">
                <button>Purchase</button>
                </div>
            </div>
        </div>
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

.conttt{
    display: flex;
    padding: 20px;
    align-items: center;
    margin: auto;
    max-width: 400px;
    width: 100dvw;
    height: 100dvh;
    flex-direction: column;
    color:  var(--lt-color-text-default);
}

.contt{
    gap: 20px;
    margin: 10px;
    width: 100%;

}

.cont{
    border-radius: 0px;
    overflow: hidden;
    background: #fff;
}

.flutter, .stack, .paypal{
    padding: 5px 10px;
    background: rgb(0, 174, 255);
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flutter{
    background: #F5A623;
}

.paypal{
    background: #100e91;
}

.paypal img{
    object-fit: cover;
    margin-top: 2px;
    margin-bottom: -2px;
}

.paypall{
    height: 10px;
    width: 80px;
}
.stack img, .flutter img, .paypal img{
    height: 45px;
}

img{
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    width: 100px;
}

.info{
    background: #eee;
    flex: 1 1 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.payment-tile{
    font-size: 16px;
    font-weight: bold;
}

.beat-tile{
    font-size: 12px;
    color: #666;
    font-weight: bolder;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 13em;
}

.license-tile{
    font-size: 11px;
    color: #666;
}

button{
    width: auto;
    padding: 0 20px;
    background-color: #f98903;
    color: #FFF;
    border: 1px solid #f98903;
    border-radius: 4px;
    font-weight: bold;
    height: 32px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
}

@media (min-width:959px){
    .conttt{
        display: flex;
        flex-direction: row;
        max-width: 1020px;
        align-items: flex-start;
        margin-top: 10%;
    }
}

</style>