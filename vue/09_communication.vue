<!-- 09_communication.vue -->
<!-- 主题：组件间通信（provide/inject、EventBus、Vuex 简介） -->
<template>
  <div>
    <Provider />
  </div>
</template>

<script>
import Provider from "./09_provider.vue";
export default {
  name: "CommunicationDemo",
  components: { Provider },
};
</script>

<!-- 09_provider.vue 子组件 -->
<!--
<template>
  <Child />
</template>
<script>
import { provide } from 'vue';
import Child from './09_child.vue';
export default {
  name: 'Provider',
  components: { Child },
  setup() {
    provide('msg', '来自 provide 的信息');
  }
};
</script>
-->

<!-- 09_child.vue 孙组件 -->
<!--
<template>
  <p>inject 获取：{{ msg }}</p>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'Child',
  setup() {
    const msg = inject('msg');
    return { msg };
  }
};
</script>
-->

<style scoped>
p {
  color: #8e44ad;
}
</style>
