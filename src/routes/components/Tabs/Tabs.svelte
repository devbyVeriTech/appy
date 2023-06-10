<script>
    export let items = [];
    export let activeTabValue = 1;
  
    const handleClick = tabValue => () => (activeTabValue = tabValue);
  </script>
  
  <ul>
  {#each items as item}
      <li class={activeTabValue === item.value ? 'active' : ''}>
          <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
  {/each}
  </ul>
  {#each items as item}
      {#if activeTabValue == item.value}
      <div class="box">
          <svelte:component this={item.component}/>
      </div>
      {/if}
  {/each}
  <style>
      /* .box {
          margin-bottom: 10px;
          padding: 40px;
          border: 1px solid #dee2e6;
      border-radius: 0 0 .5rem .5rem;
      border-top: 0;
      } */
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 0;
      list-style: none;
      margin: auto;
      max-width: 600px;
      padding-top: 50px;
      text-align: center;
    }
      li {
          margin-bottom: -1px;
      }
  
    span {
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 550;

    }
  
    span:hover {
      border-bottom: 2px solid var(--lt-color-background-default);
    
    }
  
    li.active > span {
      color: var(--lt-color-text-light);
      font-weight: inherit;
      border-bottom: 2px solid var(--lt-color-text-light);
    }
  </style>