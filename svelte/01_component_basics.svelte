<!-- 01_component_basics.svelte -->
<!-- 主题：Svelte 组件基础 -->
<script>
  // 组件中的脚本部分
  let name = 'Svelte';
</script>

<!-- 模板部分，使用花括号插值变量 -->
<h1>Hello, {name}!</h1>
<p>这是一个最简单的 Svelte 组件示例。</p>

<style>
  h1 {
    color: #ff3e00;
  }
</style> 