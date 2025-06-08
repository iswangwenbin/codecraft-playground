// 04_props.jsx
// 主题：Props 与组件通信
// 本示例演示 React 中父子组件通过 props 通信。

import React from "react";

function Child(props) {
  return <p>子组件收到的消息：{props.message}</p>;
}

function App() {
  const msg = "来自父组件的信息";
  return (
    <div>
      <h2>父组件</h2>
      <Child message={msg} />
    </div>
  );
}

export default App;
