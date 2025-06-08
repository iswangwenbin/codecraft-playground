// 08_lifecycle_effect.jsx
// 主题：生命周期与副作用（useEffect）
// 本示例演示 React 中 useEffect 钩子的用法。

import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `计数：${count}`;
    return () => {
      // 清理副作用
      document.title = "React App";
    };
  }, [count]);
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

export default App;
