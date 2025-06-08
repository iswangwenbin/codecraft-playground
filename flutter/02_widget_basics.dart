// 02_widget_basics.dart
// 主题：Widget 基础与构建 UI
// 本示例演示 Flutter 中常用 Widget 的基本用法。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Widget 基础')),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('这是一个文本'),
            Icon(Icons.star, color: Colors.orange),
            ElevatedButton(
              onPressed: () {},
              child: Text('按钮'),
            ),
          ],
        ),
      ),
    );
  }
}
