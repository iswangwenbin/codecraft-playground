<!-- 10_lifecycle.vue -->
<!-- 主题：生命周期钩子 -->
<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "LifecycleDemo",
  setup() {
    const msg = ref("组件尚未挂载");
    onMounted(() => {
      msg.value = "组件已挂载";
      console.log("onMounted: 组件挂载");
    });
    onUnmounted(() => {
      console.log("onUnmounted: 组件卸载");
    });
    return { msg };
  },
};
</script>

<style scoped>
p {
  color: #16a085;
}
</style>
