// 03_layout.dart
// 主题：布局与常用布局组件（Row、Column、Stack、Container 等）
// 本示例演示 Flutter 中常用布局组件的用法。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('布局组件示例')),
        body: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.star, color: Colors.red),
                Icon(Icons.star, color: Colors.green),
                Icon(Icons.star, color: Colors.blue),
              ],
            ),
            Container(
              margin: EdgeInsets.all(16),
              padding: EdgeInsets.all(8),
              color: Colors.amber,
              child: Text('Container 示例'),
            ),
            Stack(
              alignment: Alignment.center,
              children: [
                Container(width: 100, height: 100, color: Colors.grey),
                Text('Stack'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
