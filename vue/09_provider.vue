<!-- 09_provider.vue -->
<template>
  <Child />
</template>
<script>
import { provide } from "vue";
import Child from "./09_child.vue";
export default {
  name: "Provider",
  components: { Child },
  setup() {
    provide("msg", "来自 provide 的信息");
  },
};
</script>
