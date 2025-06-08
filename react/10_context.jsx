// 10_context.jsx
// 主题：Context 与全局状态管理
// 本示例演示 React Context 的用法。

import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

function Counter() {
  const { count } = useContext(CountContext);
  return <h2>全局计数：{count}</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
      <button onClick={() => setCount(count + 1)}>增加</button>
    </CountContext.Provider>
  );
}

export default App;
