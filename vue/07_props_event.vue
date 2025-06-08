<!-- 07_props_event.vue -->
<!-- 主题：Props 与自定义事件（父子通信） -->
<template>
  <div>
    <Child :msg="parentMsg" @reply="handleReply" />
    <p>收到子组件回复：{{ replyMsg }}</p>
  </div>
</template>

<script>
import Child from "./07_child.vue";
export default {
  name: "PropsEventDemo",
  components: { Child },
  data() {
    return {
      parentMsg: "父组件信息",
      replyMsg: "",
    };
  },
  methods: {
    handleReply(msg) {
      this.replyMsg = msg;
    },
  },
};
</script>

<!-- 07_child.vue 子组件 -->
<!--
<template>
  <button @click="$emit('reply', '子组件的回复')">回复父组件</button>
  <p>收到父组件 msg: {{ msg }}</p>
</template>
<script>
export default {
  props: ['msg']
};
</script>
-->

<style scoped>
button {
  color: #2980b9;
}
</style>
