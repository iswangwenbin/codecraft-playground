// 13_async_data.jsx
// 主题：异步数据请求（fetch/axios、useEffect）
// 本示例演示 React 中使用 fetch 获取数据。

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h2>异步数据请求</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>加载中...</p>}
    </div>
  );
}

export default App;
