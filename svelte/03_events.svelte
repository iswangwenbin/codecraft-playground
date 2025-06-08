<!-- 03_events.svelte -->
<!-- 主题：事件处理 -->
<script>
  let message = '';
  function handleClick() {
    message = '按钮被点击了！';
  }
</script>

<button on:click={handleClick}>点击我</button>
<p>{message}</p>

<style>
  button { color: #0070f3; }
</style> 