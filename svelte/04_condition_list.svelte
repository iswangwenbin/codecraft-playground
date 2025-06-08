<!-- 04_condition_list.svelte -->
<!-- 主题：条件渲染与列表渲染 -->
<script>
  let show = true;
  let items = ['苹果', '香蕉', '橙子'];
</script>

<button on:click={() => show = !show}>{show ? '隐藏' : '显示'} 列表</button>
{#if show}
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
{:else}
  <p>列表已隐藏</p>
{/if}

<style>
  ul { padding-left: 20px; }
  li { color: #333; }
</style> 