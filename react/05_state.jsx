// 05_state.jsx
// 主题：State 与组件状态管理
// 本示例演示 React 中 useState 钩子的用法。

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

export default App;
