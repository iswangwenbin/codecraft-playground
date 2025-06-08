// 12_router.jsx
// 主题：路由与页面导航（React Router）
// 本示例演示 React Router 的基本用法。

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>首页</h2>;
}
function About() {
  return <h2>关于</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
