// 03_component_basics.jsx
// 主题：组件基础（函数组件与类组件）
// 本示例演示 React 函数组件和类组件的基本用法。

import React, { Component } from "react";

// 函数组件
function HelloFunc(props) {
  return <div>函数组件，Hello {props.name}!</div>;
}

// 类组件
class HelloClass extends Component {
  render() {
    return <div>类组件，Hello {this.props.name}!</div>;
  }
}

function App() {
  return (
    <div>
      <HelloFunc name="函数" />
      <HelloClass name="类" />
    </div>
  );
}

export default App;
