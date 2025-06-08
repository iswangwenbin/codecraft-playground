<template>
  <button @click="$emit('reply', '子组件的回复')">回复父组件</button>
  <p>收到父组件 msg: {{ msg }}</p>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
