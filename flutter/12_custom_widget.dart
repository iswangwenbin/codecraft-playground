// 12_custom_widget.dart
// 主题：自定义组件与复用
// 本示例演示如何自定义 Flutter 组件并复用。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('自定义组件')),
        body: Center(
          child:
              MyButton(text: '点我', onPressed: () => print('按钮被点击')), // 复用自定义组件
        ),
      ),
    );
  }
}

// 自定义按钮组件
class MyButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  const MyButton({required this.text, required this.onPressed});
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(text),
    );
  }
}
