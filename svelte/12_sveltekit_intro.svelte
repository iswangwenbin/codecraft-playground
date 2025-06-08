<!-- 12_sveltekit_intro.svelte -->
<!-- 主题：SvelteKit 简介与路由 -->
<script>
  // SvelteKit 路由基于文件系统自动生成
  // 这里只做简单说明，实际需在 SvelteKit 项目中体验
</script>

<h2>SvelteKit 路由示例</h2>
<ul>
  <li><a href="/">首页</a></li>
  <li><a href="/about">关于</a></li>
</ul>
<p>在 SvelteKit 中，src/routes 下的 .svelte 文件会自动成为路由页面。</p>

<style>
  ul { list-style: none; padding: 0; }
  li { display: inline-block; margin-right: 16px; }
</style> 