<!-- 06_store.svelte -->
<!-- 主题：Store（状态管理） -->
<script>
  import { writable } from 'svelte/store';
  // 创建一个可写 store
  const count = writable(0);
</script>

<button on:click={() => count.update(n => n + 1)}>+1</button>
<p>count: {$count}</p>

<style>
  button { background: #27ae60; color: #fff; border: none; padding: 6px 12px; }
</style> 