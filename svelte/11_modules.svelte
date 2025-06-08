<!-- 11_modules.svelte -->
<!-- 主题：Svelte 的模块化与复用 -->
<script>
  import SubComponent from './11_modules_sub.svelte';
</script>

<SubComponent text="这是一个被复用的子组件" />

<!-- 11_modules_sub.svelte -->
<!-- 子组件，需新建此文件 -->
<!--
<script>
  export let text;
</script>
<p>{text}</p>
-->

<style>
  p { color: #2980b9; }
</style> 