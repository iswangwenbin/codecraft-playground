<!-- 08_slot.svelte -->
<!-- 主题：插槽（Slot）与内容分发 -->
<script>
  // 父组件
  import SlotDemo from './08_slot_child.svelte';
</script>

<SlotDemo>
  <span slot="header">自定义头部内容</span>
  <span>默认插槽内容</span>
</SlotDemo>

<!-- 08_slot_child.svelte -->
<!-- 子组件，需新建此文件 -->
<!--
<script>
  // 子组件无需特殊声明
</script>
<div>
  <header><slot name="header">默认头部</slot></header>
  <main><slot /></main>
</div>
-->

<style>
  header { color: #c0392b; }
</style> 