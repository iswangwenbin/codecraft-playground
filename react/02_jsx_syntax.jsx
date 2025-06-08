// 02_jsx_syntax.jsx
// 主题：JSX 语法与渲染
// 本示例演示 React 中 JSX 的基本语法和渲染方式。

import React from "react";

function App() {
  const name = "React";
  const isActive = true;
  return (
    <div>
      {/* 花括号内可插入变量、表达式 */}
      <h1>Hello, {name}!</h1>
      {/* 条件渲染 */}
      {isActive ? <p>激活状态</p> : <p>未激活</p>}
      {/* 属性传递和 className 用法 */}
      <button className="btn">点击我</button>
    </div>
  );
}

export default App;
