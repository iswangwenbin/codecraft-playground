// 09_composition.jsx
// 主题：组件复用与组合（children、props、HOC、render props）
// 本示例演示 React 组件组合与 children 用法。

import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>{children}</div>
  );
}

function App() {
  return (
    <Card>
      <h2>组合与复用</h2>
      <p>这是通过 children 组合的内容。</p>
    </Card>
  );
}

export default App;
