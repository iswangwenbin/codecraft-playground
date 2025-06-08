<!-- 10_js_interop.svelte -->
<!-- 主题：Svelte 与外部 JS/TS 交互 -->
<script>
  // 导入外部 JS 函数
  import { onMount } from 'svelte';
  function sayHello(name) {
    alert('Hello, ' + name + '!');
  }
  onMount(() => {
    sayHello('Svelte');
  });
</script>

<button on:click={() => sayHello('World')}>调用外部 JS 函数</button>

<style>
  button { background: #34495e; color: #fff; border: none; padding: 6px 12px; }
</style> 