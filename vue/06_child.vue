<!-- 06_child.vue -->
<template>
  <p>子组件收到的 msg: {{ msg }}</p>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
