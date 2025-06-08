// 11_custom_hook.jsx
// 主题：自定义 Hook
// 本示例演示如何编写和使用自定义 Hook。

import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  return [count, increment];
}

function App() {
  const [count, increment] = useCounter(5);
  return (
    <div>
      <h2>自定义 Hook 计数：{count}</h2>
      <button onClick={increment}>增加</button>
    </div>
  );
}

export default App;
