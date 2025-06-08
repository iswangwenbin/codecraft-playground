<!-- 11_directive_filter.vue -->
<!-- 主题：自定义指令与过滤器 -->
<template>
  <div>
    <input v-focus v-model="msg" />
    <p>{{ msg | capitalize }}</p>
  </div>
</template>

<script>
export default {
  name: "DirectiveFilterDemo",
  data() {
    return { msg: "" };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 8px;
}
</style>
