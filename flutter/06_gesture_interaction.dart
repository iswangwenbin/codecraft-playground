// 06_gesture_interaction.dart
// 主题：事件处理与用户交互
// 本示例演示 Flutter 中的手势识别和事件处理。

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: GestureDemo(),
    );
  }
}

class GestureDemo extends StatefulWidget {
  @override
  _GestureDemoState createState() => _GestureDemoState();
}

class _GestureDemoState extends State<GestureDemo> {
  String _msg = '请点击或长按';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('手势与交互')),
      body: Center(
        child: GestureDetector(
          onTap: () => setState(() => _msg = '单击事件'),
          onLongPress: () => setState(() => _msg = '长按事件'),
          child: Container(
            padding: EdgeInsets.all(24),
            color: Colors.blueAccent,
            child: Text(_msg, style: TextStyle(color: Colors.white)),
          ),
        ),
      ),
    );
  }
}
