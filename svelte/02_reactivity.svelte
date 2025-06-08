<!-- 02_reactivity.svelte -->
<!-- 主题：响应式声明与变量 -->
<script>
  // 普通变量
  let count = 0;

  // $: 声明响应式语句
  $: doubled = count * 2;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>点击 +1</button>
<p>count: {count}</p>
<p>响应式 doubled: {doubled}</p>

<style>
  button { margin: 8px; }
</style> 