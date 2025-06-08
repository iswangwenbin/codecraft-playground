// 04_state_management.dart
// 主题：状态管理（StatefulWidget、setState、Provider 等）
// 本示例演示 Flutter 中的状态管理方式。

import 'package:flutter/material.dart';
// import 'package:provider/provider.dart'; // 如需使用 Provider，请取消注释

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CounterDemo(),
    );
  }
}

// 使用 StatefulWidget 和 setState 管理状态
class CounterDemo extends StatefulWidget {
  @override
  _CounterDemoState createState() => _CounterDemoState();
}

class _CounterDemoState extends State<CounterDemo> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('StatefulWidget 示例')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('计数: $_count'),
            ElevatedButton(
              onPressed: () => setState(() => _count++),
              child: Text('增加'),
            ),
          ],
        ),
      ),
    );
  }
}

// Provider 示例请参考官方文档：https://pub.dev/packages/provider 