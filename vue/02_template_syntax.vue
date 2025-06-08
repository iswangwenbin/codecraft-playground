<!-- 02_template_syntax.vue -->
<!-- 主题：模板语法与数据绑定 -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>当前计数：{{ count }}</p>
    <button @click="count++">增加</button>
  </div>
</template>

<script>
export default {
  name: "TemplateSyntaxDemo",
  data() {
    return {
      title: "Vue 模板语法与数据绑定",
      count: 0,
    };
  },
};
</script>

<style scoped>
button {
  color: #42b983;
}
</style>
