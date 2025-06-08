<!-- 04_event_form.vue -->
<!-- 主题：事件处理与表单输入 -->
<template>
  <div>
    <input v-model="msg" placeholder="请输入内容" />
    <button @click="submit">提交</button>
    <p>你输入的是：{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "EventFormDemo",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    submit() {
      alert("提交内容：" + this.msg);
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 8px;
}
</style>
