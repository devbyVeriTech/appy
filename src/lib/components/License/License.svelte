<script>
    import { licenses } from "../licenses";

    
</script>




<main>
    <div class="head">
        Licenses
    </div>
    
    <div class="license-p">
        <div class="content">
            {#each $licenses as license}
                <div class="card">
                    <div class="title">
                        {license.name}
                    </div>

                    <div class="files">
                        {license.files}
                    </div>

                    <div class="price">
                        ${license.price}.00
                    </div>

                    <div class="usage">
						<ul>
							{#each license.usage as use}
							<li>
								{use}	
							</li>
							{/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>


<style>
.license-p{
	display: flex;
	margin: 0 25px;
	overflow-x: scroll;
	scroll-snap-type:x mandatory;
	overflow-anchor:auto mandatory;
}

.head{
	margin: 60px 0px 30px;
	text-align: center;
	font-size: 24px;
	font-weight: 600;
	
}

.license-p .content{
	display: flex;
	gap: 20px;
}

.license-p .card{
	border-radius: .3em;
	min-width: 15rem;
	scroll-snap-align: center;
	border: 1px solid var(--purple-footer);
}

.license-p .card .title{
	background: var(--purple-footer);
	font-weight: 600;
	font-size: 18px;
	padding-top: 20px;
	text-align: center;
	text-transform: uppercase;
}
.license-p .card .files{
	background: var(--purple-footer);
	padding-bottom: 20px;
	font-size: 12px;
	text-align: center;
}
.license-p .card .price{
	padding-top: 20px;
	font-size: 18px;
	font-weight: 550;
	text-align: center;
}
.license-p .card .usage{
	padding-top: 20px;
	font-size: 12px;
	padding-right: 5px;
}

li{
	list-style:circle
}

@media (min-width:1100px) {
	.license-p{
	display: flex;
	justify-content: center;
	margin: 0 25px;
	overflow-x: scroll;
	scroll-snap-type:x mandatory;
	overflow-anchor:auto mandatory;
}
}

</style>