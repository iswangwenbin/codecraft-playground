// 01_project_structure.dart
// 主题：Flutter 项目结构与入口
// 本示例演示 Flutter 应用的入口 main() 和基本项目结构。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // 根组件，通常放在 lib/main.dart
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter 项目结构与入口')),
        body: Center(child: Text('Hello, Flutter!')),
      ),
    );
  }
}
