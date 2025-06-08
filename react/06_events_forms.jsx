// 06_events_forms.jsx
// 主题：事件处理与表单
// 本示例演示 React 中事件处理和表单输入。

import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("提交内容：" + value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} placeholder="请输入内容" />
      <button type="submit">提交</button>
    </form>
  );
}

export default App;
