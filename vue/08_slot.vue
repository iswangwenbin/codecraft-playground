<!-- 08_slot.vue -->
<!-- 主题：插槽（slot）与内容分发 -->
<template>
  <div>
    <SlotDemo>
      <template #header>自定义头部内容</template>
      默认插槽内容
    </SlotDemo>
  </div>
</template>

<script>
import SlotDemo from "./08_slot_child.vue";
export default {
  name: "SlotDemoParent",
  components: { SlotDemo },
};
</script>

<!-- 08_slot_child.vue 子组件 -->
<!--
<template>
  <header><slot name="header">默认头部</slot></header>
  <main><slot /></main>
</template>
<script>
export default {};
</script>
-->

<style scoped>
header {
  color: #c0392b;
}
</style>
