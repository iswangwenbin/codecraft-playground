// 14_performance.jsx
// 主题：性能优化（memo、useMemo、useCallback、懒加载等）
// 本示例演示 React 中常用性能优化方法。

import React, { useState, useMemo, useCallback, memo } from "react";

const Expensive = memo(function Expensive({ n }) {
  // 模拟耗时计算
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1e6; i++) sum += n;
    return sum;
  }, [n]);
  return <div>计算结果：{result}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((c) => c + 1), []);
  return (
    <div>
      <button onClick={handleClick}>增加</button>
      <Expensive n={count} />
    </div>
  );
}

export default App;
