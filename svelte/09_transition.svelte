<!-- 09_transition.svelte -->
<!-- 主题：动画与过渡 -->
<script>
  import { fade, fly } from 'svelte/transition';
  let visible = true;
</script>

<button on:click={() => visible = !visible}>{visible ? '隐藏' : '显示'} 方块</button>
{#if visible}
  <div in:fade={{ duration: 400 }} out:fly={{ x: 200, duration: 400 }} class="box">动画方块</div>
{/if}

<style>
  .box {
    width: 120px;
    height: 60px;
    background: #9b59b6;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
  }
</style> 