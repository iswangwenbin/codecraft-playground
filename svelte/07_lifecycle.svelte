<!-- 07_lifecycle.svelte -->
<!-- 主题：生命周期函数 -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let msg = '组件尚未挂载';
  onMount(() => {
    msg = '组件已挂载';
    console.log('onMount: 组件挂载');
    return () => {
      console.log('onDestroy: 组件卸载');
    };
  });
</script>

<p>{msg}</p>

<style>
  p { color: #16a085; }
</style> 