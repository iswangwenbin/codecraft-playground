// 07_condition_list.jsx
// 主题：条件渲染与列表渲染
// 本示例演示 React 中条件渲染和列表渲染。

import React from "react";

function App() {
  const items = ["苹果", "香蕉", "橙子"];
  const showList = true;
  return (
    <div>
      {showList ? (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>列表已隐藏</p>
      )}
    </div>
  );
}

export default App;
