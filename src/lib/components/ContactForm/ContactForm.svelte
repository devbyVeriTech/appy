<script>
    import { applyAction, enhance } from "$app/forms";
    import {pb} from '$lib/pocketbase'
    export let title = "Contact";
    let name = "";
    let email =""
    let subject = "";
    let message = "";
</script>


                <div class="page-title">
                    <h1 class="ng">
                        {title}
                    </h1>
                </div>

                <form>
                    <div class="form">
                        <div class="fields">
                            <p class={name ? 'above' : 'center'}>YOUR NAME</p>
                            <input bind:value={name} type="text" name="name" id="name" placeholder="YOUR NAME">
                        </div>

                        <div class="fields">
                            <p class={email ? 'above' : 'center'}>E-MAIL ADDRESS</p>
                            <input bind:value={email} type="email" name="email" id="email" placeholder="E-MAIL ADDRESS">
                        </div>
                        
                        <div class="fields">
                            <p class={subject ? 'above' : 'center'}>SUBJECT</p>
                            <input bind:value={subject} type="text" name="subject" id="subject" placeholder="SUBJECT">
                        </div>

                        <div class="fields">                        
                            <p class={message ? 'above' : 'center'}>MESSAGE</p>
                            <input bind:value={message} type="text" name="message" id="message" placeholder="MESSAGE">
                        </div>
                        <div class="button">
                            <button name="button" type="submit" value="submit">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </form>

<style>

.above,
.center{
    /* position: absolute; */
    transform: translateY(10%);
    pointer-events: none;
    transition: 0.3s ease;
}

.above{
    top: 50;
    left: 10px;
    padding: 0 2px;

}

.center{
    top: 50%;
    left: 6px;
    opacity: 0;
}

.form{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 0px 10px;
    justify-content: center;
    margin: auto;
    
}
.form p{
    font-size: 10px;
    font-weight: 600;
}


.page-title{
    display: flex;
    justify-content: center;
}
.page-title h1{
    font-size: 25px;
    font-weight: 700;
}

.button{
    padding-top: 55px;
    display: flex;
    justify-content: flex-end;
}
.button button{
    height: 52px;
    font-size: 15px;
    padding: 15px;
    font-weight: 700;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 0.3rem;
    background: var(--primary-button);
    color: #fff;
}

.fields{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

input{
    display: block;
    background: transparent;
    border: none;
    border-bottom: .14em solid #3f2755;
    outline: none;
    color: var(--primary-text);
    font-family: 'Poppins', sans-serif; 
    transition: 0.5s ease;
}

input::placeholder{
    color: var(--primary-text);
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s ease;
}

</style>
