<script>
	import { Modal, Content, Trigger}  from "sv-popup"

  import {onMount} from "svelte";
	import {licenses} from "../licenses"

	



    
	
    
	let currentSongIndex = 0;
	let playerState = "pause";
	let usageterms;
	let mainElement;

</script>
<br />

<Modal basic big={true}>
  <Content>
    <h2>Hello world</h2>
  </Content>
  <Trigger>
    <button>Open modal big</button>
  </Trigger>
</Modal>
<br />


<style>


  
  button{
    border: none ;
    background: #aa0000;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    justify-content: center;
    font-family: inherit;
    padding: 12px 15px;
    border-radius: 4px;
    margin: 10px 0px;
    width: 100%;
    cursor: pointer;
    transition: 0.8s ease;
    z-index: 20;
  
  }
  
  button:hover{
    color: #1f1f1f;
    background: #fff;
  }
  
  
  
  
  @media (max-width: 440px)	{
   
  
  }
  
  @media screen and (max-width: 719px){
  
  
  }
  
  @media (min-width: 720px){
    
    
    
  }
  
  
  
  @media (prefers-reduced-motion: reduce){
  *, ::after, ::before {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: scroll !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  </style>