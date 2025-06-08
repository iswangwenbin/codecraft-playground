<!-- 08_slot_child.svelte -->
<!-- 主题：插槽子组件示例 -->
<script>
  // 子组件无需特殊声明
</script>
<div>
  <header><slot name="header">默认头部</slot></header>
  <main><slot /></main>
</div> 