<!-- 12_router.vue -->
<!-- 主题：路由与页面导航（Vue Router） -->
<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "RouterDemo",
};
</script>

<style scoped>
a {
  margin: 0 8px;
  color: #42b983;
}
</style>
