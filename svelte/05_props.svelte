<!-- 05_props.svelte -->
<!-- 主题：Props 与组件通信 -->
<script>
  // 父组件
  import Child from './05_props_child.svelte';
  let parentMsg = '来自父组件的信息';
</script>

<Child msg={parentMsg} />

<!-- 05_props_child.svelte -->
<!-- 子组件，需新建此文件 -->
<!--
<script>
  export let msg;
</script>
<p>收到父组件传递的 msg: {msg}</p>
-->

<style>
  p { color: #e67e22; }
</style> 