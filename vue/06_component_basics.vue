<!-- 06_component_basics.vue -->
<!-- 主题：组件基础与注册 -->
<template>
  <div>
    <Child msg="来自父组件的信息" />
  </div>
</template>

<script>
import Child from "./06_child.vue";
export default {
  name: "ComponentBasicsDemo",
  components: { Child },
};
</script>

<!-- 06_child.vue 子组件 -->
<!--
<template>
  <p>子组件收到的 msg: {{ msg }}</p>
</template>
<script>
export default {
  props: ['msg']
};
</script>
-->

<style scoped>
p {
  color: #e67e22;
}
</style>
