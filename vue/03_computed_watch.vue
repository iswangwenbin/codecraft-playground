<!-- 03_computed_watch.vue -->
<!-- 主题：计算属性与侦听器（computed、watch） -->
<template>
  <div>
    <input v-model="num" type="number" />
    <p>平方：{{ squared }}</p>
    <p>输入变化次数：{{ changeCount }}</p>
  </div>
</template>

<script>
export default {
  name: "ComputedWatchDemo",
  data() {
    return {
      num: 0,
      changeCount: 0,
    };
  },
  computed: {
    squared() {
      return this.num * this.num;
    },
  },
  watch: {
    num() {
      this.changeCount++;
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 8px;
}
</style>
