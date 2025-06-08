<!-- 05_condition_list.vue -->
<!-- 主题：条件渲染与列表渲染（v-if、v-for） -->
<template>
  <div>
    <button @click="show = !show">{{ show ? "隐藏" : "显示" }} 列表</button>
    <ul v-if="show">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <p v-else>列表已隐藏</p>
  </div>
</template>

<script>
export default {
  name: "ConditionListDemo",
  data() {
    return {
      show: true,
      items: ["苹果", "香蕉", "橙子"],
    };
  },
};
</script>

<style scoped>
ul {
  padding-left: 20px;
}
li {
  color: #333;
}
</style>
